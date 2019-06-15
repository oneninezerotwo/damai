<template>
  <div id="mini-login-box">
    <div id="logo-box">
      <img src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" class="logo">
    </div>
    <div id="alibaba-login-iframe" class="iframe-loaded">
      <div id="alibaba-login-iframe-loading"></div>
      <iframe
        id="alibaba-login-box"
        src="https://ipassport.damai.cn/mini_login.htm?lang=zh_cn&amp;appName=damai&amp;appEntrance=damai&amp;styleType=vertical&amp;bizParams=&amp;notLoadSsoView=true&amp;notKeepLogin=false&amp;isMobile=true&amp;returnUrl=https%3A%2F%2Fm.damai.cn%2Fdamai%2Fminilogin%2Findex.html%3FreturnUrl%3Dhttps%253A%252F%252Fm.damai.cn%252Fdamai%252Fselect-seat%252Fhouniao%252Findex.html%253FitemId%253D595542197209%2526performId%253D210052474%2526skuId%253D4135766961110%2526privilegeActId%253D%2526channel%253Ddamai_app%2526spm%253Da2o71.project.bottom.dbuy&amp;plainReturnUrl=https%3A%2F%2Fm.damai.cn%2Fdamai%2Fminilogin%2Findex.html%3FreturnUrl%3Dhttps%253A%252F%252Fm.damai.cn%252Fdamai%252Fselect-seat%252Fhouniao%252Findex.html%253FitemId%253D595542197209%2526performId%253D210052474%2526skuId%253D4135766961110%2526privilegeActId%253D%2526channel%253Ddamai_app%2526spm%253Da2o71.project.bottom.dbuy&amp;regUrl=https%3A%2F%2Fipassport.damai.cn%2Fmember%2Freg%2Fenter_reg.htm%3F_regfrom%3DDAMAI%26tg%3Dhttps%253A%252F%252Fm.damai.cn%252Fdamai%252Fselect-seat%252Fhouniao%252Findex.html%253FitemId%253D595542197209%2526performId%253D210052474%2526skuId%253D4135766961110%2526privilegeActId%253D%2526channel%253Ddamai_app%2526spm%253Da2o71.project.bottom.dbuy&amp;rnd=0.30790057403401594"
        width="auto"
        height="236"
        frameborder="none"
        scrolling="no"
        style="border: none;"
        data-spm-anchor-id="a2o71.havanalogin.0.i0"
        data-spm-act-id="a2o71.havanalogin.0.i0.0"
      ></iframe>
    </div>
  </div>
</template>
<style lang="less" scoped>
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
</style>
