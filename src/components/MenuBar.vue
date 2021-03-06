<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="isSettingShow">
        <div class="setting-font-size" v-show="showTag == 0">
          <div class="preview" :style="{ fontSize: fontSizeList[0].fontSize + 'px' }">A</div>
          <div class="font-wrapper">
            <div class="font-size" ref="fontItem" v-for="(item, index) in fontSizeList" @click="setFontSize(item.fontSize)" :key="index">
              <div class="point" v-if="currentFontSize == item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
          </div>
          <div class="preview" :style="{ fontSize: fontSizeList[fontSizeList.length-1].fontSize + 'px'}">A</div>
        </div>
        <div class="setting-theme" v-show="showTag == 1">
          <div class="setting-theme-item" v-for="(item, index) in themesList" :key="index" @click="setTheme(index)">
            <div class="preview" :style="{ background: item.style.background }" :class="{'border': item.style.background === '#fff'}"></div>
            <div class="text" :class="{ 'selected': index === currentThemeId }">{{item.title}}</div>
          </div>
        </div>
        <div class="setting-progress" v-show="showTag == 2">
          <div class="progress-wrapper">
            <input class="progress" type="range"
                   max="100"
                   min="0"
                   step="0.1"
                   @change="onProgressChange"
                   @input="onProgressInput"
                   :value="progress"
                   :disabled="!isBookAvailable"
                   ref="progress">
          </div>
          <div class="text-wrapper">
            <span>{{ isBookAvailable ? progress + '%' : '加载中...'}}</span>
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="isTitleAndMenuShow" :class="{'hide-box-shadow': isSettingShow || !isTitleAndMenuShow}">
        <div class="icon-wrapper">
          <span class="icon-menu icon" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="showSetting(0)">A</span>
        </div>
      </div>
    </transition>
    <content-view v-if="isContentShow"
                  @navigateTo="navigateTo"
    ></content-view>
    <transition name="fade">
      <div class="content-mask"
           v-if="isContentShow"
           @click="hideContent"
      ></div>
    </transition>
  </div>
