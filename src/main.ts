import Find from './core/find/index'
import IsSameObj from './core/compare/object'
import TimeUtils from './core/time/index'

import ImageLoader from './core/image/loader'

let object = {
	key: 'index',
	name: {
		first_name: 'warren',
		last_name: 'yang'
	}
}

let object2 = {
	key: 'index',
	name: {
		first_name: 'warren',
		last_name: 'yang'
	}
}

console.log('Find value -----> ', Find('yang', object, 'value'))
console.log('Find key -----> ', Find('first_name', object, 'key'))

console.log('IsSameObj -----> ', IsSameObj(object, object2))



console.log('<----- TimeUtils start -----> ')

let dateUtils = new TimeUtils()
console.log(dateUtils.timestamp, dateUtils.formatData)

let date = TimeUtils.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
console.log(date)

let date2 = TimeUtils.timestampToTime(<any> 1403058804, 'yyyy-MM-dd hh:mm:ss')
console.log(date2)

let date3 = TimeUtils.timeToTimestamp('2018-05-06 10:08:11')
console.log(date3)

let nowDate = TimeUtils.nowDate()
console.log(nowDate)

console.log('<----- TimeUtils end -----> ')

new ImageLoader(document.getElementsByTagName('img'))
new ImageLoader(document.getElementById('first_img'))


