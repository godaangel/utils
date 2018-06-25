# wii-fe-utils
前端开发公共工具库 提供即插即用的js工具  

* 当前版本 version 1.0.1

### 安装方式
`npm install wii-fe-utils`

### 目前有以下几种工具
> * [查找对象中的值或者key](#一、查找对象中的值或者key)
> * [比较两个对象是否是相同的对象](#二、比较两个对象是否是相同的对象)
> * [时间处理相关工具](#三、时间处理相关工具)

#### <span id="Find">一、查找对象中的值或者key</span>  

该工具主要用来查找某个对象中的值或者key。  

* 如果查找类型是值，则返回该值所在父节点
* 如果查找类型是key，则返回该key的值

使用方式
```javascript
// 引入Find方法
import {Find} from 'wii-fe-utils'

// 测试对象
let object = {
	key: 'index',
	name: {
		first_name: 'warren',
		last_name: 'yang'
	}
}

console.log('Find value -----> ', Find('yang', object, 'value')) 
// Find value -----> 返回object.name对象

console.log('Find key -----> ', Find('first_name', object, 'key'))
// Find key -----> warren
```
`Find`支持三个方法，`Find(toFind, Obj, type)`三个参数分别代表如下所示
```javascript
Find(toFind, obj, type)
// toFind -> 需要查找的内容，参数类型为String
// obj -> 在哪个object对象内查找，参数类型为Object
// type -> 查找类型，支持两种类型 'key' 和 'value'，默认value
```

#### <span id="IsSameObj">二、比较两个对象是否是相同的对象</span>

#### <span id="TimeUtils">三、时间处理相关工具</span>