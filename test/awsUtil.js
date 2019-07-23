require('should');

const ARNS = require('./fixtures/arns');

describe('awsUtil', function () {
    const awsUtil = require('../src/awsUtil');

    describe('#parseARN', function () {
        it('empty ARN values', function () {
            awsUtil.parseARN().should.eql({});
            awsUtil.parseARN(null).should.eql({});
            awsUtil.parseARN('').should.eql({});
        });
        it('unmatched service part', function () {
            awsUtil.parseARN('this should not match').should.eql({});
        });

        for (const [ arnIdx, { data, expected } ] of ARNS.entries()) {
            it(`match ARNS[#${arnIdx} - ${data}]`, function () {
                awsUtil.parseARN(data).should.eql(expected);
            });
        }
    });
});
