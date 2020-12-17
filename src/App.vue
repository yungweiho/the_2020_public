<template lang="pug">
#app
  .Header
    .logo(@click="BackTop()")
    el-backtop
    Menu
    .menu_icon(@click="menu_on = !menu_on")
      .menu_line.pos1(:class="{clicked: menu_on === true}")
      .menu_line.pos2(:class="{clicked: menu_on === true}")
    transition(name="menu_slide")
      small_menu(v-if="menu_on === true" @menu_off="menu_on = false")
  router-view
</template>

<script>
import Menu from '@/components/Menu';
import small_menu from '@/components/small_menu';
export default {
  components: {
    Menu,
    small_menu
  },
  data() {
    return {
      menu_on: false,
      now_place: null,
    }
  },
  created() {
    if (this.$route.path === '/' || this.$route.path === '/introduction') {
      this.$router.push('/home');
    }
    // if (this.$route.params.page) {
    //     // console.log(this.$route.fullPath);
    //     // location.href = '#' + this.$route.params.page
    //     var page = document.getElementById(String(this.$route.params.page))
    //     page.scrollIntoView()
    //   }
  },
  methods: {
    // menu_title(title) {
    //   if (title === '動力藝術區') {
    //     this.now_place = 1;
    //   } else if (title === '科學藝術區') {
    //     this.now_place = 2;
    //   } else if (title === 'STEAM探索館') {
    //     this.now_place = 3;
    //   } else if (title === '科普藝術獎') {
    //     this.now_place = 4;
    //   } else {
    //     this.now_place = null;
    //   }
    // },
    BackTop() {
      this.$router.push('/home')
      // window.document.body.scrollTop = 0;
      // window.document.documentElement.scrollTop = 0
    }
  }
  
}
</script>

<style lang="sass">
@import '@/assets/mixin.sass'
body, html
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  margin: 0
  padding: 0
  overflow-x: hidden
  background-color: #E9E9E9
  scroll-behavior: smooth

#app
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  margin: 0
  padding: 0 0 100px 0
  position: relative
  .Header
    width: 100%
    height: 100px
    position: fixed
    // +bb
    background-color: #fff
    z-index: 99
    box-shadow: 0px 1px 8px 1px rgba(#333, 0.2)
    .logo
      background: url('./assets/logo.png')
      background-size: contain
      background-repeat: no-repeat
      background-position: center
      width: 400px
      margin-top: 10px
      height: 80px
      margin-left: 60px
      cursor: pointer
      +com
        width: 300px
        margin-left: 30px
      +pad
        background: url('./assets/logo_phone.png')
        background-size: contain
        background-repeat: no-repeat
        background-position: center
      +phone
        width: 250px
        margin-left: 20px
      +phone5
        width: 200px
    .menu_icon
      position: absolute
      width: 35px
      height: 35px
      right: 30px
      top: 40px
      cursor: pointer
      z-index: 10
      display: none
      @media all and (max-width: 1989px)
        display: block
      .menu_line
        width: 35px
        height: 5px
        background-color: #333
      .pos1
        position: absolute
        right: 0
        top: 0
        transform-origin: 7px
        transition: 0.2s
        &.clicked
          transform-origin: 7px
          transform: rotate(45deg)
          transition: 0.2s
          background-color: white
      .pos2
        position: absolute
        right: 0
        top: 16px
        transform-origin: 7px
        transition: 0.2s
        &.clicked
          transform-origin: 7px
          transform: rotate(-45deg)
          transition: 0.2s
          background-color: white

.menu_slide-enter
  opacity: 0
  transform: translateX(100%)
.menu_slide-enter-active
  transition: all 0.5s

.el-backtop, .el-calendar-table td.is-today
  color: #333 !important
</style>
