const EventEmitter = require('node:events');
const bunyan = require('bunyan');

class ConsoleStream extends EventEmitter {
    write(record) {
        const message = { ...record };
        delete message.level;
        delete message.time;
        delete message.v;

        const params = [ message ];
        const err = message.err;
        if (err) {
            delete message.err;
            params.push(err);
        }

        const level = record.level;
        if (level < bunyan.TRACE)
            console.log(...params);
        else if (level < bunyan.DEBUG)
            console.trace(...params);
        else if (level < bunyan.INFO)
            console.debug(...params);
        else if (level < bunyan.WARN)
            console.info(...params);
        else if (level < bunyan.ERROR)
            console.warn(...params);
        else
            console.error(...params);
    }

    end() {
    }

    destroy() {
        this.emit('close');
    }

    destroySoon() {
        this.destroy();
    }
}

module.exports = ({ name, ...opts } = {}) => {
    const _defaults = {
        name: name ? `cweventFormat.${name}` : 'cweventFormat',
        serializers: bunyan.stdSerializers,
        streams: [
            {
                stream: new ConsoleStream(),
                type: 'raw',
                level: process.env.LOGGING_LEVEL || 'trace',
            },
        ],
    };

    return bunyan.createLogger({ ..._defaults, ...opts });
};
