<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="content">
        <div class="wellcome">
          <h3>您好,</h3>
          <p>欢迎来到科强协作平台</p>
        </div>
        <div class="form">
          <div class="input">
            <div class="icon"> <i class="iconfont icon-shouji"></i></div>
            <ion-input clear-input placeholder="请输入手机号" style="--placeholder-opacity:0.3"></ion-input>
          </div>
          <div class="input">
            <div class="icon"> <i class="iconfont icon-icon-mima"></i></div>
            <ion-input type="password" clear-input  placeholder="请输入密码" style="--placeholder-opacity:0.3"></ion-input>
          </div>
          <div class="refordPwd">忘记密码？</div>
          <div class="loginBtn">
            <ion-button expand="block">登 录</ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  <ion-footer class="ion-no-border">
      <div class="bottom">登录即代表同意<a>《用户政策》</a>和<a>《隐私协议》</a></div>
  </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent
} from "@ionic/vue";
export default {
  name: "Tab1",
  components: { IonContent, IonPage },
//   data(){
//       return {
//           heart
//       }
//   },
  setup() {
    return {
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 0 24px;
}
.wellcome {
  position: relative;
  padding-top: 83px;
  p{
      color: #39434C;
      opacity: 0.5;
  }
}
.form {
    margin-top: 50px;
  .input {
    display: flex;
    align-items: center;
    height: 48px;
    background: #ffffff;
    border: 0 solid #f3f6ff;
    box-shadow: 0 0 10px 2px rgba(217, 217, 217, 0.2);
    border-radius: 6px;
    margin-bottom: 16px;
    padding-right: 5px;
    .icon {
      opacity: 0.2;
      width: 40px;
      border-right: 1px solid #666666;
      text-align: center;
      margin-right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .refordPwd {
    font-size: 14px;
    color: #39434c;
    opacity: 0.5;
    text-align: right;
  }
  .loginBtn {
    margin-top: 50px;
  }
}
.bottom{
    text-align: center;
    font-size: 12px;
    padding-bottom: 20px;
}
</style>