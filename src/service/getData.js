import fetch from './fetch'

/**
 * 账号密码登录
 */
export const accountLogin = (username, password ) => fetch('/oauth/login', {username, password}, 'POST');

export const userList = () => fetch('/uaa/api/users');