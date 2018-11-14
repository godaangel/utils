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

/**
 * 改变URL参数
 * @Author   Warrenyang
 * @DateTime 2018-08-24
 * @version  1.0.0
 * @param    {string}   name  参数名称
 * @param    {any}      value 参数值
 */
let changeUrlParam = function(name: string, value: any): void {
    let url: string = window.location.href;
    let newUrl = '';
    let reg: any = new RegExp('(^|)' + name + '=([^&]*)(|$)');
    let tmp = name + '=' + value;
    if (url.match(reg) != null) {
      newUrl = url.replace(eval(reg), tmp);
    } else {
      if (url.match('[\?]')) {
        newUrl = url + '&' + tmp;
      } else {
        newUrl = url + '?' + tmp;
      }
    }
    location.href = newUrl;
  }

export {
	getUrlParam,
	changeUrlParam
}