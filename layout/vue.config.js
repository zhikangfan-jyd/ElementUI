
// const path = require('path');
module.exports = {
    //为路径设置别名
    //第一种方式
    // chainWebpack: (config) => {
    //     config.resolve.alias.set('@element',path.resolve(__dirname,'src/components/element'))
    // },
    //第二种方式：
    configureWebpack:{
        resolve:{
            alias:{
                '@element':'@/components/element'
            }
        }
    }
}

