/**
 * Created by dell on 2017/11/18.
 */
const path =require('path');
module.exports={
    entry:{
        entry: './src/index.js'},
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
}