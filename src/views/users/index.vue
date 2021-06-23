<template>
  <ion-page>
    <ion-content
      :fullscreen="true"
      style="--background: linear-gradient(270deg, #1f74ff 0%, #40a0ff 100%)"
    >
    <div class="setting"> <i class="iconfont icon-shezhi"></i></div>
      <div class="panel">
        <div class="userInfo">
          <div class="userName">
            <div>
              <ion-avatar style="width: 80px; height: 80px">
                <img
                  src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1950846641,3729028697&fm=26&gp=0.jpg"
                />
              </ion-avatar>
            </div>
            <div class="name">尼古拉斯·尔康</div>
          </div>
          <ion-list>
            <ion-item lines="none" style="--padding-bottom:10px">
              <div @slot="start">
                  <div class="start_icon"><ion-img :src="require('../../assets/ic_gerenxinxi.png')"></ion-img></div>
              </div>
              <ion-label>个人信息</ion-label>
              <div @slot="end">
                <i class="iconfont icon-jiantou-left-copy arrow"></i>
              </div>
            </ion-item>
            <ion-item lines="none" style="--padding-bottom:10px">
               <div @slot="start">
                  <div class="start_icon"><ion-img :src="require('../../assets/ic_fuwushang.png')"></ion-img></div>
              </div>
              <ion-label>服务商信息</ion-label>
              <div @slot="end">
                <i class="iconfont icon-jiantou-left-copy arrow"></i>
              </div>
            </ion-item>
            <ion-item lines="none" style="--padding-bottom:10px">
               <div @slot="start">
                  <div class="start_icon"><ion-img :src="require('../../assets/ic_yijianfankui.png')"></ion-img></div>
              </div>
              <ion-label>应用反馈</ion-label>
              <div @slot="end">
                <i class="iconfont icon-jiantou-left-copy arrow"></i>
              </div>
            </ion-item>
            <ion-item lines="none" style="--padding-bottom:10px">
               <div @slot="start">
                  <div class="start_icon"><ion-img :src="require('../../assets/ic_changjianwenti.png')"></ion-img></div>
              </div>
              <ion-label>常见问题</ion-label>
              <div @slot="end">
                <i class="iconfont icon-jiantou-left-copy arrow"></i>
              </div>
            </ion-item>
          </ion-list>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
} from "@ionic/vue";
export default {
  name: "Tab1",
  components: {
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.setting{
  position: absolute;
  right: 20px;
  top: 20px;
  i{
    font-size: 22px;
    color: #fff;
  }
}
.panel {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .userInfo {
    height: 80%;
    padding: 0 10px;
    background: #fff;
    border-radius: 20px 20px 0 0;
    // overflow: hidden;
    .userName {
      padding-left: 30px;
      margin-top: -45px;
      margin-bottom: 45px;
      display: flex;
      align-items: flex-end;
      .name {
        margin-left: 15px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
}
.arrow {
  color: #cdcdcd;
}
.start_icon{
  width: 22px;
  margin-right: 10px;
}
</style>