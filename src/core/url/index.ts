/**
 * 获取URL参数
 * @Author   Warrenyang
 * @DateTime 2018-06-28
 * @version  1.0.0
 * @param    {string}   name 参数名
 */
let getUrlParam = function(name: string): any {
  let reg: RegExp = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  let r: RegExpMatchArray = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null;
}

export {
	getUrlParam
}