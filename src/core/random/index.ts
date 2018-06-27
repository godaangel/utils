/**
 * 生成随机字符串
 * @Author   Warrenyang
 * @DateTime 2018-06-27
 * @version  1.0.0
 * @param    {number}   len 字符串长度
 * @return   {string}       生成的字符串
 */
let RandomStr = function(len: number): string {　　
  len = len || 32
  let $chars: string = 'abcdefhijkmnprstwxyz2345678' /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
  let maxPos: number = $chars.length
  let pwd: string
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * 生成随机数
 * @Author   Warrenyang
 * @DateTime 2018-06-27
 * @version  1.0.0
 * @param    {number}   start 开始数字(包含)
 * @param    {number}   end   结束数字(包含)
 * @return   {number}         随机数字
 */
let RandomNum = function(start: number, end: number): number {
  let range = end - start
  let number = Math.round(Math.random() * range)
  return number
}

export {
	RandomStr,
	RandomNum
}