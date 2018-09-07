var  path =require('path')
module.exports = {
    entry:{
        double: "./app/runoob1.js"
    },
    output: {
        path:path.resolve(__dirname,'dist') ,
        filename: '[name].js'
    }
}