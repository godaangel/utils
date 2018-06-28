/**
 * 设置cookie 默认30天有效期
 * @Author   Warrenyang
 * @DateTime 2018-06-28
 * @version  [version]
 * @param    {string}   name  cookie名称
 * @param    {any}      value 值
 */
let setCookie = function(name: string, value: any, days: number = 30): void {
  let exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString()
}

/**
 * 获取cookie
 * @Author   Warrenyang
 * @DateTime 2018-06-28
 * @version  [version]
 * @param    {string}   name cookie名称
 * @return   {any}           返回查到的cookie
 */
let getCookie = function(name: string): any {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
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
let delCookie = function(name: string): void {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
  }
}

export {
  setCookie,
  getCookie,
  delCookie
}