import Find from './core/find/index'
import IsSameObj from './core/compare/object'
import TimeUtils from './core/time/index'
import IsType from './core/type/index'
import {RandomStr, RandomNum} from './core/random/index'
import {getUrlParam} from './core/url/index'
import {setCookie, getCookie, delCookie} from './core/cookie/index'
import {setLocalStorage, getLocalStorage, delLocalStorage} from './core/storage/localStorage'
import {setSessionStorage, getSessionStorage, delSessionStorage} from './core/storage/sessionStorage'
import Debounce from './core/refunction/debounce'
import Throttle from './core/refunction/throttle'

export {
	Find,
	
	IsSameObj,

	TimeUtils,

	IsType,

	RandomStr,
	RandomNum,

	getUrlParam,

	setCookie,
	getCookie,
	delCookie,

	setLocalStorage,
  getLocalStorage,
  delLocalStorage,

  setSessionStorage,
  getSessionStorage,
  delSessionStorage,

	Debounce,
	Throttle
}