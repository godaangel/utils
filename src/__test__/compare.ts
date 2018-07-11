import IsSameObj from '../core/compare/object';
import Mock from './Mock'
import { expect } from 'chai';
import 'mocha';

describe('test compare.ts', () => {
    context('when typeof input is Object', () => {
        it('should be eqal without deep', () => {
            for (let item of Mock.compareEqalNoDeep) {
                let [a, b] = [item[0], item[1]];
                let result = IsSameObj(a, b);
                expect(result).to.be.true;
            }
        });
        it('should not be eqal without deep', () => {
            let [a, b] = [{ key1: 1 }, { key2: 2 }];
            const result = IsSameObj(a, b);
            expect(result).to.be.false;
        });
        it('should be eqal with deep', () => {
            let [a, b] = [{ key1: { key11: 'value11' } }, { key1: { key11: 'value11' } }];
            const result = IsSameObj(a, b, true);
            expect(result).to.be.true;
        });
        it('should not be eqal with deep', () => {
            let [a, b] = [{ key1: { key11: 'value11' } }, { key2: { key22: 'value22' } }];
            const result = IsSameObj(a, b, true);
            expect(result).to.be.false;
        })
    });
})