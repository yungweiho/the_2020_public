<template lang="pug">
.te
  .te_block
    .teTitle {{ teamData.title }}
    .teSubTitle {{ teamData.subTitle }}
    .teContent {{ teamData.content }}
  .people_tab_block
    .people_tab(v-for="(item, i) in people_list" @click="p = i" :class="{select: p === i}")
      .people_title {{ item.title }}
      .line |
      .people_name {{ item.name }}
  .people_intro_block
    .people_pic(:key="p" :style="{background: 'url(' + people_list[Number(p)].pic + ')', backgroundSize: 'cover', backgroundPosition: Number(p) === 5? 'center 20%' : 'center', backgroundRepeat: 'no-repeat'}")
    .people_text {{ people_list[Number(p)].description }}
</template>

<script>
export default {
  data() {
    return {
      p: 0,
      teamData: {
        title: '清華學院 科技藝術研究中心',
        subTitle: "〝ART & TECHNOLOGY - When Artists And Engineers Work Together, The Result is Something Neither Can Expect.〞",
        content: '這是 1998年 7月 IEEE Spectrum 雜誌封面上的一句話，該期雜誌一刊出，宣告了藝術與科技整合時代里程碑來臨了，而且已成了全球共同重視的課題。清華大學是國際知名以科學、科技稱著的大學，科學與科技的硬實力在臺灣學術與產業界早已奠定深厚根基，但在發展橫向的跨域整合研究與創作人才培育上仍闕如。為推動本校科技與藝術的結合，以及創造清華「科技藝術跨域的新 DNA」與「科技藝術跨域的新文化」，清華大學藝術學院成立院學士班培養科技藝術跨域人才，清華學院也成立「科技藝術研究中心」，主要目的整合校內外跨領域專業與資源，推動「數位藝術」、「數位文創」、「科技創新應用」三方面的學術研究、教育推廣、產學合作與國際交流等，並致力於數位跨域轉繹創作、數位文創促進以及科技創新激發。中心網站:techart.nthu.edu.tw',
      },
      people_list: [
        {
          title: '策展人',
          name: '許素朱',
          description: '目前為國立清華大學藝術學院院長暨科技藝術研究中心主任，專長為科技藝術、數位文創、STEAM創新教育。長年推動台灣科技藝術發展與跨域教育，曾成立台灣第一個科技藝術研究所，是台灣科技藝術結合的重要先鋒與橋樑。近年深覺跨域教育需從小紮根，遂推動「有A的STEM」創新教育，並開創STEAM123引導式創意教學，期盼這推動不只是跨學科教育運動，更是文化深耕運動。',
          pic: require('../assets/team/nio.jpg')
        },
        {
          title: '執行策展',
          name: '劉士達',
          description: '畢業於國立臺北藝術大學科技藝術研究所，現為清華大學科技藝術研究中心科技創新應用組組長，以及清華大學藝術學院科技藝術跨域學士班講師，主要專長為：互動科技研發、電子互動藝術、互動裝置藝術，物聯網系統整合。',
          pic: require('../assets/team/da.jpg')
        },
        {
          title: '執行策展',
          name: '張雅婷',
          description: '畢業於國立臺北藝術大學新媒體藝術研究所，專長互動設計、互動程式設計、STEAM教案研發。喜歡旅遊、喜歡攝影、喜歡玩耍、喜歡創造有趣好玩的事物，想讓人生充滿各種不同的經歷與故事。',
          pic: require('../assets/team/ting.jpg')
        },
        {
          title: '執行策展',
          name: '孟昕',
          description: '中國大陸，遼寧沈陽人國立清華大學，跨院，藝術與科技組博二在讀。擅長纖維，織紡，圖案設計，喜歡探索各種領域的媒材將其運用在作品中，還喜歡做各種手作，也希望能將手作的魅力與科技結合，傳承跨域結合之應用。',
          pic: require('../assets/team/mon.jpg')
        },
        {
          title: '執行策展',
          name: '孫佳興',
          description: '1987年出生於中國吉林，2006年就讀於廣州美術學院並開始在廣州生活與創作，作品涉及視覺、裝置、媒體、科技藝術等。 2013年開始創作“皮的研究”系列，試圖用一種東方生命哲學的觀點，轉化成當代語境，對人類本質的“無意義”的狀態進行思考。曾參與製作多個當代藝術展覽，目前就讀台灣國立清華大學跨院國際碩士科技藝術組。',
          pic: require('../assets/team/shin.jpeg')
        },
        {
          title: '宣傳企劃',
          name: '呂文明',
          description: '昔經驗多為辦理節慶、舞台綜藝節目或戶外活動，從節目編排到燈光音響全包統籌，藝工隊的功能就是如斯；加入團隊後首次協助「印象清華2020 〜〝有A的STEM〞科普藝術節」這次的初體驗九四要把清華科藝中心的「好東西」推薦週知；套用政戰影劇系的系訓「將科普做成舞台的麵包，去餵飽人類飢餓的靈魂」。各位不來，保證後悔，來了一定後悔，因為後悔為何不早一點來看。',
          pic: require('../assets/team/lui.jpg')
        },
        {
          title: '機構設計',
          name: '紀宥羽',
          description: '畢業於工業設計系，因機緣巧合下認識了互動藝術，致力於互動藝術結構機構設計，將天馬行空的藝術思維實現在三維空間中的過程令人著迷。',
          pic: require('../assets/team/yui.jpg')
        },
        {
          title: '視覺設計',
          name: '楊巧',
          description: '生於臺灣臺北，畢業於臺灣藝術大學視覺傳達設計系。喜歡書、音樂、電影及藝術欣賞，樂於成為貓奴。',
          pic: require('../assets/team/chiao.jpg')
        },
        {
          title: '網站設計',
          name: '何勇威',
          description: '台灣新竹縣人，喜歡嘗試新事物，網頁前端、剪輯、歌唱、鈾同位素定年法皆有涉獵。',
          pic: require('../assets/team/wei.jpg')
        },
        {
          title: '執行助理',
          name: '曾倩如',
          description: '畢業於國立清華大學教育心理與諮商學習。一個普通的女子。',
          pic: require('../assets/team/chian.jpg')
        },
        {
          title: '技術助理',
          name: '李冠賢',
          description: '畢業於稻江科技暨管理學院，任職專任助理。',
          pic: require('../assets/team/guang.jpg')
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.te
  width: 50%
  position: relative
  padding: 150px 0 0 0
  +flexcolumn
  align-items: center
  z-index: 3
  min-width: 825px
  @media all and (max-width: 956px)
    padding: 100px 0 0 0
  +com
    min-width: initial
    width: 90%
  .te_block
    position: relative
    .teTitle
      position: relative
      // float: right
      // right: 0
      // top: 0
      // text-align: right
      font-size: 30px
      letter-spacing: 1.5px
      font-weight: bold
      // border-bottom: solid 5px #FE8548
      display: inline-block
      // +phone
      //   font-size: 25px
      // @media all and (max-width: 368px)
      //   font-size: 20px
      &:after
        content: ''
        position: absolute
        left: 0
        bottom: 0px
        width: 105%
        height: 20px
        background-color: #ffff00
        z-index: -1
        // word-break: break-all
        @media all and (max-width: 427px)
          bottom: 20px
          // height: 60px
    .teSubTitle
      // margin-top: 30px
      padding: 50px 0 0 0
      font-size: 20px
      // color: #777
      letter-spacing: 1px
      line-height: 35px
      text-align: justify

      // text-align: right
    .teContent
      font-size: 20px
      margin-top: 10px
      // color: #777
      line-height: 38px
      letter-spacing: 2.5px
      text-align: justify


.people_tab_block
  width: 100%
  background-color: #fff
  min-height: 70px
  margin-top: 20px
  box-sizing: border-box
  padding: 20px
  +flexrow
  flex-wrap: wrap
  .people_tab
    +flexrow
    color: #777
    font-size: 18px
    letter-spacing: 1.5px
    margin-right: 20px
    cursor: pointer
    line-height: 35px
    min-width: 157px
    &.select
      color: $colororange
    .people_title
      font-size: 19px
      font-weight: bold
      margin-right: 5px
      // border-right: solid 0.5px #777
    .people_name
.people_intro_block
  width: 100%
  margin-top: 20px
  +flexrow
  +phone
    +flexcolumn
  .people_pic
    width: 200px
    height: 200px
    +phone
      width: 90vw
      height: 83vw
  .people_text
    width: calc(100% - 200px)
    font-size: 18px
    letter-spacing: 1.5px
    color: #555
    margin-left: 20px
    line-height: 35px
    text-align: justify

    +phone
      width: 100%
      margin-left: 0
      margin-top: 20px
.line
  margin-right: 5px
  font-weight: 10


</style>