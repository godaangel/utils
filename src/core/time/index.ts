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

  static nowDate(format: string = 'yyyy-MM-dd'): string{
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
  static format(time: Date, format: string = 'yyyy-MM-dd'): string {
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
  static timestampToTime(timestamp: number = new Date().getTime(), format: string = 'yyyy-MM-dd'): string {
  	//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  	if(timestamp.toString().length == 10){
  		timestamp = timestamp * 1000;
  	}
    let date = new Date(timestamp);
    return this.format(date, format);
  }

  static timeToTimestamp(date: string): number{
  	let time = new Date(date).getTime();
  	return time;
  }

  /**
   * 增加日期
   * @Author   Warrenyang
   * @DateTime 2018-07-04
   * @version  [version]
   * @param    {string}   date 日期，格式为yyyy-MM-dd
   * @param    {number}   num  日期差值
   * @return   {string}        返回增加以后的日期
   */
  static addDate(date: string, num: number): string { //date是2006-12-18格式 
    let translateDate = '',
      dateString = '',
      monthString = '',
      dayString = '';
    translateDate = date.replace('-', '/').replace('-', '/');
    let newDate: any = new Date(translateDate);
    newDate = newDate.valueOf();
    newDate = newDate + num * 24 * 60 * 60 * 1000;
    newDate = new Date(newDate);


    //如果月份长度少于2，则前加 0 补位   
    if ((newDate.getMonth() + 1).toString().length == 1) {
      monthString = 0 + '' + (newDate.getMonth() + 1).toString();
    } else {
      monthString = (newDate.getMonth() + 1).toString();
    }
    //如果天数长度少于2，则前加 0 补位   
    if (newDate.getDate().toString().length == 1) {
      dayString = 0 + '' + newDate.getDate().toString();
    } else {
      dayString = newDate.getDate().toString();
    }
    dateString = newDate.getFullYear() + '-' + monthString + '-' + dayString;
    return dateString;
  }

  /**
   * 日期差值
   * @Author   Warrenyang
   * @DateTime 2018-07-04
   * @version  [version]
   * @param    {string}   startDate 开始日期
   * @param    {string}   endDate   结束日期
   * @return   {number}             相差天数
   */
  static dateDiff(startDate: string, endDate: string): number {
    let startTime: number = new Date(Date.parse(startDate.replace(/-/g, '/'))).getTime();
    let endTime: number = new Date(Date.parse(endDate.replace(/-/g, '/'))).getTime();
    let dates: number = Math.abs(((startTime - endTime)) / (1000 * 60 * 60 * 24));
    return dates;
  }

}

export default TimeUtils;