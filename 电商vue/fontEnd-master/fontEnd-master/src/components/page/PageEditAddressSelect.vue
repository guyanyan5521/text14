<template>
  <div class="page-edit-address-select">
    <ul id="edit-newdress">
      <li class="name">
        <span>收货人</span>
        <input v-model="message" placeholder="请输入姓名">
      </li>
      <li class="tel">
        <span>联系电话</span>
        <input v-model="message1" placeholder=" 请输入电话">
      </li>
      <li class="address btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        <span class="address-text">所在地区</span>
        <span class="link-detail">&rsaquo;</span>
      </li>
      <li class="detail-address">
        <textarea v-model="message2" placeholder="所在详细地址"></textarea>
      </li>
    </ul>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h5 class="modal-title" id="myModalLabel">请选择</h5>
          </div>
          <div class="modal-body">
            <v-distpicker province="北京" city="北京市" area="海淀区" type="mobile"></v-distpicker>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="onSelected">确定</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div id="delete-save">
      <span class="del" onclick="history.go(-1)">关闭</span>
      <span class="save">保存</span>
    </div>
  </div>
</template>

<script>

import VDistpicker from 'v-distpicker'
export default {
  name: 'page-edit-address-select',
  data () {
    return {


    }
  },
  components:{
  	VDistpicker,
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html{
    height:42rem;
    width: 100%;
  }
  body{
    /*background-color:#eee;*/
    background: #000;

  }
  ul{
    list-style: none;
  }
  input{
    /*outline-color: rgba(187, 188, 189, 0.46);
        outline-width: .01rem;*/
    outline:none;
    width: 80%;
    height: .6rem;
    border:none;
  }
  li{
    height: .8rem;
    line-height: .8rem;
    border-bottom: .02rem solid #eee;
    padding: 0 0.2rem;
  }
  .page-edit-address-select{
    font-size:.2rem;
  }
  #edit-newdress,#delete-save{
    padding: 0 0rem;
    margin: 0;
  }
  #edit-newdress{
    border-bottom: .2rem solid #eee;
  }
  #edit-newdress .detail-address{
    width: 100%;
    height: 2rem;
  }
  #edit-newdress .detail-address textarea{
    border:none;
    width: 99%;
    height: 99%;
    outline:none;
    /*	outline-color: rgba(187, 188, 189, 0.46);
          outline-width: .01rem;*/
  }
  #edit-newdress .btn{
    width:100%;
    border:0;
    background: #fff;
    font-size: .2rem;
    color: #333333;
  }
  #edit-newdress .address-text{
    float: left;
  }
  #edit-newdress .link-detail{
    float : right;
  }
  input::-webkit-input-placeholder {
    color: rgba(215, 217, 218, 0.7);
  }
  textarea::-webkit-input-placeholder {
    color: rgba(215, 217, 218, 0.7);
  }
  #delete-save{
    height: .8rem;
    border-bottom: .02rem solid #eee;
  }
  #delete-save .del{
    display: inline-block;
    float: left;
    /*background: rgba(255,67,0,1);*/
    height: 0.8rem;
    line-height: .8rem;
    width: 1.5rem;
    text-align: center;
    padding:0 .2rem;
    /*border-bottom: .1rem solid #eee;*/
    /*color: #fff;*/
    color: rgba(255,67,0,1);
    margin-right: .2rem;
    border-radius: .4rem;
  }
  #delete-save .save{
    display: inline-block;

    /*background: rgba(255,67,0,1);*/
    height: 0.8rem;
    line-height: .8rem;
    width: 1.5rem;
    text-align: center;
    padding:0 .2rem;
    /*color: #fff;*/
    color: rgba(255,67,0,1);
    border-radius: .4rem;
    float: right;
    /*border-bottom: .1rem solid #eee;*/

  }
</style>
