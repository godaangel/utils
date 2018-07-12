import find from '../core/find/index';
import Mock from './Mock';
import { expect } from 'chai';
import 'mocha';

describe('test find.ts', () => {
    it('should return key', () => {
        for (let item of Mock.find) {
            console.log(item[0])
            // let result = find(item[0],item[1],item[2]); 
            // 报错了说是类型不正确  纳尼  求宗酱指教
        }
    })
})