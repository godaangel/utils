/**
 * 节流函数
 * @Author   Warrenyang
 * @DateTime 2018-06-29
 * @version  [version]
 * @param    {any}      func  传入方法
 * @param    {number}   delay 延迟时间
 */
let Throttle = function(func: any, delay: number): any {
  let timer,
    firstTime = true //记录是否是第一次执行的flag

  return function() {
    let args = arguments, //解决闭包传参问题
      context = this //解决上下文丢失问题

    if (firstTime) { //若是第一次，则直接执行
      func.apply(context, args)
      return firstTime = false
    }
    if (timer) { //定时器存在，说明有事件监听器在执行，直接返回
      return false
    }

    timer = setTimeout(function() {
      clearTimeout(timer)
      timer = null
      func.apply(context, args)
    }, delay || 500)
  }
}

export default Throttle