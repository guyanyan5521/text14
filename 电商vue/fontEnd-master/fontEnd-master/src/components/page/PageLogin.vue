<template>
  <div class="page-login">
    <div class="login">
      <div class="logo">
        <img src="../../assets/img/logo.jpg" alt="">
        <p>龙江原产递</p>
      </div>
      <p class="show">
        <span v-if="flag==1">手机号不能为空</span>
        <span v-else-if="flag==2">密码不能为空</span>
        <span v-else-if="flag==3">密码错误</span>
        <span v-else-if="flag==4">登录成功</span>
        <span v-else-if="flag==5">登录失败</span>
      </p>
      <div class="form">
        <div class="input-group">
          <span class="input-group-addon glyphicon glyphicon-phone" id="user-tel"></span>
          <input type="text" class="form-control" placeholder="请输入手机号" aria-describedby="user-tel" v-model="tel">
        </div>
        <div class="input-group">
          <span class="input-group-addon" id="user-psw"><i class="iconfont">&#xe603;</i></span>
          <input type="password" class="form-control" placeholder="请输入密码" aria-describedby="user-psw" v-model="psw">
        </div>
        <button type="button" class="btn btn-success" @click="check">登录</button>
      </div>
      <div class="other">
      <a href="javascript:;">忘记密码</a>
      <router-link to="/reg">注册</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'page-login',
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
      var tel=this.tel;
      var psw=this.psw;
      if(tel==""){
        this.flag=1;
      }else if(psw==""){
        this.flag=2;
      }else{
        this.login_user();
      }   
    },
    login_user:function () {
      var tel=this.tel;
      var psw=this.psw;
      Axios.get('http://localhost:3000/login_user',{
        params:{
          tel:tel,
          psw:psw
        }
      }).then((res)=>{
        // console.log(res.data);
        if(res.data==3){
          this.flag=3;
        }else{
          this.flag=4;
          document.cookie="login_id="+JSON.parse(res.data).user_id;
          document.cookie="login_name="+JSON.parse(res.data).name;
          history.go(-1);
        }
      }).catch((error)=>{
        console.log(error);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import "../../assets/css/page/login.css";*/
@import "../../assets/font/iconfont.css";
.page-login{
  height: 100vh;
  background: rgb(190,205,90) url('../../assets/img/regbg.jpg') no-repeat;
  background-size: 100vw 100vh;

}
.page-login .login{
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
