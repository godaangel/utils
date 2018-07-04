//操作localstorage

let setStorage = function(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}

let getStorage = function(key) {
	return JSON.parse(localStorage.getItem(key))
}

let delStorage = function(key) {
	localStorage.removeItem(key)
}

export {
  setStorage,
  getStorage,
  delStorage
}