<template lang="pug">
.co
  .coTitle 聯絡資訊
  .coContent(v-html="contactData.content")
</template>

<script>
export default {
  data() {
    return {
      contactData: {
        title: '聯絡資訊',
        content: `<p>有任何想法或問題歡迎寄信到<br />techart@my.nthu.edu.tw<br />或來電諮詢 03-5715131#34556</p>
<p><a href="http://www.thsrc.com.tw/" target="_blank" rel="noopener" style="font-weight: bold">台灣高鐵</a></p>
<p>請於高鐵新竹站下車，下車後可轉搭其他交通工具，轉乘資訊請見台灣高鐵網站。</p><hr>
<p><a href="http://www.railway.gov.tw/tw/" target="_blank" rel="noopener" aria-invalid="true" style="font-weight: bold">火車</a></p>
<p>西部幹線 新竹站下車，下車後需轉搭其他交通工具。</p><hr>
<p></p>
<p><a href="http://www.hcbus.com.tw/" target="_blank" rel="noopener" style="font-weight: bold">市區公車</a></p>
<p>新竹客運公車號碼：</p>
<ul>
<li>1路（約每10-15分鐘一班）</li>
<li>2路（約1小時一班）</li>
</ul>
<p>搭乘地點：民族路16號，【火車站】站</p>
<p>下車地點：清華大學站</p>
<p></p><hr>
<p><strong>計程車 </strong></p>
<p>火車站&rarr;清華大學校本部門口，車資約200~250元<br />（若未跳錶，上車前請先與司機議價）</p><hr>
<p><strong>國道客運 </strong></p>
<p>下交流道後之下車站（於交流道口或清華大學門口），請先洽詢各客運公司。</p><hr>
<p><strong>自行開車 </strong></p>
<p>國道路線：</p>
<p>※ 中山高二側引道與光復路、公道五路並未直接連結南下欲由光復路下交流道者，請先由公道五出口接引道。<br />※ 因校內停車空間有限，如遇校內車位爆滿無處可停時，亦可將車輛停放於本校對面之「赤土崎收費停車場」。</p>
<table border="1">
<tbody>
<tr>
<td id="h1" rowspan="2">
<p>由中南部<br />北上車輛</p>
</th>
<td id="h2">
<p>路線一</p>
</td>
<td id="h3">
<p>由95B竹科交流道下，左轉接園區二路，行至新安路時左轉直行，由本校南門進校園。(本路線適合考場位於台積館、人社院、工科館、生科二館、原科院考生)</p>
</td>
</tr>
<tr>
<td id="h4" headers="h2">
<p>路線二</p>
</td>
<td id="h5" headers="h3">
<p>由95A新竹交流道下，左轉接光復路後直行，由本校光復路大門進校園。(本路線適合考場位於工一館、化工館、教育館、電資院、綜三館、物理館、材料館考生)</p>
</td>
</tr>
<tr>
<td id="i1" rowspan="2" headers="h1">
<p>由北部<br />南下車輛</p>
</td>
<td id="i2" headers="h4">
<p>路線一</p>
</td>
<td id="i3" headers="h5">
<p>由95A公道五匣道下交流道，選擇右方往公道五路出口，沿公道五路直行至建中路口(鄰近中油油庫)左轉，沿建中路直行至底(光復中學)再左轉光復路，由本校光復路大門進入校園。</p>
</td>
</tr>
<tr>
<td id="i4" headers="i2">
<p>路線二</p>
</td>
<td id="i5" headers="i3">
<p>由95A公道五匣道出高速公路後直行，經由引道接光復路後右轉直行，由本校光復路正門進入校園。如果您錯過了上述交流道，請由下一個出口(95B竹科交流道)下高速公路，右轉接園區新安路後直行，由本校南門進入校園。</p>
</td>
</tr>
</tbody>
</table>`
      }
    }
  }
}
</script>
<style lang="sass">
hr
  // border: solid 0.1px #777
  border-color: rgba(#EEE, 0.3)
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.co
  width: 50%
  +flexcolumn
  // align-items: center
  margin-top: 200px
  z-index: 3
  min-width: 825px
  box-sizing: border-box
  padding: 130px 0 0 0
  +com
    min-width: initial
    width: 90%
  +phone
    margin-top: 0px
  .coTitle
    position: relative
    font-size: 30px
    font-weight: bold
    letter-spacing: 1.5px
    // border-bottom: solid 5px #FE8548
    display: inline-block
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 0px
      width: 150px
      height: 20px
      background-color: #ffff00
      z-index: -1
  .coContent
    margin-top: 30px
    font-size: 20px
    color: #777
    letter-spacing: 1.5px
    line-height: 35px
    // border: dashed 0.5px black
    // padding: 20px
    box-sizing: border-box




</style>