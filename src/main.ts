import Ctp from './program/console-to-page';
Ctp('欢迎使用')
import Find from './core/find/index'
import IsSameObj from './core/compare/object'
import TimeUtils from './core/time/index'

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

Ctp('Find value -----> ', Find('yang', object, 'value'))
Ctp('Find key -----> ', Find('first_name', object, 'key'))

Ctp('IsSameObj -----> ', IsSameObj(object, object2))



Ctp('<----- TimeUtils start -----> ')

let dateUtils = new TimeUtils()
Ctp(dateUtils.timestamp, dateUtils.formatData)

let date = TimeUtils.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
Ctp('format ---> ', date)

let date2 = TimeUtils.timestampToTime(<any> 1403058804, 'yyyy-MM-dd hh:mm:ss')
Ctp('timestampToTime ---> ', date2)

let date3 = TimeUtils.timeToTimestamp('2018-05-06 10:08:11')
Ctp('timeToTimestamp ---> ', date3)

let nowDate = TimeUtils.nowDate()
Ctp('nowDate ---> ', nowDate)

let addedDate = TimeUtils.addDate(nowDate, 3)
Ctp('addDate 3天以后 ---> ', addedDate)

let dateDiff = TimeUtils.dateDiff('2018-07-01', '2018-07-10')
Ctp('dateDiff ---> ', dateDiff)

Ctp('<----- TimeUtils end -----> ')

import IsType from './core/type/index'
Ctp('IsType -----> ', IsType({}, 'NullObject'))

import {RandomStr, RandomNum} from './core/random/index'
Ctp('RandomStr, RandomNum -----> ', RandomStr(8), RandomNum(0, 10))

import {getUrlParam} from './core/url/index'
Ctp('getUrlParam -----> ', getUrlParam('id'), getUrlParam('name'))

import Cookie from './core/cookie/index'

Cookie.set('user_id', RandomStr(8))
Ctp('Cookie.get user_id -----> ', Cookie.get('user_id'))
Cookie.del('user_id')
Ctp('after Cookie.del user_id -----> ', Cookie.get('user_id'))

function foo() {
  Ctp('You are scrolling!');
}

function foo2() {
  Ctp('Throttle You are scrolling!');
}

// 防抖
import Debounce from './core/refunction/debounce'
window.addEventListener('scroll', Debounce(foo, 2000, true));

// 节流
import Throttle from './core/refunction/throttle'
window.addEventListener('scroll', Throttle(foo2, 2000));


import LocalStorage from './core/storage/localStorage'
Ctp('LocalStorage ------> ', LocalStorage.get('user'), LocalStorage.set('user', 123), LocalStorage.get('user'))
import SessionStorage from './core/storage/sessionStorage'
Ctp('SessionStorage ------> ', SessionStorage.get('user'), SessionStorage.set('user', 123), SessionStorage.get('user'))

// 选择图片并获取图片主题色
// import ImageColor from './core/image/color'
// window.document.getElementById('image').onchange = function(evt: any){
// 	// console.log(evt.target.files[0])
// 	let file = evt.target.files[0]
// 	let reader = new FileReader()
// 	reader.onload = function() {
// 	  // 通过 reader.result 来访问生成的 DataURL
// 	  let url: any = reader.result
// 	  let ImageColorObj = new ImageColor(url)
// 	  ImageColorObj.getMainColor()
// 	};
// 	reader.readAsDataURL(file);
// }
// let ImageColorObj = new ImageColor('./assets/WechatIMG563.jpeg')
// ImageColorObj.getMainColor()

import Request from './core/request/index'

Request('post', '/wau/calendar/get_list', {}, {
	beforeRequestFunc: (config) => {
		console.log('-----', config)
	}
}).then((res) => {
	console.log(res)
}).catch((err) => {
	console.log(err)
})