<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="tabsDidChange">
      <ion-tab-bar @slot="bottom" >
        <ion-tab-button tab="tab1" href="/home/dashboard">
          <div class="icon">
            <ion-img  v-show="options.tabIndex=='tab1'"
              :src="require('../../assets/ic_tab_home_blue.png')"
            ></ion-img>
             <ion-img  v-show="options.tabIndex!='tab1'"
              :src="require('../../assets/ic_tab_home_gray.png')"
            ></ion-img>
          </div>
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/home/machine">
          <div class="icon">
            <ion-img
               v-show="options.tabIndex!='tab2'"
              :src="require('../../assets/ic_tab_shebeigailan_gray.png')"
            ></ion-img>
             <ion-img
                v-show="options.tabIndex=='tab2'"
              :src="require('../../assets/ic_tab_shebeigailan_blue.png')"
            ></ion-img>
          </div>
          <ion-label>设备概况</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/home/user">
          <div class="icon">
            <ion-img
            v-show="options.tabIndex=='tab3'"
              :src="require('../../assets/ic_tab_mine_blue.png')"
            ></ion-img>
            <ion-img v-show="options.tabIndex!='tab3'"
              :src="require('../../assets/ic_tab_mine_gray.png')"
            ></ion-img>
          </div>
          <ion-label>我的</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonPage,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage },
  setup() {
    const options=reactive({
      tabIndex:null
    })
    const tabsDidChange = (data: any) => {
      console.log("tag");
      options.tabIndex=data.tab;
    };
    return {
      options,
      tabsDidChange,
    };
  },
});
</script>
<style lang="less" scoped>
.icon {
  width: 25px;
  height: 25px;
}
</style>