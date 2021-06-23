<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="header"><h3>科强协同平台</h3></ion-header>
      <!-- 轮播 -->
      <div class="banner">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide>
            <div class="h1">Slide 1</div>
          </ion-slide>
          <ion-slide>
            <div class="h1">Slide 2</div>
          </ion-slide>
          <ion-slide>
            <div class="h1">Slide 3</div>
          </ion-slide>
        </ion-slides>
      </div>
      <!-- 模块一 -->
      <div class="module_wrapper">
        <div class="title"><span>功能</span></div>
        <div class="content">
          <div class="icon_group">
            <div class="item">
              <div class="icon">
                <ion-img
                  :src="require('../../assets/ic_baogong.png')"
                ></ion-img>
              </div>
              <div>生产报工</div>
            </div>
            <div class="item">
              <div class="icon">
                <ion-img
                  :src="require('../../assets/ic_dianjian.png')"
                ></ion-img>
              </div>
              <div>设备点检</div>
            </div>
            <div class="item">
              <div class="icon">
                <ion-img :src="require('../../assets/ic_hujiao.png')"></ion-img>
              </div>
              <div>全场呼叫</div>
            </div>
            <div class="item">
              <div class="icon">
                <ion-img
                  :src="require('../../assets/ic_taizhang.png')"
                ></ion-img>
              </div>
              <div>设备台账</div>
            </div>
            <div class="item">
              <div class="icon">
                <ion-img :src="require('../../assets/ic_fanbao.png')"></ion-img>
              </div>
              <div>物料翻包</div>
            </div>
            <div class="item">
              <div class="icon">
                <ion-img :src="require('../../assets/ic_IQC.png')"></ion-img>
              </div>
              <div>IQC送检单</div>
            </div>
            <div class="item">
              <div class="icon">
                <ion-img :src="require('../../assets/ic_PQC.png')"></ion-img>
              </div>
              <div>PQC检验</div>
            </div>
            <div class="item">
              <div class="icon">
                <ion-img :src="require('../../assets/ic_more.png')"></ion-img>
              </div>
              <div>全部功能</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 模块二 -->
      <div class="module_wrapper">
        <div class="title"><span>新闻咨询</span></div>
        <div class="content">
          <div class="newsList">
            <div class="news_item" >
              <div class="news_title">2021五一劳动节放假通知</div>
              <div class="news_content">
                各位同仁：公司2021五一劳动节放假安排如下，请大家
                准备工作，迎接劳动节。放假日期为5.1~5.5，提前祝…
              </div>
              <div class="news_time">2021/4/21 9:01</div>
            </div>
            <div class="news_item" >
              <div class="news_title">2021五一劳动节放假通知</div>
              <div class="news_content">
                各位同仁：公司2021五一劳动节放假安排如下，请大家
                准备工作，迎接劳动节。放假日期为5.1~5.5，提前祝…
              </div>
              <div class="news_time">2021/4/21 9:01</div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonContent,
  IonSlides,
  IonSlide,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: { IonHeader, IonContent, IonPage, IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
    return { slideOpts };
  },
});
</script>
<style lang="less" scoped>
.header {
  padding: 17px 15px;
}
.banner {
  width: 345px;
  height: 154px;
  background: #ccc;
  box-shadow: 0 0 10px 2px rgba(217, 217, 217, 0.2);
  border-radius: 4px;
  margin: 0 auto;
  overflow: hidden;
  .h1 {
    width: 100%;
    height: 154px;
    background: #ddd;
  }
}
.module_wrapper {
  padding: 15px;
  .title {
    font-size: 16px;
    font-weight: bold;
     margin-bottom: 15px;
    span {
      display: inline-block;
      position: relative;
      &::before {
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, #2478ff 0%, #ffffff 100%);
        display: block;
        content: "";
        position: absolute;
        bottom: 1px;
        z-index: -1;
      }
    }
  }
  .icon_group {
    background: #fff;
    box-shadow: 0 0 10px 2px rgba(217, 217, 217, 0.2);
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0 10px 0;
   
    .item {
      width: 25%;
      text-align: center;
      font-size: 12px;
      color: #39434c;
      margin: 5px 0;
      .icon {
        width: 44px;
        margin: 0 auto;
      }
    }
  }
  .newsList {
      padding: 0 10px;
     box-shadow: 0 0 10px 2px rgba(217, 217, 217, 0.2);
     border-radius: 5px;
     overflow: hidden;
    .news_item {
      padding: 10px 0;
      border-bottom:  1px solid #F3F6FF;
      &:last-child{
        border-bottom: none;
      }
      .news_title {
        font-size: 14px;
        font-weight: bold;
      }
      .news_content {
        font-size: 14px;
        padding: 5px 0;
      }
      .news_time {
        font-size: 12px;
        color: #cccccc;
      }
    }
  }
}
</style>