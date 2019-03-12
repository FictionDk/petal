<template>
<div id="loginContainer">
    <mt-swipe :auto="20000" :speed="400" :show-indicators="false" class="swipe">
        <mt-swipe-item><img class="page-lazyload-image" v-lazy="imgUrl1"></mt-swipe-item>
        <mt-swipe-item><img class="page-lazyload-image" v-lazy="imgUrl2"></mt-swipe-item>
    </mt-swipe>
    <mt-field label="" placeholder="请输入账号" type="text" v-model="username"></mt-field>
    <mt-field label="" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="default" size="large" @click.native="emailLogin">登录</mt-button>
</div>
</template>

<script type="text/javascript">
import { Field } from 'mint-ui'
import { Button } from 'mint-ui'
import { Toast } from 'mint-ui'
import { Lazyload } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { accountLogin } from '../service/getData'

import Vue from 'vue'

Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
Vue.use(Lazyload)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
    name: 'Login',
    data () {
        return {
            username: null,
            email: null,
            password: null,
            website: null,
            number: null,
            birthday: null,
            introduction: null,
            phone: null,
            res: null,
            imgUrl1: "http://192.168.110.74/file/images/2019/02/20/85e4b55c155b5fcc662bbfd6eebb907f.jpg",
            imgUrl2: "http://192.168.110.74/file/images/2019/02/20/2f815900d152edd89b6fe4cabdfca9a7.jpg"
        }
    },
    methods: {
        changePasswordType () {
        },
        async emailLogin () {
            console.log('Get:'+this.username)
            let md5password = '@@@chuanyue' + this.$md5(this.password)
            this.res = await accountLogin(this.username, md5password)
            console.log('res:'+this.res)
            var token = ""
            if(this.res.code === "0") {
                token = this.res.token
                Toast({
                    message: '登录成功',
                    iconClass: 'icon icon-sucess',
                    duration: 2000
                })
                var ses = window.sessionStorage
                ses.setItem("token",token)
                ses.setItem("username",this.res.user.username)
                ses.setItem("nickname",this.res.user.nickName)
                this.$router.push('/admin')
            }else{
                Toast({
                    message: '登录失败',
                    duration: 2000
                })
                this.password = ''
            }
        }
    }
}
</script>
<style>
.page-lazyload-image {
    margin: auto;
    width: 100%;
}
.swipe {
    width: 100%;
    height: 240px;
}
</style>
