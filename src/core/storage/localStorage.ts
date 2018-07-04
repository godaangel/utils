/**
 * 设置localStorage
 * @Author   Warrenyang
 * @DateTime 2018-07-04
 * @version  [version]
 * @param    {string}   key   存储的key
 * @param    {any}      value 存储的值
 */
let setLocalStorage = function(key: string, value: any): void {
    window.localStorage[key] = value;
}

/**
 * 获取localStorage
 * @Author   Warrenyang
 * @DateTime 2018-07-04
 * @version  [version]
 * @param    {string}   key 存储的key
 * @return   {any}          [description]
 */
let getLocalStorage = function(key: string): any {
    return window.localStorage[key] || undefined;
}

/**
 * 移除localStorage
 * @Author   Warrenyang
 * @DateTime 2018-07-04
 * @version  [version]
 * @param    {string}   key 存储的key
 */
let delLocalStorage = function(key: string): void {
    window.localStorage.removeItem(key);
}

export {
  setLocalStorage,
  getLocalStorage,
  delLocalStorage
}