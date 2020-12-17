<template lang="pug">
.ani
  video#videoReverse(autoplay playsinline loop muted)
    source(src="../assets/animation/visual.mp4" type="video/mp4")
  //- video#videoStart(autoplay muted :class="{display_none: reverse === true}" playsinline)
  //-   source(src="../assets/animation/visual_start.mp4" type="video/mp4")
  //- .phone_animate
  //- video#videotest(autoplay muted)
  //-   source(src="../assets/animation/smear_visual.webm" type="video/webm")
  //- .stem_mobile
  //- .text_mobile
  //- .stem
  .textBlock
    .text
  //- canvas#blue_paper
  .img_block(style="display: none")
    img(src="../assets/a.png")#a_pic
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      mouseX: null,
      mouseY: null,
      v: null,
      reverse: false,
      vlisten_s: null,
      vlisten_r: null,
      v_start: null,
      v_reverse: null,
    }
  },
  watch: {
    // 'reverse'() {
    //   this.v_start = document.getElementById('videoStart')
    //   this.v_reverse = document.getElementById('videoReverse')
    //   if (this.reverse === false) {
    //     this.v_start.addEventListener('ended', () => {
    //       this.reverse = true;
    //       this.v_reverse.play()
    //     }, true);
    //   } else if (this.reverse === true) {
    //     this.v_reverse.addEventListener('ended', () => {
    //       this.reverse = false;
    //       this.v_start.play()
    //     }, true)
    //   }
    // }
  },
  mounted() {
    // this.v_start = document.getElementById('videoStart')
    // this.v_start.addEventListener('ended', () => {
    //   this.reverse = true;
    // }, true);
  },
  methods: {
    
    move(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    createCanvas() {
      this.canvas = document.getElementById("blue_paper");
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw()
      window.requestAnimationFrame(this.createCanvas)
    },
    draw() {
      this.a()
    },
    a() {
      this.ctx.drawImage(document.getElementById('a_pic'), 0, 0 + Math.sin((this.mouseX + this.mouseY)/100)*50, this.canvas.width, this.canvas.height)
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.ani
  canvas
    position: absolute
    width: 700px
    height: 700px
    margin-top: 9vw
    // margin-left: 5vw
    left: 5vw
    // +bb
    @media all and (max-width: 1022px)
      display: none
  iframe
    width: 500px
    height: 600px
  video
    position: relative
    // z-index: 2
    width: 100%
    object-fit: cover
    // mix-blend-mode: screen
    height: 1200px
    box-shadow: 2px 2px 10px rgba(#111, 0.2)

    @media all and (min-width: 2210px)
      width: 2110px
      border-radius: 10px
      margin-top: 150px

    @media all and (max-width: 1836px)
      object-position: 20% center
    @media all and (max-width: 1405px)
      object-position: 10% center
    @media all and (max-width: 970px)
      width: 100% !important
      object-position: 10% center !important
      object-fit: cover
      height: 120vw
      margin-top: 100px
      // height: initial


    

    

</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.ani
  width: 100%
  position: relative
  // min-height: 100vh
  height: 1200px
  // background: url('../assets/bg.svg')
  +flexcolumn
  align-items: center
  // box-shadow: 1px 1px 10px rgba(#333, 0.2)
  // z-index: 1
  +bgcover
  @media all and (max-width: 926px)
    height: 130vw
  +phone
    height: 135vw
  .stem_mobile
    width: 80%
    height: 1600px
    background: url('../assets/stem_mobile.png')
    +bgcon
    margin-top: 120px
    display: none
    @media all and (max-width: 1022px)
      display: block
    // +bb
    +phone
      height: 120vw
  .stem
    position: absolute
    width: 700px
    height: 700px
    // +bb
    // margin-top: 20vw
    background: url('../assets/stem.png')
    +bgcon
    top: 8vw
    left: 5vw
    @media all and (max-width: 1022px)
      display: none
  .textBlock
    position: absolute
    width: 100%
    @media all and (min-width: 2210px)
      width: 2210px
      top: 150px
    @media all and (max-width: 970px)
      top: 0
    .text
      position: absolute
      right: 200px
      top: 150px
      width: 400px
      height: 800px
      // max-height: 95vh
      background: url('../assets/text.png')
      z-index: 5
      +bgcon
      @media all and (min-width: 2210px)
        right: 10%
        width: 400px
        height: 800px
      +com
        right: 100px
     
      @media all and (max-width: 970px)
        width: 280px
        right: 50px
        top: 120px
        height: 120vw
      @media all and (max-width: 568px)
        height: 85vw
        top: 160px
        right: 0vw
      
      @media all and (max-width: 354px)
        width: 200px
        top: 150px
        height: 80vw
        right: 10px
      // @media all and (max-width: 309px)
      //   width: 50vw
      //   height: 90vw
      //   top: 60vw
      
      
#videoReverse, #videoStart
  +phone
    // display: none
.phone_animate
  background: url('../assets/animation/visual_1.gif')
  width: 100%
  +bgcover
  height: 120vw
  margin-top: 100px
  background-position: 10% center
  display: none
  +phone
    // display: block
.display_none
  display: none
.fade
  display: none
@keyframes ani_fade
  0%, 100%
    opacity: 1
  50%
    opacity: 0

</style>