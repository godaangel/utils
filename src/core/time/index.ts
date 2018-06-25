/**
 * 处理时间的工具函数
 */
class TimeUtils {
  public timestamp: number
  public formatData: string

  public constructor(timestamp: number = new Date().getTime(), format: string = 'yyyy-MM-dd') {
    this.timestamp = timestamp;
    this.formatData = format;
  }

  static nowDate(format = 'yyyy-MM-dd'){
  	let date = new Date();
    return this.format(date, format);
  }

  /**
   * 格式化时间
   * @Author   Warrenyang
   * @DateTime 2018-05-17
   * @version  [version]
   * @param    {Date}   time 时间
   * @param    {String}   format  时间格式
   */
  static format(time: Date, format: string = 'yyyy-MM-dd') {
    let o = {
      "M+": time.getMonth() + 1, //月份 
      "d+": time.getDate(), //日 
      "h+": time.getHours(), //小时 
      "m+": time.getMinutes(), //分 
      "s+": time.getSeconds(), //秒 
      "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
      "S": time.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(format)) {
    	format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o){
      if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return format;
  }

  /**
   * 时间戳转日期
   * @Author   Warrenyang
   * @DateTime 2018-05-17
   * @param    {[type]}   timestamp 时间戳
   * @param    {String}   format    日期格式，默认yyyy-MM-dd
   */
  static timestampToTime(timestamp: number = new Date().getTime(), format: string = 'yyyy-MM-dd') {
  	//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  	if(timestamp.toString().length == 10){
  		timestamp = timestamp * 1000;
  	}
    let date = new Date(timestamp);
    return this.format(date, format);
  }

  static timeToTimestamp(date: string){
  	let time = new Date(date).getTime();
  	return time;
  }
}

export default TimeUtils;