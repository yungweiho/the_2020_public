<template lang="pug">
.home
  bg_animate.bgAnimate#home
  Animate_steam.HomeAnimate
  introduction#introduction
  //- .line
  Team#team
  Map#map
  works#exhibition(v-bind="$attrs" v-on="$listeners")
  Contact#contact
  application#apply

</template>

<script>
import Animate_steam from '@/components/Animate_steam';
import introduction from '@/components/introduction';
import Map from '@/components/Map';
import works from '@/components/works';
import bg_animate from '@/views/Home/components/bg_animate';
import Team from '@/components/Team';
import application from '@/components/application';
import Contact from '@/components/Contact';

export default {
  components: {
    Map,
    Animate_steam,
    introduction,
    works,
    bg_animate,
    Team,
    application,
    Contact
  },
  data() {
    return {
      s: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll);
    if (this.$route.params.page) {
        var page = document.getElementById(String(this.$route.params.page))
        page.scrollIntoView()
      }
  },
  watch: {
    '$route'(){
      if (this.$route.query.work_number) {
        var page = document.getElementById('work')
        page.scrollIntoView()
        // window.scrollTo(0, this.s + 100)
      } else if (this.$route.params.page) {
        var page = document.getElementById(String(this.$route.params.page))
        page.scrollIntoView()
      }
    }
  },
  methods: {
    scroll() {
      this.s = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    }
  }
  

}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'

.home
  iframe
    position: absolute
    width: 100%
    min-height: 100vh
    z-index: -1
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.home
  position: relative
  z-index: 0
  +flexcolumn
  align-items: center

.line
  width: 75%
  margin-left: -300px
  border-top: solid 1px #777
  transform: rotate(8deg)
  margin-top: 200px
  +com
    margin-left: -150px
    display: none
  +smallcom
    display: none

// .bgAnimate
//   z-index: !important
// .HomeAnimate
//   z-index: 1 !important
// #introduction
//   z-index: 3 !important
// #map
//   z-index: 3 !important
// #exhibition
//   z-index: 333 !important


</style>