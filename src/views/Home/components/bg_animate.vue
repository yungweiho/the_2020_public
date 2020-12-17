<template lang="pug">
.bga
  canvas#bgCanvas
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      slideHeight: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll);
    this.createCanvas();

  },
  methods: {
    scroll() {
      this.slideHeight = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    },
    createCanvas() {
      this.canvas = document.getElementById("bgCanvas");
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.draw()
      window.requestAnimationFrame(this.createCanvas)
    },
    draw() {
      var tran_X = -1500
      // var tran_Y = -1000
      // this.ctx.fillRect(100, 100, 100, 100)
      this.green_circle(1100, 200);
      // this.green_circle(1100, 400);
      // this.green_circle(800, 550);
      this.green_circle(1600, 900);
      this.green_circle(620, 600);
      this.green_circle(50, 800);
      this.yellow_circle(900, 450);
      this.yellow_circle(1200, 600);
      // this.orange_line(1000, 150);
      this.orange_line(850, 800);
      this.orange_line(1500, 800);
      this.orange_line(460, 550);
      this.orange_line(-100, 550);
      this.orange_line(1800, 300);
      // this.blue_line(950, 130);
      this.blue_line(1050, 300);
      this.blue_line(1400, 750);
      this.blue_line(550, 650);

      // 前
      this.green_circle(1100 + tran_X, 200);
      this.green_circle(1100 + tran_X, 400);
      this.green_circle(800 + tran_X, 550);
      // this.green_circle(1600 + tran_X, 900);
      this.green_circle(620 + tran_X, 600);
      this.green_circle(50 + tran_X, 800);
      this.yellow_circle(900 + tran_X, 450);
      this.yellow_circle(1200 + tran_X, 600);
      this.orange_line(1000 + tran_X, 150);
      this.orange_line(850 + tran_X, 800);
      // this.orange_line(1500 + tran_X, 800);
      this.orange_line(460 + tran_X, 550);
      this.orange_line(-100 + tran_X, 550);
      this.orange_line(1800 + tran_X, 300);
      this.blue_line(950 + tran_X, 130);
      this.blue_line(1050 + tran_X, 300);
      this.blue_line(1400 + tran_X, 750);
      this.blue_line(550 + tran_X, 650);

      tran_X = 2000
      // 後
      this.green_circle(1100 + tran_X, 200);
      this.green_circle(1100 + tran_X, 400);
      this.green_circle(800 + tran_X, 550);
      this.green_circle(1600 + tran_X, 900);
      this.green_circle(620 + tran_X, 600);
      this.green_circle(50 + tran_X, 800);
      this.yellow_circle(900 + tran_X, 450);
      this.yellow_circle(1200 + tran_X, 600);
      this.orange_line(1000 + tran_X, 150);
      this.orange_line(850 + tran_X, 800);
      this.orange_line(1500 + tran_X, 800);
      this.orange_line(460 + tran_X, 550);
      this.orange_line(-100 + tran_X, 550);
      this.orange_line(1800 + tran_X, 300);
      this.blue_line(950 + tran_X, 130);
      this.blue_line(1050 + tran_X, 300);
      this.blue_line(1400 + tran_X, 750);
      this.blue_line(550 + tran_X, 650);
      // 藍色增加
      tran_X = -1000
      // this.blue_line(950 + tran_X, 130);
      // this.blue_line(1050 + tran_X, 300);
      // this.blue_line(1400 + tran_X, 750);
      // this.blue_line(550 + tran_X, 650);
      tran_X = -2000
      // this.blue_line(950 + tran_X, 130);
      // this.blue_line(1050 + tran_X, 300);
      // this.blue_line(1400 + tran_X, 750);
      // this.blue_line(550 + tran_X, 650);
      tran_X = -3000
      this.blue_line(950 + tran_X, 130);
      this.blue_line(1050 + tran_X, 300);
      this.blue_line(1400 + tran_X, 750);
      this.blue_line(550 + tran_X, 650);
      tran_X = -4000
      // this.blue_line(950 + tran_X, 130);
      // this.blue_line(1050 + tran_X, 300);
      // this.blue_line(1400 + tran_X, 750);
      // this.blue_line(550 + tran_X, 650);
      tran_X = -5000

      this.blue_line(950 + tran_X, 130);
      this.blue_line(1050 + tran_X, 300);
      this.blue_line(1400 + tran_X, 750);
      this.blue_line(550 + tran_X, 650);
      tran_X = -6000
      // this.blue_line(950 + tran_X, 130);
      // this.blue_line(1050 + tran_X, 300);
      // this.blue_line(1400 + tran_X, 750);
      // this.blue_line(550 + tran_X, 650);
      tran_X = -7000
      this.blue_line(950 + tran_X, 130);
      this.blue_line(1050 + tran_X, 300);
      this.blue_line(1400 + tran_X, 750);
      this.blue_line(550 + tran_X, 650);





    },
    green_circle(posX, posY) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#00FF00';
      this.ctx.arc(posX + this.slideHeight/10, posY, 10, 0, Math.PI*2);
      this.ctx.fill();
      this.ctx.closePath();

    },
    yellow_circle(posX, posY) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#ffff00';
      this.ctx.arc(posX + this.slideHeight/5, posY, 5, 0, Math.PI*2);
      this.ctx.fill();
      this.ctx.closePath();
    },
    orange_line(posX, posY) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = '#FF7733';
      this.ctx.lineWidth = 8;
      this.ctx.lineCap = 'round';
      this.ctx.moveTo(posX + 200 + this.slideHeight/2, posY);
      this.ctx.lineTo(posX + 230 + this.slideHeight/2, posY);
      this.ctx.stroke();
      this.ctx.closePath();
    },
    blue_line(posX, posY) {
      this.ctx.save()
      this.ctx.translate(posX + this.slideHeight, posY)
      this.ctx.beginPath();
      this.ctx.strokeStyle = '#00FFFF';
      this.ctx.lineWidth = 1;
      this.ctx.lineCap = 'round';
      var yvalues = new Array(Math.floor(15/0.1));
      var x = this.slideHeight/10;
      for(var i = 0; i < yvalues.length; i++) {
        yvalues[i] = Math.sin(x) * 8;
        x += 0.1
      }
      this.ctx.moveTo(0, yvalues[0])
      // console.log(yvalues);
      for(var j = 0; j < yvalues.length; j++) {
        this.ctx.lineTo(j, yvalues[j])
      }
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.restore()

    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
#bgCanvas
  position: fixed
  z-index: 1
  // +bb
  left: 0

.bga
  // z-index: 2

</style>