<template>
  <div id="container">
    <div class="am-wingblank am-wingblank-lg">
      <div class="am-list">
        <div class="am-list-body">
          <div>
            <div class="am-list-item am-list-item-middle">
              <div class="am-list-line">
                <div class="am-list-content">国家地区</div>
                <div class="am-list-extra">+86</div>
                <div class="am-list-arrow am-list-arrow-horizontal" aria-hidden="true"></div>
              </div>
              <div class="am-list-ripple" style="display: none;"></div>
            </div>
          </div>
          <div class="am-list-item am-input-item am-list-item-middle">
            <div class="am-list-line">
              <div class="am-input-control">
                <input type="tel" ref="phone" placeholder="请输入手机号" @blur="regExpPhone($event)">
              </div>
            </div>
          </div>
          <div class="am-list-item am-input-item am-list-item-middle">
            <div class="am-list-line">
              <div class="am-input-control">
                <input
                  type="text"
                  pattern="[0-9]*"
                  value
                  maxlength="4"
                  placeholder="请输入验证码"
                  @blur="RegExpYzm($event)"
                >
              </div>
              <div class="am-input-extra">
                <a href="javascript:;" class="send-btn">获取验证码</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-tip"></div>
      <div class="am-whitespace am-whitespace-lg"></div>
      <a
        role="button"
        class="am-button am-button-primary"
        :class="{'am-button-disabled':okClick}"
        aria-disabled="true"
        ref="go_to"
      >
        <span @click="resgisterOk">同意协议并注册</span>
      </a>
      <div class="am-whitespace am-whitespace-md"></div>
      <div class="agreement">
        <span>
          我已阅读接受
          <a href="https://sale.damai.cn/contents/4677/13574.html" target="_blank">《大麦网会员服务协议》</a>及
          <a
            href="https://sale.damai.cn/contents/4677/13572.html"
            target="_blank"
            data-spm-anchor-id="0.7477816.0.0"
          >《隐私专项条款》</a>并同意自动注册成为会员
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      customerPhone: [],
      boolPhone: false,
      boolYzm: false,
      okClick: true
    };
  },
  mounted() {
    console.log(this.customerPhone);
  },
  computed: {
    // 如果两个验证都通过了，则把手机号码存到vuex
  },
  methods: {
    regExpPhone(ev) {
      // 获取输入框中的值,如果都通过正则，则把账号存到vuex
      var regu = /^1[3456789]\d{9}$/;
      var re = new RegExp(regu);
      let s = ev.target.value;
      if (re.test(s)) {
        this.boolPhone = true;
      } else {
        this.boolPhone = false;
      }
      console.log(this.boolPhone);
      this.submit();
    },
    RegExpYzm(ev) {
      var reg = /^\d{4}$/;
      var re = new RegExp(reg);
      let y = ev.target.value;
      if (re.test(y)) {
        this.boolYzm = true;
      } else {
        this.boolYzm = false;
      }
      console.log(this.boolYzm);
      this.submit();
    },
    submit() {
      if (this.boolPhone && this.boolYzm) {
        this.okClick = false;
      }
    },
    resgisterOk() {
      if (!this.okClick) {
        localStorage.setItem("phone", this.$refs.phone.value); //保存数据
        this.$router.push({ name: "mine" });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/common/register.css";
</style>

