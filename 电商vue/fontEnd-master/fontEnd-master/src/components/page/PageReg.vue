<template>
  <div class="page-reg">
    <div class="reg">
      <div class="logo">
        <img src="../../assets/img/logo.jpg" alt="">
        <p>龙江原产递</p>
      </div>
      <p class="show">
        <span v-if="flag==1">用户名不能为空</span>
        <span v-else-if="flag==2">手机号不能为空</span>
        <span v-else-if="flag==3">密码不能为空</span>
        <span v-else-if="flag==4">请输入正确的手机号</span>
        <span v-else-if="flag==5">密码只能由6-20位的数字和字母组成</span>
        <span v-else-if="flag==6">手机号码已存在</span>
        <span v-else-if="flag==7">注册成功</span>
        <span v-else-if="flag==8">注册失败</span>
      </p>
      <div class="form">
        <div class="input-group">
          <span class="input-group-addon glyphicon glyphicon-user" id="user-name"></span>
          <input type="text" class="form-control" placeholder="请输入用户名" aria-describedby="user-name" v-model="name">
        </div>
        <div class="input-group">
          <span class="input-group-addon glyphicon glyphicon-phone" id="user-tel"></span>
          <input type="text" class="form-control" placeholder="请输入手机号" aria-describedby="user-tel" v-model="tel">
        </div>
        <div class="input-group">
          <span class="input-group-addon" id="user-psw"><i class="iconfont">&#xe603;</i></span>
          <input type="password" class="form-control" placeholder="请输入6-20位密码(数字或字母)" aria-describedby="user-psw" v-model="psw">
        </div>
        <button type="button" class="btn btn-success" @click="check">注册</button>
      </div>
      <div class="other">
        <router-link to="/login">登录</router-link>
        <span>已经有账号了?</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'page-reg',
  data () {
    return {
      name:"",
      tel:"",
      psw:"",
      flag:0
    }
  },
  mounted(){
    if(document.cookie){
      this.$router.push("/home");
    }
  },
  methods:{
    check:function () {
      var name=this.name;
      var tel=this.tel;
      var psw=this.psw;
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      var regex = /^[a-zA-Z0-9]{6,20}$/;
      if(name==""){
        this.flag=1;
      }else if(tel==""){
        this.flag=2;
      }else if(psw==""){
        this.flag=3;
      }else if(!myreg.test(tel)){
        this.flag=4;
      }else if(!regex.test(psw)){
        this.flag=5;
      }else{
        this.insert_user();
      }
    },
    insert_user:function () {
      var name=this.name;
      var tel=this.tel;
      var psw=this.psw;
      Axios.get('http://localhost:3000/insert_user',{
        params:{
          name:name,
          tel:tel,
          psw:psw
        }
      }).then((res)=>{
        console.log(res.data);
        if(res.data==7){
          this.$router.push("/login");
        }else{
          this.flag=res.data;
        } 
      }).catch((error)=>{
          console.log(error);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component oly -->
<style scoped>
/*@import "../../assets/css/page/reg.css";*/
@import "../../assets/font/iconfont.css";
.page-reg{
  height: 100vh;
  background: rgb(190,205,90) url('../../assets/img/regbg.jpg') no-repeat;
  background-size: 100vw 100vh;

}
.page-reg .reg{
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.1);
}
.logo{
  padding-top: .5rem;
  width: 100%;
  text-align: center;
  /*margin-bottom: .6rem;*/
}
.logo img{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 20%;
  box-shadow: 0 0.1rem 0.1rem rgba(0,0,0,.3);
  margin: 1rem 2.45rem .2rem;
}
.logo p{
  font-size: .5rem;
  color: #fff;
  margin-bottom: .5rem;
}
.show{
  width: 5rem;
  height: .4rem;
  margin: 0 auto;
  /*padding: .1rem .9rem;*/
  color: #ec4a4a;
}
.form{
  width: 5rem;
  margin: 0rem auto;
}
.form .input-group{
  margin-top: .2rem;
}
.form .input-group span{
  background: rgba(255,255,255,.2);
}
.form .input-group input{
  background: rgba(255,255,255,.2);
  border-left: 0;
  outline: none;
}
.form .btn{
  width: 100%;
  margin-top: .3rem;
  background: rgba(34, 242, 26, 0.27);
  border: none;
}
.other{
  width: 4rem;
  margin: .3rem auto;
}
.other a,.other span{
  color: #0d1bff;
  float: right;
  margin-left: .1rem;
}
.other span{
  color: #555;
}
</style>
