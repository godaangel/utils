class SessionStorage {
	/**
	 * 设置SessionStorage
	 * @Author   Warrenyang
	 * @DateTime 2018-07-04
	 * @version  [version]
	 * @param    {string}   key   存储的key
	 * @param    {any}      value 存储的值
	 */
	static set(key: string, value: any): void {
	    window.sessionStorage.setItem(key, value);
	}

	/**
	 * 获取SessionStorage
	 * @Author   Warrenyang
	 * @DateTime 2018-07-04
	 * @version  [version]
	 * @param    {string}   key 存储的key
	 * @return   {any}          [description]
	 */
	static get(key: string): any {
	    return window.sessionStorage.getItem(key) || undefined;
	}

	/**
	 * 移除SessionStorage
	 * @Author   Warrenyang
	 * @DateTime 2018-07-04
	 * @version  [version]
	 * @param    {string}   key 存储的key
	 */
	static del(key: string): void {
	    window.sessionStorage.removeItem(key);
	}
}


export default SessionStorage