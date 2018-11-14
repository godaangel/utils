import axios from 'axios'

const Request = function(method = 'post', url, params = {}, options?: { beforeRequestFunc?: Function}) {
  // 合并请求参数
  let config = Object.assign({
    url: url,
    method: method,
    params: params
  }, options)

  /**
   * 请求拦截器，可以做用户校验或者其他请求前操作等
   * @Author   Warrenyang
   * @DateTime 2018-11-14
   */
  axios.interceptors.request.use((config) => {
  	// 在发送请求之前做些什么
  	if(options && options.beforeRequestFunc) {
  		options.beforeRequestFunc(config)
  	}
    return config;
  }, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  /**
   * 响应拦截器，处理响应数据和响应错误
   * @Author   Warrenyang
   * @DateTime 2018-11-14
   */
  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data
  }, function (error) {
    // 对响应错误做点什么
    console.log('网络开小差啦')
    return Promise.reject(error)
  });

  return axios.request(config)
}

export default Request