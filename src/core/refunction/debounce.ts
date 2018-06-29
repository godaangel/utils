/**
 * 防抖函数
 * @Author   Warrenyang
 * @DateTime 2018-06-29
 * @version  [version]
 * @param    {Function} func      传入需要防抖的方法
 * @param    {number}   delay     执行延迟时间
 * @param    {boolean}  immediate 是否立即执行（我们不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行）
 */
let Debounce = function(func: any, delay: number, immediate: boolean): any {
  let timer: any = null;

  return function() {
    let context: object = this;
    let args: object = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
      let doNow: boolean = !timer;
      //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
      timer = setTimeout(function() {
        timer = null;
      }, delay || 500);
      //立即执行
      if (doNow) {
        func.apply(context, args);
      }
    } else {
      timer = setTimeout(function() {
        func.apply(context, args);
      }, delay || 500);
    }
  }
}

export default Debounce