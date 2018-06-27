/**
 * 判断值的类型
 * @Author   Warrenyang
 * @DateTime 2018-06-27
 * @version  1.0.0
 */
let IsType = function (value: any, type: string): Boolean{
	let output: boolean = false
	
	if(value){
		if(type == 'Array') {
			output = Array.isArray(value)
		}else if(type == 'String') {
			output = typeof value == 'string'
		}else if(type == 'Object') {
			output = typeof value == 'object'
		}else if(type == 'NullObject') {
			let keys = Object.keys(value);
			output = keys.length == 0
		}
	}

	return output
}

export default IsType