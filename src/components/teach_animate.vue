<template lang="pug">
.ta
  canvas#teach_canvas(@mouseenter="have_mouse = true" @mouseleave="have_mouse = false" @click="color_id == 3? color_id = 0 : color_id ++")
  .pre_load_img
    img(src="../assets/teach/s_yellow.png")#s_yellow
    img(src="../assets/teach/t_yellow.png")#t_yellow
    img(src="../assets/teach/e_yellow.png")#e_yellow
    img(src="../assets/teach/a_yellow.png")#a_yellow
    img(src="../assets/teach/m_yellow.png")#m_yellow
    img(src="../assets/teach/s_pink.png")#s_pink
    img(src="../assets/teach/t_pink.png")#t_pink
    img(src="../assets/teach/e_pink.png")#e_pink
    img(src="../assets/teach/a_pink.png")#a_pink
    img(src="../assets/teach/m_pink.png")#m_pink
    img(src="../assets/teach/s_green.png")#s_green
    img(src="../assets/teach/t_green.png")#t_green
    img(src="../assets/teach/e_green.png")#e_green
    img(src="../assets/teach/a_green.png")#a_green
    img(src="../assets/teach/m_green.png")#m_green
    img(src="../assets/teach/s_blue.png")#s_blue
    img(src="../assets/teach/t_blue.png")#t_blue
    img(src="../assets/teach/e_blue.png")#e_blue
    img(src="../assets/teach/a_blue.png")#a_blue
    img(src="../assets/teach/m_blue.png")#m_blue
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      mouseX: null,
      mouseY: null,
      have_mouse: false,
      s_img_list: [
        's_yellow', 's_pink', 's_green', 's_blue'
      ],
      t_img_list: [
        't_yellow', 't_pink', 't_green', 't_blue'
      ],
      e_img_list: [
        'e_yellow', 'e_pink', 'e_green', 'e_blue'
      ],
      a_img_list: [
        'a_yellow', 'a_pink', 'a_green', 'a_blue'
      ],
      m_img_list: [
        'm_yellow', 'm_pink', 'm_green', 'm_blue'
      ],
      bg_list: [
        '#72F8A9', '#63EBFF', '#FF9EF4', '#FF9966'
      ],
      color_id: 0
    }
  },
  mounted() {
    // window.addEventListener('mouseenter', this.mouseIn);
    window.addEventListener('mousemove', this.move);
    // window.addEventListener('mouseleave', this.mouseOut);
    this.createCanvas();
  },
  methods: {
    move(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      // console.log(this.mouseX);
    },
    mouseIn() {
      this.have_mouse = true
      console.log(this.have_mouse);
    },
    mouseOut() {
      this.have_mouse = false
      console.log(this.have_mouse);

    },  
    createCanvas() {
      this.canvas = document.getElementById("teach_canvas");
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = 1000;
      this.canvas.height = 300;
      this.ctx.clearRect(0, 0, 800, 300)
      this.draw();
      window.requestAnimationFrame(this.createCanvas)
    },
    draw() {
      this.ctx.fillStyle = this.bg_list[this.color_id]
      this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
      this.ctx.fill();
      
      var sX = 100;
      var sY = 85;
      var tX = 260;
      var tY = 85;
      var eX = 430;
      var eY = 85;
      var aX = 600;
      var aY = 85;
      var mX = 770;
      var mY = 85;
      this.img_s(sX, sY);
      this.img_t(tX, tY);
      this.img_e(eX, eY);
      this.img_a(aX, aY);
      this.img_m(mX, mY);
      // if (this.mouseX == sX + 400) {
      //   sX = 0
      //   console.log('object', sX);
      // }
    },
    img_s(posX, posY) {
      if (this.have_mouse === true) {
        posX += Math.random(-50,50)*10
        posY += Math.random(-50,50)*10
        this.ctx.drawImage(document.getElementById(this.s_img_list[this.color_id]), posX, posY, 120, 120)
      } else {
        this.ctx.drawImage(document.getElementById(this.s_img_list[this.color_id]), posX, posY, 120, 120)
      }
    },
    img_t(posX, posY) {
      if (this.have_mouse === true) {
        posX += Math.random(-50,50)*10
        posY += Math.random(-50,50)*10
        this.ctx.drawImage(document.getElementById(this.t_img_list[this.color_id]), posX, posY, 120, 120)
      } else {
        this.ctx.drawImage(document.getElementById(this.t_img_list[this.color_id]), posX, posY, 120, 120)
      }
    },
    img_e(posX, posY) {
      if (this.have_mouse === true) {
        posX += Math.random(-50,50)*10
        posY += Math.random(-50,50)*10
        this.ctx.drawImage(document.getElementById(this.e_img_list[this.color_id]), posX, posY, 120, 120)
      } else {
        this.ctx.drawImage(document.getElementById(this.e_img_list[this.color_id]), posX, posY, 120, 120)
      }
    },
    img_a(posX, posY) {
      if (this.have_mouse === true) {
        posX += Math.random(-50,50)*10
        posY += Math.random(-50,50)*10
        this.ctx.drawImage(document.getElementById(this.a_img_list[this.color_id]), posX, posY, 120, 120)
      } else {
        this.ctx.drawImage(document.getElementById(this.a_img_list[this.color_id]), posX, posY, 120, 120)
      }
    },
    img_m(posX, posY) {
      if (this.have_mouse === true) {
        posX += Math.random(-50,50)*10
        posY += Math.random(-50,50)*10
        this.ctx.drawImage(document.getElementById(this.m_img_list[this.color_id]), posX, posY, 120, 120)
      } else {
        this.ctx.drawImage(document.getElementById(this.m_img_list[this.color_id]), posX, posY, 120, 120)
      }
    },
    
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.ta
  canvas
    width: 100%
    // height: 100%
    cursor: pointer
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.ta
  width: 50%
  height: 300px
  // +bb
  +com
    width: 90%
.pre_load_img
  display: none

</style>