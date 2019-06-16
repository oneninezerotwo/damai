<template>
  <div id="mini-login-box">
    <div id="logo-box">
      <img src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" class="logo">
    </div>
    <div id="alibaba-login-iframe" class="iframe-loaded">
      <div id="alibaba-login-iframe-loading"></div>
      <div id="login" class="width-vertical login-label-text login-view-sms damai">
        <div class="master-login-title">短信登录</div>
        <div class="login-content nc-outer-box">
          <div class="login-sms">
            <div id="login-error" class="login-error" style="display: none;">
              <i class="iconfont icon-warning"></i>
              <div class="login-error-msg"></div>
            </div>
            <form id="login-form" class="login-form">
              <div class="fm-field fm-field-mobile">
                <label class="fm-label">
                  <span>
                    <label>手机号：</label>
                  </span>
                </label>
                <div class="phone-code-select">
                  <div class="phone-code">
                    +86
                    <i class="iconfont icon-arrow"></i>
                  </div>
                  <div class="picker-modal-container">
                    <div class="picker-modal-mask" style="display: none;"></div>
                    <div class="picker-modal">
                      <header>
                        <a href="javascript:void(0);" class="cancel-btn">取消</a>
                        <a href="javascript:void(0);" class="ok-btn">确认</a>
                      </header>
                      <div class="picker-container" style="height: 216px;">
                        <div class="picker-inner">
                          <div class="picker-column">
                            <div
                              class="picker-scroller"
                              style="transform: translate3d(0px, 90px, 0px);"
                            >
                              <div
                                class="picker-item picker-item-selected"
                                style="height: 36px; line-height: 36px;"
                              >+86 中国大陆</div>
                              <div
                                class="picker-item"
                                style="height: 36px; line-height: 36px;"
                              >+852 中国香港</div>
                              <div
                                class="picker-item"
                                style="height: 36px; line-height: 36px;"
                              >+853 中国澳门</div>
                              <div
                                class="picker-item"
                                style="height: 36px; line-height: 36px;"
                              >+886 中国台湾地区</div>
                            </div>
                          </div>
                          <div class="picker-highlight" style="height: 36px; margin-top: -18px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="input-pwa-wrap input-wrap-sms-loginid">
                  <input
                    type="tel"
                    class="fm-text"
                    id="fm-sms-login-id"
                    tabindex="1"
                    placeholder="请输入手机号"
                    autocapitalize="off"
                    v-model="value"
                  >
                  <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                  </div>
                </div>
              </div>
              <div class="fm-field fm-field-sms">
                <label class="fm-label">
                  <span>
                    <label>验证码：</label>
                  </span>
                </label>
                <div class="input-pwa-wrap input-wrap-smscode">
                  <input
                    type="tel"
                    class="fm-text"
                    id="fm-smscode"
                    tabindex="2"
                    aria-label="请输入验证码"
                    placeholder="请输入验证码,在打印那"
                    maxlength="6"
                    autocomplete="off"
                    autocapitalize="off"
                    v-model="psw"
                  >
                  <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                  </div>
                </div>
                <div class="send-btn">
                  <button href="javascript:void(0);" class="send-btn-link" :disabled='disable' @click="timer();ranNum()">{{btntxt}}</button>
                </div>
              </div>
              <div>
                <div
                  id="nocaptcha-smsLogin"
                  class="nc-container tb-login"
                  data-nc-idx="1"
                  style="display: none;"
                >
                  <div id="nc_1_wrapper" class="nc_wrapper">
                    <div id="nc_1_n1t" class="nc_scale">
                      <div id="nc_1__bg" class="nc_bg"></div>
                      <span id="nc_1_n1z" class="nc_iconfont btn_slide"></span>
                      <div id="nc_1__scale_text" class="scale_text slidetounlock">
                        <span class="nc-lang-cnt" data-nc-lang="_startTEXT">请按住滑块，拖动到最右边</span>
                      </div>
                      <div id="nc_1_clickCaptcha" class="clickCaptcha">
                        <div class="clickCaptcha_text">
                          <b id="nc_1__captcha_text" class="nc_captch_text"></b>
                          <i id="nc_1__btn_2" class="nc_iconfont nc_btn_2 btn_refresh"></i>
                        </div>
                        <div class="clickCaptcha_img"></div>
                        <div class="clickCaptcha_btn"></div>
                      </div>
                      <div id="nc_1_imgCaptcha" class="imgCaptcha">
                        <div class="imgCaptcha_text">
                          <input
                            id="nc_1_captcha_input"
                            maxlength="6"
                            type="text"
                            style="ime-mode:disabled"
                          >
                        </div>
                        <div class="imgCaptcha_img" id="nc_1__imgCaptcha_img"></div>
                        <i
                          id="nc_1__btn_1"
                          class="nc_iconfont nc_btn_1 btn_refresh"
                          onclick="document.getElementById('nc_1__imgCaptcha_img').children[0].click()"
                        ></i>
                        <div class="imgCaptcha_btn">
                          <div id="nc_1__captcha_img_text" class="nc_captcha_img_text"></div>
                          <div id="nc_1_scale_submit" class="nc_scale_submit"></div>
                        </div>
                      </div>
                      <div id="nc_1_cc" class="nc-cc"></div>
                      <i
                        id="nc_1__voicebtn"
                        tabindex="0"
                        role="button"
                        class="nc_voicebtn nc_iconfont"
                        style="display:none"
                      ></i>
                      <b id="nc_1__helpbtn" class="nc_helpbtn">
                        <span class="nc-lang-cnt" data-nc-lang="_learning">了解新功能</span>
                      </b>
                    </div>
                    <div id="nc_1__voice" class="nc_voice"></div>
                  </div>
                </div>
              </div>
              <div class="fm-btn">
                <router-link  :to="url"  @click.native="sendcode()" class="fm-button fm-submit sms-login">登录</router-link>
              </div>
              <div class="login-blocks login-links">
                <a href="javascript:void(0);" target="_self" class="password-login-link">账号密码登录</a>
                <a
                  href="https://ipassport.damai.cn/member/reg/enter_reg.htm?_regfrom=DAMAI&amp;tg=https%3A%2F%2Fm.damai.cn%2Fdamai%2Fselect-seat%2Fhouniao%2Findex.html%3FitemId%3D595542197209%26performId%3D210052474%26skuId%3D4135766961110%26privilegeActId%3D%26channel%3Ddamai_app%26spm%3Da2o71.project.bottom.dbuy"
                  target="_top"
                  class="register-link"
                >新用户注册</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      value :"",
      psw : "",
      time :60,
      
      btntxt:"获取验证码",
      url : '',
      disable : false,
     
      yanzheng :'',
    }
  },
  computed:{
    
  },
  methods:{
    // setCookie() {
      
    //   //key:键名   value：键值    iDay：失效时间
    // //					document.cookie = 'name=malin;expires=20190527;path=/';
    //   var now = new Date();
    //   now.setDate(now.getDate() + 7);//iDay:5天后失效， -1：立即失效
    //   document.cookie = 'uname' + '=' + this.value + ';expires=' + now + ';path=/';
    // },
      sendcode(){
       
                var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
                if(this.value==''){
                   alert("请输入手机号码");
                }else if(!reg.test(this.value)){
                    alert("手机格式不正确");
                    // console.log(this.value);
                }else if(this.psw!=this.yanzheng || this.psw==""  || this.yanzheng==""){
                  alert("验证码不正确");
                  this.url = "/login"
                }
                else{
                    this.url = '/mine'
                     console.log(111);
                  
                   var now = new Date();
      now.setDate(now.getDate() + 7);//iDay:5天后失效， -1：立即失效
      document.cookie = 'uname' + '=' + this.value + ';expires=' + now + ';path=/';
                    
                    // this.disabled=true;
                    // this.timer();
                    /*axios.post(url).then(
                        res=>{
                        this.phonedata=res.data;
                    })*/
                     
               }
            },
            ranNum() {
                // var html = ''; //用于存随机数的变量
                for(var i = 0; i < 6; i++) {
                  //随机数：0-9
                  this.yanzheng += parseInt(Math.random() * 10); //0-9
                }
                //	console.log(html);
                // return this.yanzheng; //返回值
                console.log(this.yanzheng)
            },
            timer() {
              var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
              
              if(reg.test(this.value)){
                  
                  
                   
                   if (this.time > 0) {
                     this.time--;
                     this.btntxt=this.time+"s后重新获取";
                     setTimeout(this.timer, 1000);
                    this.disable = true;
                    //  console.log(this.time,this.disable)
                     
                    

                } else{
                     this.time=60;
                     this.btntxt="获取验证码";
                     
                     this.disable = false;
                }
                
              }
                
            },
  }
    
})
</script>

