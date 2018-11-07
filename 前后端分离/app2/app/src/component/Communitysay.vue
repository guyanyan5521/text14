<template>
    <div id="communitysay">
        <table width="100%">

            <tr>
                <td align="center"><img src="../assets/icon/zhuanfa.png" alt=""></td>
                <td align="center"><router-link to="/Fabiao"><img src="../assets/icon/fabiao.png" alt=""></router-link></td>
                <td align="center"><img src="../assets/icon/zan.png" alt=""></td>
            </tr>

        </table>
    </div>
</template>
<script>
    export default{
        name:'communitysay',
        data(){
            return{

            }
        }
    }
</script>
<style>
    #communitysay{
        background: #fff;
        height: 30px;
        width: 100%;
        border-bottom: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        margin-top: 30px;

    }
    #communitysay img{
        width: 20px;
        height: 20px;
    }
    #communitysay td{
        line-height: 30px;
        border-right: 1px solid #cccccc;
    }
    #communitysay td:last-child{
        border-right:none;
    }
</style>