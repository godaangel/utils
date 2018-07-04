import Find from './core/find/index'
import IsSameObj from './core/compare/object'
import TimeUtils from './core/time/index'

// import ImageLoader from './core/image/loader'

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
console.log('format ---> ', date)

let date2 = TimeUtils.timestampToTime(<any> 1403058804, 'yyyy-MM-dd hh:mm:ss')
console.log('timestampToTime ---> ', date2)

let date3 = TimeUtils.timeToTimestamp('2018-05-06 10:08:11')
console.log('timeToTimestamp ---> ', date3)

let nowDate = TimeUtils.nowDate()
console.log('nowDate ---> ', nowDate)

let addedDate = TimeUtils.addDate(nowDate, 3)
console.log('addDate 3天以后 ---> ', addedDate)

let dateDiff = TimeUtils.dateDiff('2018-07-01', '2018-07-10')
console.log('dateDiff ---> ', dateDiff)

console.log('<----- TimeUtils end -----> ')

// new ImageLoader(document.getElementsByTagName('img'))
// new ImageLoader(document.getElementById('first_img'))


import IsType from './core/type/index'
console.log('IsType -----> ', IsType({}, 'NullObject'))

import {RandomStr, RandomNum} from './core/random/index'
console.log('RandomStr, RandomNum -----> ', RandomStr(8), RandomNum(0, 10))

import {getUrlParam} from './core/url/index'
console.log('getUrlParam -----> ', getUrlParam('id'), getUrlParam('name'))

import {setCookie, getCookie, delCookie} from './core/cookie/index'

setCookie('user_id', RandomStr(8))
console.log('getCookie user_id -----> ', getCookie('user_id'))
delCookie('user_id')
console.log('after delCookie user_id -----> ', getCookie('user_id'))

function foo() {
  console.log('You are scrolling!');
}

function foo2() {
  console.log('Throttle You are scrolling!');
}

// 防抖
import Debounce from './core/refunction/debounce'
window.addEventListener('scroll', Debounce(foo, 2000, true));

// 节流
import Throttle from './core/refunction/throttle'
window.addEventListener('scroll', Throttle(foo2, 2000));


import {setLocalStorage, getLocalStorage, delLocalStorage} from './core/storage/localStorage'
import {setSessionStorage, getSessionStorage, delSessionStorage} from './core/storage/sessionStorage'


