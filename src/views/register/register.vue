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

<style lang="less" scoped>
.am-wingblank.am-wingblank-lg {
  margin-left: 15px;
  margin-right: 15px;
  .am-list {
    .am-list-body {
      border-bottom: none;
      border-top: none;
      &:before {
        content: "";
        position: absolute;
        background-color: #e7e7e7;
        display: block;
        z-index: 1;
        top: 0;
        right: auto;
        bottom: auto;
        left: 0;
        width: 100%;
        height: 1px;
        -webkit-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transform: scaleY(0.5);
        -ms-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
      .am-list-item {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding-left: 15px;
        min-height: 55px;
        background-color: #fff;
        vertical-align: middle;
        overflow: hidden;
        -webkit-transition: background-color 0.2s;
        -o-transition: background-color 0.2s;
        transition: background-color 0.2s;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .am-list-line {
        border-bottom: none;
        -webkit-box-align: center;
        align-items: center;
        padding-right: 0;
        position: relative;
        display: flex;
        -webkit-box-flex: 1;
        flex: 1;
        -ms-flex-item-align: stretch;
        align-self: stretch;
        overflow: hidden;
      }
      .am-list-ripple {
        position: absolute;
        background: transparent;
        overflow: hidden;
        will-change: box-shadow, transform;
        transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
          background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
          background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
          -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
        outline: none;
        cursor: pointer;
        border-radius: 100%;
        transform: scale(0);
      }
    }
  }
}
</style>

