import Find from './core/find/index'
import IsSameObj from './core/compare/object'

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

console.log(Find('yang', object, 'value'))

console.log(IsSameObj(object, object2))