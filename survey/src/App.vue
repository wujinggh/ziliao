<template>
  <div id="app" :style="{ height: docmHeight }">
    <transition :name="transitionName"> 
　　　  <router-view></router-view>
　　</transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-left",
      docmHeight: document.documentElement.clientHeight +'px' // 默认屏幕高度
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style lang="less">
html {
  height: 100%;
  background: #fff;
}
body {
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}
#app {
  margin: 0 auto;
  height: 100%;
  background: #fff;
  width: 7.5rem;
  font-size: 0.3rem;
  color: #222;
  position: relative;
  overflow: hidden;
  .clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .g-hidden {
    display: none;
  }
  select,input{
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
  }
  select{ 
    background: url(./images/arrow.png) no-repeat scroll right center transparent;
    background-position: right 10px  center;
    background-size: 0.29rem 0.17rem;
  }
}
</style>
