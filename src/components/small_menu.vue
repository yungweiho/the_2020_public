<template lang="pug">
.small_menu
  .small_menu_block
    router-link(v-for="item in menuList" :to="item.url")
      .small_menu_item(@click="$emit('menu_off')") {{ item.title }}

</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '策展理念',
          url: '/introduction',
        },
        {
          title: '動力藝術區',
          url: '/exhibition?place_number=1&work_number=1',
        },
        {
          title: '科學藝術區',
          url: '/exhibition?place_number=2&work_number=1',
        },
        {
          title: 'STEAM探索館',
          url: '/exhibition?place_number=3&work_number=1',
        },
        {
          title: '科普藝術獎',
          url: '/exhibition?place_number=4&work_number=1',
        },
        {
          title: '展場地圖',
          url: '/map',
        },
        {
          title: '策展團隊',
          url: '/team',
        },
        {
          title: '聯絡資訊',
          url: '/contact',
        },
        {
          title: '活動報名',
          url: '/apply',
        },
      ]
    }
  },
  methods: {
    select_choice(item) {
      this.select = item.title;
      if (item.title === '動力藝術區' || item.title === '科學藝術區' || item.title === 'STEAM探索館' || item.title === '科普藝術獎') {
        // this.$emit('menu_title', item.title)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.small_menu
  position: absolute
  right: 0
  top: 0
  width: 400px
  min-height: 100vh
  background-color: rgba(#333, 0.7)
  display: none
  @media all and (max-width: 1989px)
    display: block
  +phone
    width: 90%
  .small_menu_block
    width: 100%
    margin-top: 50px
    .small_menu_item
      width: 80%
      text-align: center
      color: white
      font-size: 20px
      letter-spacing: 2px
      margin-top: 20px


</style>