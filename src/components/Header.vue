<template>
  <div>
    <div class="b-marquee">
  <div class="b-marquee__text running">I'm just testing a running line</div>
  </div>
  <div class="b-marquee b-marquee--rtl">
    <div class="b-marquee__text">Working in progress</div>
  </div>
  </div>
</template>

<script>

export default ({
  data() {
    
  },
})
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.runningLine {
  
}

.b-marquee {
  font-family: 'Segoe UI', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(0, 0, 0);
  padding: 10px;
  position: relative;
  margin-bottom: 10px;
}

.b-marquee__text {
  -webkit-animation: animMarquee 15s linear infinite;
  animation: animMarquee 15s linear infinite;
}

@-webkit-keyframes animMarquee {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@keyframes animMarquee {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}


/* text right to left*/

.b-marquee--rtl {}

.b-marquee--rtl .b-marquee__text {
  -webkit-animation: animMarqueeRtl 10s linear infinite;
  animation: animMarqueeRtl 10s linear infinite;
}

@-webkit-keyframes animMarqueeRtl {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@keyframes animMarqueeRtl {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>