<style lang="less" scoped>
a{
    text-decoration: none;
}
#mini-login-box {
  text-align: center;
  #logo-box {
    height: 3.26667rem;
    .logo {
      width: 2.66667rem;
      height: 1.21333rem;
      margin-top: 1.02667rem;
    }
  }
  #alibaba-login-iframe {
    position: absolute;
    top: 3.26667rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.width-vertical {
    width: 100%;
    margin-bottom: 20px;
}
body.damai.mobile .width-vertical, body.damai.mobile .width-vertical .login-content {
    width: 100%;
}
.width-vertical {
    width: 100%;
    margin-bottom: 20px;
}
.master-login-title {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin: 0 auto 10px;
}
body.damai.mobile .master-login-title {
    display: none;
}
body.damai.mobile .width-vertical, body.damai.mobile .width-vertical .login-content {
    width: 100%;
}
.width-vertical .login-content {
    width: 100%;
    margin: 0 auto;
}
.nc-outer-box {
    padding-top: 2px;
}
.login-label-text .login-error {
    margin-bottom: 10px;
}
.login-error {
    border: 1px solid #ff934c;
    background: #fefcee;
    margin-bottom: 16px;
    font-size: 14px;
    padding: 5px 8px;
    overflow: hidden;
}
.login-error .iconfont {
    color: #ff934c;
    float: left;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.login-error .login-error-msg {
    font-size: 12px;
    padding-left: 20px;
}
.login-label-text .fm-field {
    margin-bottom: 10px;
}
.fm-field {
    position: relative;
    margin-bottom: 20px;
    font-size: 14px;
}
.login-label-text .fm-field .fm-label {
    padding: 5px 0;
    display: block;
    color: #222;
    overflow: hidden;
}
body.damai.mobile #login-form .fm-field .fm-label {
    display: none;
}
.login-label-text .phone-code-select {
    left: 0;
    z-index: 9;
}
.phone-code-select {
    position: absolute;
    left: 40px;
    bottom: 0;
}
body.damai.mobile .phone-code-select .phone-code {
    border-color: #e7e7e7;
    border-bottom: 0;
}
.phone-code-select .phone-code {
    width: 70px;
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    border-right: 1px solid #ccc;
    position: relative;
    cursor: pointer;
    border-bottom: 0;
}
.phone-code-select .phone-code .icon-arrow {
    margin-left: 3px;
    font-size: 12px;
}
.picker-modal, .picker-modal-mask {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: none;
}
.picker-modal-mask {
    top: 0;
    right: 0;
    z-index: 1;
    display: none;
    height: 100%;
    background: transparent;
}
body.damai.mobile .picker-modal-container .picker-modal {
    background-color: #fff;
}
.picker-modal {
    z-index: 2;
    border-top: 1px solid #97979712;
    background-color: #efeff4;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
}
.picker-modal, .picker-modal-mask {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
.picker-modal header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    background-color: #fbf9fe;
}
body.damai.mobile .picker-modal-container .picker-modal header {
    background-color: #fff;
    border-bottom: 1px solid #eee;
}
body.damai.mobile .picker-modal-container .picker-modal header .title, body.damai.mobile .picker-modal-container .picker-modal header a {
    color: #ff1268;
    font-size: 14px;
}
body.damai.mobile .login-view-sms a {
    font-size: 12px;
    float: left;
    margin: 0;
    color: #999;
}
.picker-modal header .cancel-btn {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    color: #888;
}
.picker-modal header a {
    text-decoration: none;
    color: #04be02;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.picker-container, .picker-container *, .picker-container :after, .picker-container :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.picker-container {
    z-index: 10001;
    width: 100%;
    height: 216px;
}
.picker-container .picker-inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%;
    padding: 0 20px;
    font-size: 1.2em;
    -webkit-mask-box-image: linear-gradient(0deg,transparent,transparent 5%,#fff 20%,#fff 80%,transparent 95%,transparent);
}
.picker-container .picker-column {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    position: relative;
    max-height: 100%;
    overflow: hidden;
    text-align: center;
        box-sizing: border-box;
}
.picker-container .picker-column .picker-scroller {
    -webkit-transition: .3s;
    transition: .3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
body.damai.mobile .picker-modal-container .picker-item, body.damai.mobile .picker-modal-container .picker-item-selected {
    font-size: 14px;
}
.picker-container .picker-column .picker-item.picker-item-selected {
    color: #222;
}
.picker-container .picker-column .picker-item {
    position: relative;
    padding: 0 10px;
    white-space: nowrap;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
}
.picker-container .picker-highlight {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    pointer-events: none;
        height: 36px;
    margin-top: -18px;
}
.picker-container .picker-highlight:before {
    top: 0;
    bottom: auto;
}
.picker-container .picker-highlight:after, .picker-container .picker-highlight:before {
    content: " ";
    position: absolute;
    left: 0;
    right: auto;
    display: block;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.picker-container .picker-highlight:after {
    bottom: 0;
    top: auto;
}
.picker-container .picker-highlight:after, .picker-container .picker-highlight:before {
    content: " ";
    position: absolute;
    left: 0;
    right: auto;
    display: block;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.input-pwa-wrap {
    position: relative;
    padding: 0;
    *zoom: 1;
}
body.damai.mobile .input-pwa-wrap .fm-text {
    border-bottom: none;
}
body.damai.mobile .fm-field .fm-text {
    border-color: #e7e7e7;
}
.login-label-text .fm-field.fm-field-mobile .fm-text {
    padding-left: 80px;
}
body.damai.mobile .fm-text {
    border: none;
    border-bottom: 1px solid #ddd;
}
body.mobile .fm-field .fm-text {
    border-radius: 0;
}
.width-auto .fm-btn, .width-auto .fm-text, .width-vertical .fm-btn, .width-vertical .fm-text {
    width: 100%;
}
.fm-field .fm-text {
    border: 1px solid #ccc;
    height: 42px;
    outline: none;
    font-size: 14px;
    padding-left: 50px;
}
.input-pwa-wrap .fm-text {
    border-bottom: none;
}
.fm-field.fm-field-mobile .fm-text {
    padding-left: 120px;
}
.input-pwa-wrap .underline {
    position: relative;
}
body.damai.mobile .input-pwa-wrap .underline .unfocused-line {
    background: #e7e7e7;
}

.input-pwa-wrap .underline .unfocused-line {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ccc;
    height: 1px;
}
body.damai.mobile .input-pwa-wrap .underline .focused-line {
    background: #ff1268;
}

.input-pwa-wrap .underline .focused-line {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ff9000;
    height: 2px;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
}
.login-label-text .fm-field {
    margin-bottom: 10px;
}

.fm-field {
    position: relative;
    margin-bottom: 20px;
    font-size: 14px;
}
body.damai.mobile #login-form .fm-field .fm-label {
    display: none;
}
.login-label-text .fm-field .fm-label {
    padding: 5px 0;
    display: block;
    color: #222;
    overflow: hidden;
}
.input-pwa-wrap {
    position: relative;
    padding: 0;
    *zoom: 1;
}
body.damai.mobile .input-pwa-wrap .fm-text {
    border-bottom: none;
}

body.damai.mobile .fm-field .fm-text {
    border-color: #e7e7e7;
}
body.damai.mobile .fm-text {
    border: none;
    border-bottom: 1px solid #ddd;
}
body.mobile .fm-field .fm-text {
    border-radius: 0;
}
.input-pwa-wrap .fm-text {
    border-bottom: none;
}
.width-auto .fm-btn, .width-auto .fm-text, .width-vertical .fm-btn, .width-vertical .fm-text {
    width: 100%;
}
.login-label-text .fm-text {
    padding-left: 10px;
}
.fm-field .fm-text {
    border: 1px solid #ccc;
    height: 42px;
    outline: none;
    font-size: 14px;
    padding-left: 50px;
}
.input-pwa-wrap .underline {
    position: relative;
}
body.damai.mobile .input-pwa-wrap .underline .unfocused-line {
    background: #e7e7e7;
}
.input-pwa-wrap .underline .unfocused-line {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ccc;
    height: 1px;
}
body.damai.mobile .input-pwa-wrap .underline .focused-line {
    background: #ff1268;
}

.input-pwa-wrap .underline .focused-line {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ff9000;
    height: 2px;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
}
body.damai.mobile .fm-field-sms .send-btn {
    border-radius: 20px;
    padding: 0 10px;
    margin-bottom: 8px;
    background: #fff1f6;
    line-height: 25px;
}

.fm-field-sms .send-btn {
    position: absolute;
    right: 10px;
    bottom: 0;
    line-height: 40px;
}
body.damai.mobile .fm-field-sms .send-btn a {
    color: #fc347b;
}

body.damai.mobile .login-view-sms a {
    font-size: 12px;
    float: left;
    margin: 0;
    color: #999;
}
.fm-field-sms .send-btn a {
    text-decoration: none;
}
body.damai.mobile .nc-container {
    margin-top: 20px;
}

.nc-container.tb-login {
    position: relative;
    margin-top: 20px;
    display: none;
}
body .nc-container {
    margin-bottom: 20px;
}

.nc-container {
    font-size: 12px;
    -ms-touch-action: none;
    touch-action: none;
}
.nc-container .nc_wrapper {
    width: auto;
}
.nc-container.tb-login .nc_scale {
    width: auto;
}

body .nc-container .nc_scale, body .nc-container .nc_scale .scale_text {
    height: 40px;
    line-height: 40px;
}

.nc_scale {
    width: auto;
    height: 34px;
    background: #e8e8e8;
    position: relative;
    margin: 0;
    padding: 0;
}
.nc-container .nc_scale .scale_text {
    height: 40px;
    line-height: 40px;
}


.nc-container .nc_scale .scale_text {
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    z-index: 1;
    background: transparent;
    color: #9c9c9c;
    line-height: 34px;
    font-size: 12px;
    cursor: pointer;
}

.nc-container .nc_scale div {
    height: auto;
}
body .nc-container.tb-login .clickCaptcha, body .nc-container.tb-login .imgCaptcha {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}


.nc-container.tb-login .clickCaptcha {
    padding-top: 40px;
}

.nc-container.tb-login .imgCaptcha, .nc-container.tb-login .clickCaptcha {
    width: 252px;
    *width: 256px;
    border: 0;
    *height: 300px;
    min-height: 300px;
    max-height: inherit !important;
}

.nc-container .nc_scale .clickCaptcha {
    position: absolute;
    left: 0;
    top: 35px;
    height: 270px;
    background: #fff;
    display: none;
}

.nc-container .nc_scale .imgCaptcha, .nc-container .nc_scale .clickCaptcha {
    display: none;
    overflow: hidden;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 20000;
}

.nc-container .nc_scale div {
    height: auto;
}

.nc-container .imgCaptcha, .nc-container .clickCaptcha {
    text-align: left;
}
.nc-container.tb-login .clickCaptcha .clickCaptcha_text {
    text-indent: 4px;
}

.nc-container .nc_scale .clickCaptcha .clickCaptcha_text {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #999;
}

.nc-container .nc_scale .clickCaptcha div {
    position: static;
    clear: both;
    width: 100%;
    background: #fff;
    height: auto;
}

.nc-container .nc_scale div {
    height: auto;
}
.nc-container .nc_scale .clickCaptcha .clickCaptcha_text b {
    font-weight: normal;
}
.nc-container.tb-login .nc_btn_2 {
    top: 36px;
}


.nc-container .clickCaptcha_text .btn_refresh {
    font-size: 20px;
}

.nc_iconfont.nc_btn_2 {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}

.clickCaptcha_text .btn_refresh {
    font-style: normal;
    cursor: pointer;
    background: #fff;
    color: #737383;
}

.nc_btn_2 {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    margin: 2px 9px 0 0;
}

.nc_iconfont {
    font-family: "nc_iconfont";
    color: #ff3f08;
    font-size: 16px;
    font-style: normal;
}
.nc-container .nc_scale .clickCaptcha div {
    position: static;
    clear: both;
    width: 100%;
    background: #fff;
    height: auto;
}

.nc-container .clickCaptcha .clickCaptcha_img {
    margin: 0 auto;
    clear: both;
    position: relative;
}

.nc-container .nc_scale div {
    height: auto;
}
.nc-container .nc_scale .clickCaptcha div {
    position: static;
    clear: both;
    width: 100%;
    background: #fff;
    height: auto;
}

.nc-container .clickCaptcha .clickCaptcha_btn {
    margin: 10px 0 0 15px;
    position: relative;
    text-align: left;
}

.nc-container .nc_scale div {
    height: auto;
}
body .nc-container.tb-login .clickCaptcha, body .nc-container.tb-login .imgCaptcha {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}


.nc-container.tb-login .imgCaptcha {
    padding-top: 66px;
}

.nc-container.tb-login .imgCaptcha, .nc-container.tb-login .clickCaptcha {
    width: 252px;
    *width: 256px;
    border: 0;
    *height: 300px;
    min-height: 300px;
    max-height: inherit !important;
}

.nc-container .nc_scale .imgCaptcha {
    height: auto;
}

.nc-container .nc_scale .imgCaptcha, .nc-container .nc_scale .clickCaptcha {
    display: none;
    overflow: hidden;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 20000;
}

.nc-container .nc_scale div {
    height: auto;
}

.nc-container .imgCaptcha, .nc-container .clickCaptcha {
    text-align: left;
}

.nc-container .imgCaptcha {
    position: absolute;
    left: 0;
    top: 35px;
    height: auto;
    padding-bottom: 15px;
    border: 1px solid #ccc;
    background: #fff;
}
.nc-container.tb-login .imgCaptcha .imgCaptcha_text {
    width: 100px;
    margin-left: 0;
}

 
.nc-container .imgCaptcha .imgCaptcha_text {
    height: 42px;
    line-height: 42px;
    width: 120px;
    background: #fff;
    font-size: 14px;
    text-align: left;
    color: #747474;
    float: left;
    margin-left: 10px;
}

.nc-container .imgCaptcha div {
    position: static;
    width: 90%;
    background-color: #fff;
}

.nc-container .nc_scale div {
    height: auto;
}
.nc-container .imgCaptcha .imgCaptcha_text input {
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    width: 90px;
    background: #fff;
}

body .nc-container .imgCaptcha_text input {
    border: 1px solid #bbbbbf;
}
.nc-container.tb-login .imgCaptcha .imgCaptcha_img {
    width: 120px;
    _width: 100px;
}


.nc-container .imgCaptcha .imgCaptcha_img {
    margin: 4px 0 0 100px;
    height: 40px;
    width: 130px;
    overflow: hidden;
    cursor: pointer;
}

.nc-container .imgCaptcha div {
    position: static;
    width: 90%;
    background-color: #fff;
}

.nc-container .nc_scale div {
    height: auto;
}
.nc-container.tb-login .imgCaptcha .imgCaptcha_btn {
    width: 100%;
    margin-left: 0;
}


.nc-container .imgCaptcha .imgCaptcha_btn {
    margin: 0 0 0 12px;
    *margin-left: 0;
    clear: both;
    padding-top: 5px;
    width: 90%;
}

.nc-container .imgCaptcha div {
    position: static;
    width: 90%;
    background-color: #fff;
}

.nc-container .nc_scale div {
    height: auto;
}
.nc-container.tb-login .nc_btn_1 {
    top: 77px;
    _top: 57px;
}


.nc_iconfont.nc_btn_1 {
    position: absolute;
    top: 10px;
    right: 5px;
}

.imgCaptcha .btn_refresh {
    font-size: 20px;
    cursor: pointer;
    background: #fff;
    color: #737383;
}

.nc_btn_1 {
    top: 10px;
    right: 10px;
}

.nc_iconfont {
    font-family: "nc_iconfont";
    color: #ff3f08;
    font-size: 16px;
    font-style: normal;
}
body.damai.mobile .nc-container .nc_scale .imgCaptcha .nc_scale_submit {
    background-color: #ff1268;
    background-image: -webkit-gradient(linear,left top,right top,from(#ff4aae),to(#ff1268));
    background-image: linear-gradient(90deg,#ff4aae,#ff1268);
}

body .nc-container .nc_scale .imgCaptcha .nc_scale_submit {
    background-color: #ff9000;
}

.nc-container.tb-login .imgCaptcha .nc_scale_submit {
    width: 100%;
    height: 36px;
    line-height: 36px;
    margin-top: 20px;
    margin-left: 0;
    border-radius: 3px;
    font-size: 16px;
    font-family: Tahoma,Helvetica,Arial,sans-serif;
    background: #ff3f08;
}

.nc-container .imgCaptcha .nc_scale_submit {
    margin: 0 auto;
    cursor: pointer;
    background-color: #fc461e;
    width: 120px;
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
}

.nc-container .imgCaptcha div {
    position: static;
    width: 90%;
    background-color: #fff;
}
body.damai.mobile #login-form .fm-field .fm-label {
    display: none;
}
label{
  display: none;
}
.fm-label{
  display: none;
}
.login-label-text .fm-field .fm-label {
    padding: 5px 0;
    display: block;
    color: #222;
    overflow: hidden;
}
.nc-container .nc_scale div {
    height: auto;
}
.nc-container .nc_scale .nc-cc {
    display: none;
    position: absolute;
    left: 0;
    top: 35px;
    z-index: 20000;
    width: 360px;
    height: 570px;
    border: 1px solid #5eaef1;
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
    line-height: 18px;
    color: #333;
}


.nc-container .nc_scale div {
    height: auto;
}
.nc_voicebtn {
    position: absolute;
    padding: 0;
    right: -25px;
    font-size: 23px;
    color: #888;
    cursor: pointer;
    line-height: 34px;
}


.nc_iconfont {
    font-family: "nc_iconfont";
    color: #ff3f08;
    font-size: 16px;
    font-style: normal;
}
.nc_helpbtn {
    position: absolute;
    cursor: pointer;
    right: -95px;
    top: 4px;
    font-size: 12px;
    background-color: #ffb668;
    color: #fff;
    padding: 4px;
    border-radius: 2px;
    line-height: 18px;
    display: none;
}
.nc-container .nc_scale span.nc-lang-cnt {
    *line-height: 34px;
    float: none;
    width: auto;
    height: auto;
    *height: 34px;
    border: none;
    position: static;
    cursor: inherit;
    background: none;
    z-index: 0;
    display: inline;
}

body .nc-container .nc_scale span {
    width: 42px;
    height: 40px;
    line-height: 40px;
}

.nc-container .nc_scale span {
    text-align: center;
    width: 40px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    cursor: move;
    background: #fff;
    z-index: 2;
}
.nc_voice {
    display: none;
    position: relative;
    margin-top: -34px;
    z-index: 99;
    width: auto;
    height: 34px;
    background: #fff;
}
.width-auto .fm-btn, .width-auto .fm-text, .width-vertical .fm-btn, .width-vertical .fm-text {
    width: 100%;
}

.login-label-text .fm-btn {
    margin-top: 20px;
}
body.damai.mobile .login-view-sms .fm-submit {
    margin-top: 0;
}

body.damai.mobile .fm-button {
    font-size: 18px;
}
body.damai.mobile .fm-button {
    background-color: #ff1268;
    background-image: -webkit-gradient(linear,left top,right top,from(#ff4aae),to(#ff1268));
    background-image: linear-gradient(90deg,#ff4aae,#ff1268);
    border-color: #ff1268;
}
.fm-button{
  display:block;
    background-color: #ff9000;
    background-image: -webkit-gradient(linear,left top,right top,from(#ff9000),to(#ff9000));
    background-image: linear-gradient(90deg,#ff9000,#ff9000);
    border: 1px solid #ff9000;
    border-radius: 3px;
    font-size: 20px;
    height: 42px;
    line-height: 42px;
    outline: none;
    color: #fff;
    width: 100%;
    cursor: pointer;
}
.login-blocks {
    margin: 8px 0;
    text-align: right;
    zoom: 1;
}
body.damai.mobile .login-view-sms .password-login-link {
    width: 50%;
    text-align: left;
}

body.damai.mobile .login-view-sms a {
    font-size: 12px;
    float: left;
    margin: 0;
    color: #999;
}
.login-blocks a {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
}
.login-blocks:after, .login-blocks:before {
    content: " ";
    display: table;
}
.login-blocks:after {
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
}

.login-blocks:after, .login-blocks:before {
    content: " ";
    display: table;
}


</style>
