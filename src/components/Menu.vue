<template lang="pug">
.Menu
  router-link(v-for="item in menuList" :to="item.url").Menu_block
    .Menu_list(:class="{select: select === item.title}") {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      select: null,
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
  // watch: {
  //   'select'() {
  //     if (this.select == '動力藝術區') {
  //       this.$router.push({query: {place: 1}})
  //     }
  //   }
  // },
  created() {
    // console.log(this.$route.params.page);
  },
  computed: {
    now_path() {
      return this.$route.path.replace('/');
    }
  },
  methods: {
    translate_path(path) {
      return path.replace('#');
    },
    // select_choice(item) {
    //   this.select = item.title;
    //   if (item.title === '動力藝術區' || item.title === '科學藝術區' || item.title === 'STEAM探索館' || item.title === '科普藝術獎') {
    //     this.$emit('menu_title', item.title)
    //   }
    // }
  }


}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.Menu
  width: max-content
  position: absolute
  bottom: 10px
  right: 60px
  +flexrow
  +com
    right: 30px
  @media all and (max-width: 1989px)
    display: none
  .Menu_block
    width: max-content
    .Menu_list
      text-align: center
      margin-left: 60px
      font-size: 20px
      letter-spacing: 2px
      color: #777
      +bb
      border-color: rgba(#777, 0)
      padding: 2px 5px
      
      &.select
        border-color: #777
      +com
        font-size: 15px
        margin-left: 30px





</style>