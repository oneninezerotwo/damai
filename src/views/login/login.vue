<template>
  <div>
    <div id="logo-box">
      <img
        src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png"
        class="logo"
      />
    </div>
    <div
      id="mini-login-body"
      scroll="no"
      class="damai lang-zh_CN mobile theme-default"
      data-spm
    >
      <div
        id="login"
        class="width-vertical login-label-text login-view-sms damai"
      >
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
                        <a href="#" class="cancel-btn">取消</a>
                        <a href="#" class="ok-btn">确认</a>
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
                              >
                                +86 中国大陆
                              </div>
                              <div
                                class="picker-item"
                                style="height: 36px; line-height: 36px;"
                              >
                                +852 中国香港
                              </div>
                              <div
                                class="picker-item"
                                style="height: 36px; line-height: 36px;"
                              >
                                +853 中国澳门
                              </div>
                              <div
                                class="picker-item"
                                style="height: 36px; line-height: 36px;"
                              >
                                +886 中国台湾地区
                              </div>
                            </div>
                          </div>
                          <div
                            class="picker-highlight"
                            style="height: 36px; margin-top: -18px;"
                          ></div>
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
                    v-model="phone"
                  />
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
                    placeholder="请输入验证码"
                    maxlength="6"
                    autocomplete="off"
                    autocapitalize="off"
                    v-model="incode"
                  />
                  <div class="underline">
                    <div class="unfocused-line"></div>
                    <div class="focused-line"></div>
                  </div>
                </div>
                <div class="send-btn">
                  <a href="#" class="send-btn-link" @click="getcode"
                    >获取验证码</a
                  >
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
                      <div
                        id="nc_1__scale_text"
                        class="scale_text slidetounlock"
                      >
                        <span class="nc-lang-cnt" data-nc-lang="_startTEXT"
                          >请按住滑块，拖动到最右边</span
                        >
                      </div>
                      <div id="nc_1_clickCaptcha" class="clickCaptcha">
                        <div class="clickCaptcha_text">
                          <b id="nc_1__captcha_text" class="nc_captch_text"></b>
                          <i
                            id="nc_1__btn_2"
                            class="nc_iconfont nc_btn_2 btn_refresh"
                            ></i
                          >
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
                          />
                        </div>
                        <div
                          class="imgCaptcha_img"
                          id="nc_1__imgCaptcha_img"
                        ></div>
                        <i
                          id="nc_1__btn_1"
                          class="nc_iconfont nc_btn_1 btn_refresh"
                          onclick="document.getElementById('nc_1__imgCaptcha_img').children[0].click()"
                          ></i
                        >
                        <div class="imgCaptcha_btn">
                          <div
                            id="nc_1__captcha_img_text"
                            class="nc_captcha_img_text"
                          ></div>
                          <div
                            id="nc_1_scale_submit"
                            class="nc_scale_submit"
                          ></div>
                        </div>
                      </div>
                      <div id="nc_1_cc" class="nc-cc"></div>
                      <i
                        id="nc_1__voicebtn"
                        tabindex="0"
                        role="button"
                        class="nc_voicebtn nc_iconfont"
                        style="display:none"
                        ></i
                      >
                      <b id="nc_1__helpbtn" class="nc_helpbtn">
                        <span class="nc-lang-cnt" data-nc-lang="_learning"
                          >了解新功能</span
                        >
                      </b>
                    </div>
                    <div id="nc_1__voice" class="nc_voice"></div>
                  </div>
                </div>
              </div>
              <div class="fm-btn">
                <div
                  class="fm-button fm-submit sms-login"
                  @click="checkall"
                  style="text-align: center"
                >
                  登录
                </div>
              </div>
              <div class="login-blocks login-links">
                <a href="#" target="_self" class="password-login-link"
                  >账号密码登录</a
                >
                <a href="#" target="_top" class="register-link">新用户注册</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="_umfp"
        style="display:inline;width:1px;height:1px;overflow:hidden"
      >
        <!-- umidServer已经带了/ -->
        <img
          src="https://ynuf.alipay.com/service/clear.png?xt=950e11ec8e442a589fd20b7a1c2c7267b59fe340&amp;xa=090D1F110F1878292829161C"
        />
      </div>
      <div v-text="tip" class="tip" v-show="showtip"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      phone: "",
      code: "h",
      incode: "",
      tip: "手机号格式不正确",
      phoneok: 0,
      codeok: 0,
      showtip: 0
    };
  },
  methods: {
    getcode() {
      let html =
        "0987654321qwertyuioplkjhgfdsazxcvbnmZXCVBNMLKJHGFDSAQWERTYUIOP";
      let res = "";
      for (let i = 0; i < 4; i++) {
        let now = parseInt(Math.random() * html.length);
        res += html[now];
      }
      this.code = res;
      console.log(this.code);
    },
    checkphone() {
      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.phone)) {
        this.phoneok = 1;
      } else {
        this.phoneok = 0;
        this.tip = "手机号格式不正确"
        this.showtip = 1;
        setTimeout(() => {
          this.showtip = 0;
        }, 2000);
      }
    },
    checkcode() {
      if (this.phoneok) {
        if (this.code.toLowerCase() === this.incode) {
          this.codeok = 1;
        } else {
          this.codeok = 0;
          this.tip = "验证码不正确";
          this.showtip = 1;
          setTimeout(() => {
            this.showtip = 0;
          }, 2000);
        }
      }
    },
    checkall() {
      this.checkphone();
      this.checkcode();
      if (this.phoneok && this.codeok) {
        this.$router.push("/mine");
        let now = new Date();
        now.setDate(now.getDate() + 7);
        document.cookie = "uname=" + this.phone + ";expires=" + now + ";path=/";
      }
    }
  }
});
</script>


<script>
export default {};
</script>



<style lang="less" scoped>
@import "../../assets/common/login.css";
@import "../../assets/common/damai.css";
#logo-box {
  height: 3.26667rem;
  text-align: center;
  .logo {
    width: 2.66667rem;
    height: 1.21333rem;
    margin-top: 1.02667rem;
  }
}
.tip {
  width: 4rem;
  height: 1.333333rem;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.4rem;
  line-height: 1.333333rem;
  text-align: center;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translateX(50%);
}
</style>

