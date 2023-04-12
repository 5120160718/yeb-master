let proxyObj={}

//代理的使用
proxyObj['/']={

    //websocket
    ws:false,
    //目标地址这个就是后端的端口地址，用来向后端发送请求的
    target:'http://localhost:9099',
    //发送请求头host会被设置成target
    changeOrigin: true,
    //不重写请求地址
    pathRewrite:{
        '^/':'/'
    }
}

module.exports={
    devServer:{
        host:'localhost',
        port: 8080,
        proxy: proxyObj
    }
}