import axios from "axios";
import { Notification } from 'element-ui';

/**
 * 发送请求
 * 
 * @param {String} method 
 * @param {String} url 
 * @param {Object} data 
 * @param {Boolean} requireToken 
 * @returns {Promise}
 */
function request(method, url, data, requireToken = true) {
  let errcode = 0;
  let errmsg = '';

  // 检测网址
  if (url.indexOf('{') >= 0) {
    errcode = 1001;
    errmsg = `网址 (${url}) 错误`;
  }

  // 检测 token
  else if (requireToken && !localStorage.getItem('token')) {
    errcode = 1002;
    errmsg = `当前请求 (${method}: ${url}) 需要验证`;
  }

  if (errcode || errmsg) {
    if (process.env.NODE_ENV != 'production') {
      Notification.error({ title: '错误', message: errmsg });
    }
    return Promise.reject({ errcode, errmsg });
  }

  data = {
    method, url,
    [method == 'get' ? 'params' : 'data']: data || {},
  };

  return axios(data).then(response => {
    const data = response.data;
    if (data.errcode) {
      Notification.error({ title:'错误', message:data.errmsg || data.errcode });
      throw { errcode: data.errcode, errmsg: data.errmsg, response, };
    }
    return response;
  });
}

export default request
