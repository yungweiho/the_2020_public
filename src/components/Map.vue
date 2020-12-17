<template lang="pug">
.Map
  .Map_text(v-if="$route.query.place === undefined && $route.query.work === undefined")
    .map_title 展場地圖
  transition(name="map_in" mode="out-in")
    .Map_pic(v-if="$route.query.place === undefined")
      .building_name_library(:class="{mouse_in: building_name === 'library'}")  ◆ 旺宏館「互動科學藝術區」
      .building_name_pigeon(:class="{mouse_in: building_name === 'pigeon'}")  ◆ 鴿子廣場「戶外動力藝術區」
      .building_name_education(:class="{mouse_in: building_name === 'education'}")  ◆ 教育館「STEAM互動探索館」
      library_3D(@click.native="into_place(2)" @mouse="show_building_name")
      education_3D(@click.native="into_place(3)" @mouse="show_building_name")
      pigeon_3D(@click.native="into_place(1)" @mouse="show_building_name")
      //- 教育館
      .light_orange
      //- 圖書館
      .light_green
      //- 鴿子廣場
      .light_yellow
  transition(name="place_in" mode="out-in" )
    .place_block(v-if="$route.query.place")
      .place(v-if="$route.query.place === item.place" v-for="(item, i) in work_list") {{ item.place }}
        .work(v-if="$route.query.place === item.place" v-for="(w, j) in item.work" @click="into_work(j, Math.ceil(i+1))") {{ w.title }}
      .back(@click="back_to_map()") 回到地圖
      library(v-if="$route.query.place === '互動科學藝術展區-圖書館'").lib
      pigeon(v-if="$route.query.place === '動力科學藝術展區–綜合二館＆鴿子廣場'").pig
      education(v-if="$route.query.place === 'STEAM 互動探索館展區-教育館1樓'").edu




</template>

