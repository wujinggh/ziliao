'use strict'
module.exports = {
    // 上线之后的静态资源文件根目录
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://s.114study.com/wenjuan' : '/',
    // SourceMap
    productionSourceMap: false,
    filenameHashing: false
}