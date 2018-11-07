<template>
  <div class="page-edit-address">
	<ul id="edit-dress"  >
		<li class="name" >
			<span>收货人</span>
			<input v-model="address_info.name" >
		</li>
		<li class="tel">
			<span>联系电话</span>
			<input v-model="address_info.telephone" >
		</li>
		<li class="address btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
			<span class="address-text">所在地区</span>
      <span class="de-address" v-show="show" >{{address_info.province}}{{address_info.city}}{{address_info.district}}</span>
      <span class="link-detail"> {{select.province.value}} {{select.city.value}} {{select.area.value}}&nbsp;&nbsp;&nbsp;&rsaquo;</span>

    </li>
		<li class="detail-address">
			<textarea v-model="address_info.address" placeholder="请输入详细地址"></textarea>
		</li>
	</ul>
    <strong id="tip"></strong>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h5 class="modal-title" id="myModalLabel">请选择</h5>
          </div>
          <div class="modal-body">
            <v-distpicker  type="mobile" @province="selectProvince" @city="selectCity" @area="selectArea"></v-distpicker>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="onselect" >关闭</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
	<div id="delete-save">
		<span class="save" @click="save_address" v-if="save">保存</span>
    <span class="save" @click="insert_address" v-else="save">保存</span>
	</div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import $ from 'jquery'
  import Axios from 'axios'
export default {
  name: 'page-edit-address',
  data () {
    return {
      showCode: false,
      select: { city: '市辖区', province: '北京市', area: '海淀区' },
      address_id:this.$route.params.id,
      address_info:{},
      flag:"",
      show:true,
      pro:"",
      cit:"",
      dis:"",
      success:"",
      save:"",


    }
  },
  components:{
    VDistpicker,
  },
  mounted(){
    if(document.cookie){
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      this.user_id=user_id;
      if(this.address_id!=0){
        this.save=true;
        this.get_single_address();
      }
    }
  },
  methods:{
    get_single_address:function(){
      var _this=this;
      Axios.get('http://127.0.0.1:3000/get_single_address',{
        params:{
          address_id:this.address_id,
        }
      }).then(function(res){
        _this.address_info=JSON.parse(res.data)[0];
      });
    },
    showTip(tip,type) {
      var $tip = $('#tip');
      $tip.stop(true).prop('class', 'alert alert-' + type).text(tip).css('margin-left', - $tip.outerWidth() / 2).fadeIn(300).delay(200).fadeOut(300);
    },
    save_address(){
      if(this.select.city.value=="undefined" && this.select.area.value=="undefined" && this.select.province=="undefined"){
          this.pro=this.address_info.province;
          this.cit=this.address_info.city;
          this.dis=this.address_info.district;
      }
      else{
        this.pro=this.select.province.value;
        this.cit=this.select.city.value;
        this.dis=this.select.area.value;
      }
      Axios.get('http://127.0.0.1:3000/save_address',{
        params:{
          address_id:this.address_info.receipt_id,


          name:this.address_info.name,
          tel:this.address_info.telephone,
          city:this.cit,
          pro:this.pro,
          dis:this.select.area.value,
          detail:this.address_info.address
        },

      }).then((res)=>{
          this.success=res.data;
        if(this.success==1){
          this.showTip("编辑成功","success");
        }
        setTimeout(function(){
          window.history.go(-1);
        },2000);
      });
    },
    insert_address(){
      if(this.address_info.name=='' || this.address_info.telephone=="" || this.select.city.value==undefined || this.select.province.value==undefined || this.select.area.value==undefined || this.address_info.address==""){

          this.showTip("信息不完整","danger");

      }else{

        Axios.get('http://127.0.0.1:3000/insert_address',{
          params:{
            user_id:this.user_id,
            name:this.address_info.name,
            tel:this.address_info.telephone,
            city:this.select.city.value,
            pro:this.select.province.value,
            dis:this.select.area.value,
            detail:this.address_info.address
          },
        }).then((res)=>{
          this.success=res.data;
          console.log(this.success);
          if(this.success==1){
            this.showTip("添加地址成功","success");
          }
          setTimeout(function(){
            window.history.go(-1);
          },2000);
        });
      }

    },
    onselect(){
        console.log(this.select);
        this.show=false;
    },
    selectProvince(value) {

          this.select.province = value;

    },
    selectCity(value) {
          this.select.city =value ;

    },
    selectArea(value) {
          this.select.area = value;
        }

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
    background: #eeeeee;

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

  #tip {
    position: absolute;
    top: 70%;
    left: 50%;
    display: none;
    z-index: 9999;
    background: rgba(0,0,0,0.2);
    color: #fff;
  }



	.page-edit-address{
		font-size:.2rem;
	}
	#edit-dress,#delete-save{
		padding: 0 0rem;
		margin: 0;
	}
	#edit-dress{
		border-bottom: .2rem solid #eee;
	}
	#edit-dress .detail-address{
		width: 100%;
		height: 2rem;
	}
	#edit-dress .detail-address textarea{
    border:none;
		width: 99%;
		height: 99%;
		outline:none;
	/*	outline-color: rgba(187, 188, 189, 0.46);
		outline-width: .01rem;*/
	}
  #edit-dress .btn{
    width:100%;
    border:0;
    background: #fff;
    font-size: .2rem;
    color: #333333;
    position: relative;
  }
  #edit-dress .address-text{
    float: left;
  }
  #edit-dress .link-detail{
    float : right;
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
  #edit-dress .de-address{
    position: absolute;
    right: .5rem;
  }
</style>