</template>
<script>
  import ContentView from '@/components/ContentView'
  import CONST from '@/config/CONST'
  export default {
    name: "MenuBar",
    components: {
      ContentView
    },
    data: function () {
      return {
        showTag: 0,
        progress: 0,
      }
    },
    methods: {
      showSetting: function (tag) {
        this.showTag = tag;
        if(this.showTag === 3){
          this.$store.commit('setSettingShow', false)
          this.$store.commit('setContentShow', true);
        }else {
          this.$store.commit('setSettingShow', true)
        }
        this.getProcess();
      },
      hideSetting: function () {
        this.$store.commit('setSettingShow', false)
      },
      setFontSize: function (fontSize) {
        this.$emit('setFontSize', fontSize);
      },
      setTheme: function (index) {
        this.$emit('setTheme', index);
      },
      onProgressChange: function (e) {
        this.$emit('onProgressChange', e.target.value);
      },
      onProgressInput: function (e) {
        this.progress = e.target.value;
      },
      hideContent: function () {
        this.$store.commit('setContentShow', false);
      },
      navigateTo: function (href) {
        this.$emit('navigateTo', href)
      },
      getProcess: function () {
        this.$emit('getProcess');
      }
    },
    computed: {
      fontSizeList(){
        return CONST.bookConfig.fontSizeList
      },
      themesList(){
        return CONST.bookConfig.themesList
      },
      currentFontSize(){
        return this.$store.state.currentFontSize
      },
      currentThemeId(){
        return this.$store.state.currentThemeId
      },
      isTitleAndMenuShow(){
        return this.$store.state.isTitleAndMenuShow
      },
      isContentShow(){
        return this.$store.state.isContentShow
      },
      isSettingShow(){
        return this.$store.state.isSettingShow
      },
      isBookAvailable(){
        return this.$store.state.isBookAvailable
      },
      currentThemeId(){
        return this.$store.state.currentThemeId
      }
    },
    watch: {
      progress: {
        handler: function (val) {
          this.$refs.progress.style.backgroundSize = `${val}% 100%`;
          localStorage.setItem("defaultProcess", val)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/styles/global";
  .menu-bar {
    .menu-wrapper {
      display: flex;
      position: absolute;
      z-index: 100;
      left: 0;
      bottom: 0;
      width: 100%;
      height: px2rem(96);
      box-shadow: 0 px2rem(-15) px2rem(15) rgba(0, 0, 0, .15);
      background: #fff;
      &.hide-box-shadow {
        box-shadow: none;
      }
      .icon-wrapper {
        flex: 1;
        @include center;
        .icon-progress {
          font-size: px2rem(52);
        }
        .icon-bright {
          font-size: px2rem(48);
        }
      }
    }
    .setting-wrapper {
      position: absolute;
      z-index: 100;
      left: 0;
      bottom: px2rem(96);
      width: 100%;
      height: px2rem(120);
      background: #fff;
      box-shadow: 0 px2rem(-15) px2rem(15) rgba(0, 0, 0, .15);
      .setting-font-size {
        display: flex;
        height: 100%;
        .preview {
          flex: 0 0 px2rem(120);
          @include center;
        }
        .font-wrapper {
          display: flex;
          flex: 1;
          .font-size {
            position: relative;
            flex: 1;
            &::before {
              content: '';
              position: absolute;
              z-index: 9;
              left: 50%;
              top: 50%;
              width: 1px;
              height: px2rem(16);
              margin-top: px2rem(-7);
              background: #ccc;
            }
            &::after {
              content: '';
              position: absolute;
              z-index: 9;
              left: 0;
              top: 50%;
              width: 100%;
              height: 1px;
              background: #ccc;
            }
            &:first-child,
            &:last-child{
              flex: 0.5;
            }
            &:first-child::before{
              left: 0;
            }
            &:last-child::before {
              left: 100%;
            }
            .point {
              position: absolute;
              z-index: 10;
              left: 50%;
              top: 50%;
              width: px2rem(40);
              height: px2rem(40);
              border-radius: 50%;
              margin-top: px2rem(-20);
              margin-left: px2rem(-20);
              border: 1px solid #ccc;
              box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
              box-sizing: border-box;
              background: #fff;
              @include center;
              .small-point {
                width: px2rem(8);
                height: px2rem(8);
                border-radius: 50%;
                background: #333;
              }
            }
            &:first-child {
              .point {
                left: 0;
              }
            }
            &:last-child {
              .point {
                left: 100%;
              }
            }
          }
        }
      }
      .setting-theme {
        display: flex;
        height: 100%;
        .setting-theme-item {
          flex: 1;
          padding: px2rem(20);
          box-sizing: border-box;
          .preview {
            height: px2rem(50);
            margin-bottom: px2rem(20);
            &.border {
              border: 1px solid #ccc;
            }
          }
          .text {
            font-size: px2rem(26);
            color: #ccc;
            text-align: center;
            &.selected {
              color: #333;
            }
          }
        }
      }
      .setting-progress {
        position: relative;
        width: 100%;
        height: 100%;
        .progress-wrapper {
          width: 100%;
          height: 100%;
          @include center;
          padding: 0 px2rem(60);
          box-sizing: border-box;
          .progress {
            width: 100%;
            -webkit-appearance: none;
            height: px2rem(4);
            background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
            background-size: 0 100%;
            &:focus {
              outline: none;
            }
            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: px2rem(40);
              height: px2rem(40);
              border-radius: 50%;
              box-shadow: 0 px2rem(8) px2rem(8) 0 rgba(0, 0, 0, .15);
              border: px2rem(1) solid #ddd;
              background: #fff;
            }
          }
        }
        .text-wrapper {
          position: absolute;
          left: 0;
          bottom: px2rem(10);
          width: 100%;
          color: #333;
          font-size: px2rem(24);
          text-align: center;
        }
      }
    }
    .content-mask {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 101;
      width: 100%;
      height: 100%;
      background: rgba(51, 51, 51, .8);
    }
  }

</style>
