require('should');

const EVENTS = require('./fixtures/events');


describe('handlebars', function () {
    let handlebars;
    before('init handlebars', async function () {
        handlebars = await require('../src/handlebars')();
    });

    describe('#getTemplateFiles', function () {
        it('default templates', async function () {
            const files = await handlebars.getTemplateFiles('foo', 'Hello World');

            files.should.eql({
                '_subject_': 'default._subject_.hbs',
                'email': 'default.email.hbs',
            });
        });

        it('aws.ecs/default templates', async function () {
            const files = await handlebars.getTemplateFiles('aws.ecs', 'Hello World');

            files.should.eql({
                '_subject_': 'default._subject_.hbs',
                'email': 'aws.ecs/default.email.hbs',
            });
        });

        it('aws.ecs/ECS Task State Change templates', async function () {
            const files = await handlebars.getTemplateFiles('aws.ecs', 'ECS Task State Change');

            files.should.eql({
                '_subject_': 'aws.ecs/ECS Task State Change._subject_.hbs',
                'email': 'aws.ecs/ECS Task State Change.email.hbs',
            });
        });
    });


    describe('#render', function () {
        for (const [eventIdx, event] of EVENTS.entries()) {
            it(`check EVENTS[${eventIdx}]`, async function () {
                const message = await handlebars.render(event.data);
                message.should.eql(event.expected);
            });
        }
    });
});
