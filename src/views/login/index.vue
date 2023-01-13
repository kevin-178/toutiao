<template>
    <div>
        <MyHeader title="登录"></MyHeader>
        <van-form @submit="submitLogin">
            <van-field v-model="phoneNum" required name="phoneNum" clearable placeholder="请输入手机号" >
                <i slot="left-icon" class="toutiao toutiao-shouji"></i>
            </van-field>
            <van-field
                v-model="phoneCode"
                center
                required
                clearable
                placeholder="请输入验证码"
                name="phoneCode"
                >
                <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
                <template #button>
                    <van-button class="send-phonecode-btn" size="small" :round="true" type="default">发送验证码</van-button>
                </template>
            </van-field>
            <div class="login-btn-wrap">
                <van-button class="login-btn" block type="info" native-type="submit" >登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    export default {
        name:"login",
        data(){
            return {
                phoneNum:'',
                phoneCode:''

            }
        },
        methods:{
           
            submitLogin(val){
                //val是表单提交的内容，对象的形式
                console.log(val)
            }
        }
    }
</script>

<style lang="less" scoped>
.van-field i{
    margin-right:10px;
}
.toutiao{
    font-size: 37px;
}
.send-phonecode-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
</style>