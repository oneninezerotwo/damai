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
                <input type="tel" value placeholder="请输入手机号">
              </div>
            </div>
          </div>
          <div class="am-list-item am-input-item am-list-item-middle">
            <div class="am-list-line">
              <div class="am-input-control">
                <input type="text" pattern="[0-9]*" value maxlength="4" placeholder="请输入验证码">
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
      <a role="button" class="am-button am-button-primary am-button-disabled" aria-disabled="true">
        <span>同意协议并注册</span>
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
export default {
  
};
</script>

<style lang="less" scoped>
@import "../../assets/common/register.css";
</style>

