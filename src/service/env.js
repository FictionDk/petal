let baseUrl = ''

if (process.env.NODE_ENV == 'development') {
    baseUrl = '//192.168.110.64'
} else {
    baseUrl = '//192.168.110.64'
}

export {
    baseUrl
}