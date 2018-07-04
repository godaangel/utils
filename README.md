# wii-fe-utils
前端开发公共工具库 提供即插即用的js工具  

* 当前版本 version 1.0.1

### 安装方式
`npm install wii-fe-utils`

### 目前有以下几种工具
> * [查找对象中的值或者key](#查找对象中的值或者key)
> * [比较两个对象是否是相同的对象](#比较两个对象是否是相同的对象)
> * [时间处理相关工具](#时间处理相关工具)

### <span id="Find">查找对象中的值或者key</span>  

该工具主要用来查找某个对象中的值或者key。  

* 如果查找类型是值，则返回该值所在父节点
* 如果查找类型是key，则返回该key的值

`Find`支持三个参数，`Find(toFind, Obj, type)`

| 名称 | 意义 | 类型 | 默认值 |
| - | :- | :-: | :-: |
| toFind | 需要查找的内容 | String |  |  
| obj | 在哪个object对象内查找 | Object |  |  
| toFind | 查找类型，支持两种类型值 'key' 和 'value' | String | value |  

#### 使用方式
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

### <span id="IsSameObj">比较两个对象是否是相同的对象</span>  

该工具主要用来比较两个对象是否相同（值）  

* 默认深比较，支持浅比较配置  

`IsSameObj`支持三个参数，`IsSameObj(obj1, obj2, deep)`

| 名称 | 意义 | 类型 | 默认值 |
| - | :- | :-: | :-: |
| obj1 | 比较的其中一个对象 | Object |  |  
| obj2 | 比较的其中一个对象 | Object |  |  
| deep | 比较方式，是否深比较，默认进行深比较 | Boolean | true |  

#### 使用方式
```javascript
// 引入IsSameObj方法
import {IsSameObj} from 'wii-fe-utils'

// 测试对象
let object1 = {
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

let object3 = {
	key: 'index',
	name: {
		first_name: 'godaangel',
		last_name: 'yang'
	}
}

console.log('IsSameObj -----> ', IsSameObj(object1, object2))
// IsSameObj -----> true

console.log('IsSameObj -----> ', IsSameObj(object1, object3))
// IsSameObj -----> false
```

### <span id="TimeUtils">时间处理相关工具</span>