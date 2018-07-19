/**
 * Cookie相关代码
 */

class Cookie {
  /**
   * 设置cookie 默认30天有效期
   * @Author   Warrenyang
   * @DateTime 2018-06-28
   * @version  [version]
   * @param    {string}   name  cookie名称
   * @param    {any}      value 值
   */
  static set(name: string, value: any, days: number = 30): void {
    let exp = new Date()
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString()  + ';path=/;'
  }

  /**
   * 获取cookie
   * @Author   Warrenyang
   * @DateTime 2018-06-28
   * @version  [version]
   * @param    {string}   name cookie名称
   * @return   {any}           返回查到的cookie
   */
  static get(name: string): any {
    let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    if (arr != null) {
      return (arr[2])
    } else {
      return undefined
    }
  }

  /**
   * 删除cookie
   * @Author   Warrenyang
   * @DateTime 2018-06-28
   * @version  [version]
   * @param    {string}   name cookie名称
   */
  static del(name: string): void {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    let cval = this.get(name)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
    }
  }
}

export default Cookie