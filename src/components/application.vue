<template lang="pug">
.ap
  .apTitle 教育館活動報名
  a(href="https://forms.gle/KwSp7FYqAP6JWMRf6" target="_blank")
    .apLink 導覽報名
  div(@click="mang = true")
    .apLink 11/7工作坊報名
  div(@click="mang = true")
    .apLink 11/14工作坊報名
  el-dialog(:visible.sync="mang" :append-to-body="true" width="20%")
    div(style="font-size: 25px; font-weight: bold; text-align: center; letter-spacing: 2px") 已額滿！
  br
  el-button(type="text" @click="dialogVisible = true").button_text 報名須知
  el-dialog(
  :visible.sync="dialogVisible" :append-to-body="true").dia
    span(v-html="description").text
    img(:src="require('../assets/edu_map.png')" :style="{width: '90%', margin: '0 0 50px 0'}")
    br
    span(v-html="description2").text
  .smallTitle 預約情形
  iframe(src="https://calendar.google.com/calendar/embed?src=c_ptoh2f4imrfu45m3kct61ap2us%40group.calendar.google.com&ctz=Asia%2FTaipei" style="border: 0" width="800" height="600" frameborder="0" scrolling="no")
</template>

<script>
export default {
  data() {
    return {
      mang: false,
      description: `<p style="margin: 0cm 0cm 9pt; text-align: center;  "><strong><span style="font-size: 25px;  color: black;">〝有</span></strong><strong><span style="font-size: 25px; color: black;">A</span></strong><strong><span style="font-size: 25px;  color: black;">的</span></strong><strong><span style="font-size: 25px; color: black;">STEM</span></strong><strong><span style="font-size: 25px;  color: black;">〞玩耍創意工作坊</span></strong></p>
        <p style="margin: 0 0 15px 0;  "><strong><span style=" color: #0070c0; font-size: 22px">注意：原本兩次工作坊時間為</span><span style="color: #0070c0;">11/7</span></strong><strong><span style=" color: #0070c0;">與</span><span style="color: #0070c0;">11/21</span></strong><strong><span style=" color: #0070c0;">，現改成</span><u><span style="color: #0070c0;">11/7</span></u></strong><strong><u><span style=" color: #0070c0;">與</span><span style="color: #0070c0;">11/14</span></u></strong></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><strong></strong></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="font-family: 'Segoe UI Emoji', sans-serif;">●</span>11/7 <span style="">「橢圓兩點也瘋狂」：報名時間為即日起至</span>11/4</p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="font-family: 'Segoe UI Emoji', sans-serif;">●</span>11/14 <span style="">「磁陀螺跳探戈」：報名時間為即日起至</span>11/11</p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">每場工作坊人數限制：</span>30<span style="">人</span></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">活動年齡：</span>10<span style="">～</span>12<span style="">歲</span></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">活動時間：</span>11/7<span style="">、</span>11/14<span style="">　下午</span>2:00<span style="">至</span>4:00</p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">活動地點：清華大學教育館</span>109<span style="">教室</span></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><br /></p>
        <p style="margin: 0cm 0cm 0.0001pt;  ">&nbsp;</p>
        `,
      description2: `<p style="margin: 0cm 0cm 0.0001pt;  "><span style="">注意事項：</span></p>
        <ol style="margin-bottom: 0cm; margin-top: 0px;">
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">活動開始前</span>15<span style="">分鐘開始報到</span></li>
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">活動開始後</span>15<span style="">分鐘禁止入場</span></li>
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">為維護教學品質，活動中請勿攝影</span></li>
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">活動空間有限，未報名之隨行同伴不提供座位</span></li>
        </ol>
        <p style="margin: 0cm 0cm 0.0001pt;  ">&nbsp;</p>
        <p style="margin: 0 0 15px 0;  "><strong><span style="font-size: 22px; color: #0070c0">預約團體導覽</span></strong></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">報名時間：即日起至展期結束</span></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">可預約時段：</span>11/3 &ndash; 11/22<span style="">期間，週一至週五</span>(<span style="">展期的平日</span>)&nbsp;<span style="">上午</span>10:00</p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">報名人數限制：</span>10<span style="">人</span>- 15<span style="">人，一天報名至多</span>3<span style="">組</span></p>
        <p style="margin: 0cm 0cm 0.0001pt;  "><span style="">注意事項：</span></p>
        <ol style="margin-bottom: 0cm; margin-top: 0px;">
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">預約成功者，請於活動開始前</span>10<span style="">分鐘報到</span></li>
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">導覽時間大約</span>1 - 1.5<span style="">小時，若因故無法準時抵達，</span><br /><span style="">導覽時間仍準時開始，不予順延。</span></li>
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">如因故需取消預約，請至少於一天前來電取消</span></li>
        <li style="margin: 0cm 0cm 0.0001pt 0px;   "><span style="">如有特殊需求請來電詢問</span> 03-5715131 #34556</li>
        </ol>
        <p style="margin: 0cm 0cm 0.0001pt;  ">&nbsp;</p><p style=" color: #0070c0; font-size: 22px"><strong>定時導覽時段</strong></p>
        <p>週一至週五：15:30<br />週六至周日：10:30 / 13:30 / 15:30</p>
        <p>注意事項：</p>
        <ol>
        <li>僅開放現場報名，每場報名人數未達5人則取消該次導覽活動。<br />每場報名人數以20人為限。</li>
        <li>平日開放報名至導覽前1小時截止。</li>
        <li>六日開放報名至導覽前30分鐘截止。</li>
        <li>請於導覽活動開始前10分鐘報到。</li>
        </ol>`,
      dialogVisible: false
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.ap
  // overflow-y: hidden
  iframe
    position: relative !important
    width: 90%
    // margin-left: 5%
    left: 0
ol
  padding: 0 0 0 27px !important
.el-dialog
  +smallcom
    width: 80% !important
  +pad
    width: 95% !important
.el-dialog__body
  padding: 10px 50px 50px 50px !important
  +phone
    padding: 20px 30px 30px 30px !important

  
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.ap
  width: 90%
  position: relative
  +flexcolumn
  align-items: center
  z-index: 3
  box-sizing: border-box
  padding: 80px 0 0 0
  .apTitle
    position: relative
    font-size: 30px
    letter-spacing: 1.5px
    font-weight: bold
    margin-top: 50px
    margin-bottom: 10px
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 0px
      width: 105%
      height: 20px
      background-color: #ffff00
      z-index: -1
  .apLink
    font-size: 20px
    font-weight: bold
    letter-spacing: 1.5px
    margin-top: 20px
    // margin-bottom: 10px
    width: 200px
    // height: 80px
    box-sizing: border-box
    // padding: 20px 0
    cursor: pointer
    +bgcon
    text-align: center
    animation: cha_color 5s linear infinite
.smallTitle
  // width: 100%
  font-size: 20px
  letter-spacing: 2px
  font-weight: bold
  margin-bottom: 20px
.text
  font-size: 20px
  letter-spacing: 1.5px
  line-height: 35px
  box-sizing: border-box
  // margin-left: 20px
  // padding: 0 20px 15px 15px
.button_text
  font-size: 20px
  letter-spacing: 1.5px
  font-weight: bold
  color: $colororange
  text-decoration: underline
  margin-bottom: 30px
  &:hover
    color: $colorblue
.dia
  // box-sizing: border-box
  // padding: 0 10px 10px 15px
@keyframes cha_color
  0%
    color: #00FF00
  50%
    color: #FF7733
  100%
    color: #00FFFF

@keyframes cha_pic
  0%
    background: url('../assets/green_tri.png')
    margin-top: 20px
    margin-bottom: 20px
    width: 200px
    height: 80px
    box-sizing: border-box
    padding: 20px 0
    +bgcon


  100%
    background: url('../assets/orange_tri.png')
    margin-top: 20px
    margin-bottom: 20px
    width: 200px
    height: 80px
    box-sizing: border-box
    padding: 20px 0
    +bgcon





</style>