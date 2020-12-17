<template lang="pug">
.intro
  .introTitle 策展理念 
  .name 策展人 | 許素朱
  .intro_block
    .intro_text {{ text }}
    .intro_text {{ text2 }}
  br
  br
  .introTitle.en Curation Statement
  .name_en Curator | Professor Su-Chu Hsu
  .intro_block
    .intro_text_en {{ text3 }}
    .intro_text_en {{ text4 }}
</template>

<script>
export default {
  data() {
    return {
      text: '近年STEM（Science、Technology、Engineering、Mathematics）是國際體現跨學科的重要教育理念，後來融入藝術（Art）成為STEAM，讓學習更完整，讓創造更人文。 「印象清華2020」今年主題訂為“有A的STEM”，除了展現清華現在成為「有“藝術”的清華大學」，也強調「有A的STEM」教育特色。為了呈現本次展覽的主題，我們廣邀國際、國內、清華的作品，而作品結合了電、磁、光、水、空氣、視覺、聲音、力學、化學、運動…等，以互動裝置藝術與設計呈現，展現STEAM跨學科精神。我們的展覽，讓大家在STEM的參與及觀賞過程中，可以很Art、很Adventure。',
      text2: '今年的展區包含在鴿子廣場的運用物理與數學呈現的戶外動力藝術區，在旺宏圖書館的運用科學與科技創作的互動科學藝術區，以及在教育館特別針對K12跨學科教育設計的STEAM互動探索館。在STEAM互動探索館中，我們期望大家來做個好奇愛動手做的Tinker、做個探索跨學科原理的Explorer、做個創意轉化實踐創造的Maker。我們期盼“有A的STEM”不只是跨學科教育運動，更是文化深耕運動。',
      text3: ' In recent years, STEM (Science, Technology, Engineering, Mathematics) is an essential interdisciplinary educational concept that is an important international trend. After some years, it is integrated Art into STEAM, which makes learning more complete and creation more humane. This year the theme of "Tsing Hua Effects 2020" is "STEM with A", which not only shows that Tsing Hua is now a " Tsing Hua University with" Art ", but also emphasizes the educational characteristics of "STEM with A". In order to present the theme of this exhibition, we invite international, domestic and  Tsing Hua artworks, which combine electricity, magnetism, light, water, air, vision, sound, motion, kinetic, mechanics, chemistry, etc., showing the interdisciplinary spirit of STEAM through interactive installation art and design. ',
      text4: '  Our exhibition allows everyone to feel Art and Adventure in the process of participating in STEM.  The exhibition areas in this year include the outdoor dynamic sculptures area using physics and mathematics in the Pigeon Square, the interactive science art area using science and technology in the Library, and the STEAM interactive exploration hall specially designed for K12 interdisciplinary education in the Education Building. In the STEAM interactive exploration hall, we hope that everyone can be a curious and hands-on Tinker, an Explorer that explores interdisciplinary principles, and a Maker of creative transformation and practice creation. We hope that "STEM with A" is not only an interdisciplinary education movement but also a cultural cultivating movement.'
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.intro
  position: relative
  min-height: 50vh
  width: 50%
  // padding: 200px 100px 100px 100px
  box-sizing: border-box
  z-index: 3
  padding: 150px 0 0 0
  // margin-top: 260px
  min-width: 825px
  @media all and (max-width: 956px)
    padding: 100px 0 0 0
  +com
    min-width: initial
    width: 90%
  +phone
    width: 90%
    // padding: 80px 20px 0 20px
  .introTitle
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
      @media all and (max-width: 468px)
        // height: 30px

  .intro_block
    margin-top: 20px
    .intro_text
      font-size: 20px
      // color: #777
      letter-spacing: 2.5px
      line-height: 38px
      text-align: justify
    .intro_text_en
      font-size: 20px
      // color: #777
      letter-spacing: 1px
      line-height: 38px
      text-align: left
      word-break: break-word
.name
  font-size: 16px
  letter-spacing: 1.5px
  // margin-top: 10px
  display: inline-block
  margin-left: 20px
.name_en
  font-size: 16px
  letter-spacing: 1.5px
  margin-top: 10px
  // display: inline-block
  // margin-left: 20px
.en
  font-size: 25px !important

</style>