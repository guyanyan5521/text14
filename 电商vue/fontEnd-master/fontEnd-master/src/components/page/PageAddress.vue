<template>
  <div class="page-address">
    <ul id="address">
      <li class="address-list" v-for="elem in address_info"  @click="select_address(elem.receipt_id)">
        <div class="name-tel">
          <span class="name">{{elem.name}}</span>
          <span class="tel">{{elem.telephone}}</span>
        </div>
        <p class="address">{{elem.province}}{{elem.district}}{{elem.city}}{{elem.address}}

        </p>
        <div class="edit">
          <router-link :to="'/user/address/edit/'+elem.receipt_id"><span type="button" class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-edit"></span> 编辑

          </span></router-link>
          <span type="button" class="btn btn-primary btn-lg" @click="delete_address(elem.receipt_id)">
            <span class="glyphicon glyphicon-remove"></span> 删除
          </span>
        </div>
      </li>

    </ul>
    <router-link to="/user/address/edit/0"><div id="footer">
      添加新地址
    </div> </router-link>
  </div>

</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import Axios from 'axios'
import $ from 'jquery'
export default {
  name: 'page-address',
  data () {
    return {
      user_id:"",
      address_info:{}
    }
  },
  components:{

  },
  mounted(){
    if(document.cookie){
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      this.user_id=user_id;
      this.get_address();



    }
  },
  created(){
    window.scrollTo(0,0);
  },
  methods:{
    select_address:function(ads_id){
      this.$store.dispatch('get_address',[ads_id]);
      window.history.go(-1);
    },
      get_address:function(){
        var _this=this;
        Axios.get('http://127.0.0.1:3000/get_address',{
          params:{
            userid:this.user_id,
          }
        }).then(function(res){
          _this.address_info=JSON.parse(res.data);
          console.log(_this.address_info);
        });
      },
      delete_address:function(ads_id){

        console.log(this.address_info[0].receipt_id);
        Axios.get('http://127.0.0.1:3000/delete_address',{
          params:{
            address_id:ads_id,
          }
        }).then((res)=>{
          this.flag=JSON.parse(res.data);
          this.get_address();
        });
      },

  }

}
</script>

<style scoped>
  body{
    background: #fff;
  }
  .page-address{
    /*padding:.2rem 0  1rem .2rem ;*/
    font-size:.2rem;
    padding-top: .2rem;
  }
  ul{
    background: #fff;
    list-style: none;
    padding:0;
    padding-bottom:2rem;

  }
  p{
    margin:0;
  }
  #address .address-list{
    /*height: 2rem;*/
    border-bottom: .2rem solid #eee;
  }
  #address .name-tel ,#address .address{
    padding:0 .2rem;

  }
  #address .name-tel{
    height: .6rem;
    line-height: .6rem;
  }
  #address .address{
    padding-bottom: .2rem;
    border-bottom:.02rem solid #eee;
  }
  #address .btn{
    font-size: .2rem;
    width: 1rem;
    height: .6rem;
    padding:0;
    background: #fff;
    color: #333;
    border:0;
    line-height: .6rem;
    display: inline-block;
  }
  #footer{
    height: 1rem;
    width:100%;
    line-height: 1rem;
    background: rgba(255,67,0,1);
    position: fixed;
    bottom:0;
    text-align: center;
    font-size: .3rem;
    color: #fff;
  }
</style>