<script>
import library from '@/assets/library';
import library_3D from '@/assets/library_3D';
import pigeon from '@/assets/pigeon';
import pigeon_3D from '@/assets/pigeon_3D';
import education from '@/assets/education';
import education_3D from '@/assets/education_3D';
export default {
  components: {
    library,
    library_3D,
    pigeon,
    pigeon_3D,
    education,
    education_3D
  },
  data() {
    return {
      building_name: null,
      work_list: [
        {
          place: '動力科學藝術展區–綜合二館＆鴿子廣場',
          work: [
            {
              title: '一面到底的莫比斯環 / Möbius Strip'
            },
            {
              title: '水漩渦旋轉舞 / Dancing Water Vortex'
            },
            {
              title: '直紋曲面幾何之美 / Flower Illumination Forest'
            },
            {
              title: '遛溜水車某 / The Writing Lady'
            },
          ]
        },
        {
          place: '互動科學藝術展區-圖書館',
          work: [
            {
              title: '伏流 / The Shape of Floating'
            },
            {
              title: 'Line'
            },
            {
              title: 'Z Machine'
            },
            {
              title: '幻境 / Wonderland'
            },
            {
              title: '磁墨 / Magnetic Chinese Painting'
            },
            {
              title: '漂浮燈泡 / Floating Lights'
            },
            {
              title: '平衡下的外力-磁 / Forces in Equilibrium- Magnetic'
            },
            {
              title: '花繡 / Hua-Shiou'
            },
            {
              title: '來自XXX / Gifts from XXX'
            },
            {
              title: '語林 / Talking Forest'
            },
          ]
        },
        {
          place: 'STEAM 互動探索館展區-教育館1樓',
          work: [
            {
              title: '看到Ａ了嗎？'
            },
            {
              title: '潤滑魔力拍'
            },
            {
              title: '瓶兒響叮噹'
            },
            {
              title: '可看見的聲音'
            },
            {
              title: '大環小圈懸浮轉'
            },
            {
              title: '磁陀螺跳探戈'
            },
            {
              title: '以小博大'
            },
            {
              title: '懸浮方塊'
            },
            {
              title: '一體兩面'
            },
            {
              title: '費納奇鏡動畫'
            },
            {
              title: '看見了誰？'
            },
            {
              title: '音樂碰碰椅'
            },
            {
              title: 'Arduino小人國世界'
            },
            {
              title: '智慧成語方塊'
            },
            {
              title: '彈珠的遊樂園'
            },
            {
              title: '協力滾球台'
            },
            {
              title: '不可思議的上下制衡'
            },
            {
              title: '距離感應錯視覺'
            },
            {
              title: '橢圓兩點也瘋狂'
            },
            {
              title: '畢氏的組合'
            },
            {
              title: '瑪麗蓮夢露的裙子'
            },
            {
              title: '神妙的黃金角'
            },
            {
              title: '莫比斯環拓撲變'
            },
            {
              title: '你的美朋友'
            },
          ]
        },
      ]
    }
  },
  methods: {
    into_place(place) {
      location.href = '#exhibition'
      this.$router.push({query: {place_number: place}});
    },
    back_to_map() {
      this.$router.push('/map')
      location.href = '#map'
    },
    into_work(work_number, place_number) {
      location.href = '#exhibition'
      this.$router.push({query: {work_number: work_number, place_number: place_number}});
    },
    // hover building name
    show_building_name(building) {
      if (building === 'library') {
        this.building_name = 'library';
      } else if (building === 'pigeon') {
        this.building_name = 'pigeon';
      } else if (building === 'education') {
        this.building_name = 'education';
      } else {
        this.building_name = null;
      }
    }
  }

}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.Map
  width: 100%
  position: relative
  overflow-y: hidden
  // background-color: white
  +flexcolumn
  padding: 200px 0 0 0
  z-index: 3
  .Map_text
    width: 30%
    // +bb
    margin-left: 25%
    +com
      margin-left: 5%
    .map_title
      position: relative
      width: max-content
      // padding: 0 5px
      font-size: 35px
      // margin-left: 50%
      margin-top: 10%
      font-weight: bold
      // color: #777
      letter-spacing: 2px
      // border: solid 1px #777
      position: relative
      display: inline-block
      font-size: 30px
      letter-spacing: 1.5px
      font-weight: bold
      // border-bottom: solid 5px #FE8548
      &:after
        content: ''
        position: absolute
        left: 0
        bottom: 0px
        width: 105%
        height: 20px
        background-color: #ffff00
        z-index: -1
      
      
    

  .Map_pic
    position: relative
    width: 70%
    height: 50vw
    margin-left: 15%
    // margin-top: 50px
    background: url('../assets/map_bg.svg')
    +bgcon
    // +bb
    +smallcom
      width: 95%
      height: 60vw
      margin-left: 2.5%
    +phone
      width: 90%
      margin-left: 5%
      margin-top: 20px
      height: 300px
      background: url('../assets/map_bg_phone.svg')
      +bgcon
      background-size: 90%
      border: solid 1px #c7c7c7
      // +bb
      // border-color: #777
      // box-sizing: border-box
      // padding: 50px
    .building_name_library
      position: absolute
      background-color: #fff
      border: solid 1px #555
      color: #555
      display: inline-block
      top: 31vw
      left: 24vw
      font-size: 1vw
      letter-spacing: 1px
      // font-weight: bold
      padding: 0 5px
      opacity: 0
      transition: 0.5s
      transform: translateY(100%)
      z-index: 15
      &.mouse_in
        transition: 0.5s
        transform: translateY(0)
        opacity: 1
      +smallcom
        font-size: 1.5vw
        top: 37vw
        left: 32vw
    .building_name_pigeon
      position: absolute
      border: solid 1px #555
      background-color: #fff
      display: inline-block
      font-size: 1vw
      letter-spacing: 1px
      // font-weight: bold
      color: #555
      padding: 0 5px
      top: 26.5vw
      left: 30vw
      opacity: 0
      transition: 0.5s
      transform: translateY(100%)
      z-index: 15
      &.mouse_in
        transition: 0.5s
        transform: translateY(0)
        opacity: 1
      +smallcom
        top: 30vw
        left: 41vw
        font-size: 1.5vw
    .building_name_education
      position: absolute
      border: solid 1px #555
      background-color: #fff
      display: inline-block
      font-size: 1vw
      letter-spacing: 1px
      color: #555
      // font-weight: bold
      padding: 0 5px
      top: 36.8vw
      left: 32vw
      opacity: 0
      transition: 0.5s
      transform: translateY(-100%)
      z-index: 15

      &.mouse_in
        transition: 0.5s
        transform: translateY(0)
        opacity: 1
      +smallcom
        top: 47vw
        left: 41vw
        font-size: 1.5vw
    .light_orange
      position: absolute
      background: url('../assets/orange_light.svg')
      background-size: contain
      background-repeat: no-repeat
      width: 6vw
      height: 6vw
      top: 33.5vw
      left: 29.1vw
      z-index: 9
      opacity: 0
      animation: orange_light 2s ease 1.5s infinite
      +smallcom
        width: 7vw
        top: 42.5vw
        left: 40.5vw
      +phone
        display: none
      

    .light_green
      position: absolute
      background: url('../assets/green_light.svg')
      background-size: contain
      background-repeat: no-repeat
      width: 9vw
      height: 9vw
      top: 34vw
      left: 21vw
      z-index: 9
      opacity: 0
      animation: orange_light 2s ease 1.5s infinite
      +smallcom
        width: 13vw
        top: 41.8vw
        left: 28vw
      +phone
        display: none
      
    
    .light_yellow
      position: absolute
      background: url('../assets/yellow_light.svg')
      background-size: contain
      background-repeat: no-repeat
      width: 6vw
      height: 6vw
      top: 30vw
      left: 29.8vw
      z-index: 9
      opacity: 0
      animation: orange_light 2s ease 1.5s infinite
      +smallcom
        width: 9.5vw
        top: 36vw
        left: 40.5vw
      +phone
        display: none
    
  .place_block
    +flexrow
    // +bb
    position: relative
    padding: 50px 0 800px 0
    background-color: white
    margin-top: 30px
    opacity: 0.7
    +phone
      +flexcolumn
    .place
      // +bb
      height: max-content
      // margin-top: 30px
      margin-left: 5%
      letter-spacing: 2px
      font-size: 25px
      font-weight: bold
      opacity: 0.7
      width: max-content
      padding: 0 5px
      animation: word 1s 2s forwards
      opacity: 0
      z-index: 2
      .work
        // margin-left: 100px
        margin-top: 20px
        opacity: 0.7
        font-size: 20px
        font-weight: 300
        text-align: left
        cursor: pointer
        z-index: 2
        // animation: word 0.5s 4s forwards

    .back
      margin-left: 20px
      font-size: 20px
      // margin-top: 20px
      height: 26px
      // background-color: #02F4F4
      opacity: 0
      color: #777
      // font-weight: 800
      padding: 2px 5px
      // border-radius: 6px
      border: solid 0.5px #777
      cursor: pointer
      z-index: 98
      animation: word 1s 2s forwards
      +phone
        width: 90px
        text-align: center
        margin-top: 20px

    .lib
      position: absolute
      width: 70%
      top: 0
      right: 0
      +phone
        top: 100px
        width: 100%
        opacity: 0.6
    .pig
      width: 70%
      position: absolute
      top: 0
      right: 0
      +phone
        width: 100%
        top: -100px
    .edu
      width: 70%
      top: 0
      position: absolute
      right: 0
      z-index: 1
      +phone
        width: 100%
        top: 100px
        opacity: 0.6


@keyframes origin_light
  0%
    opacity: 1
    transform: scale(0.5)
  100%
    opacity: 0
    transform: scale(1)

@keyframes light_circle
  0%
    opacity: 1
    transform: scale(0.5)
  100%
    transform: scale(1)
@keyframes word
  100%
    opacity: 1

@keyframes orange_light
  0%
    opacity: 0
  50%
    opacity: 0.8
    transform: scale(1.2)
  100%
    opacity: 0


.map_in-enter, .map_in-leave-to
  opacity: 0
  transform: scale(2)
  // transform-origin: 100%
.map_in-enter-active, .map_in-leave-active
  transition: all 0.5s ease

.place_in-enter
  opacity: 0
  transform: translateX(-100%)
.place_in-leave-to
  opacity: 0

.place_in-enter-active
  transition: all 1s 0.5s ease
  



</style>