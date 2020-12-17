<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 25.3" class="edu_3D" @mouseenter="$emit('mouse', 'education')" @mouseleave="$emit('mouse', null)">
    <defs>
        
    </defs>
    <!-- <title>教育館</title> -->
    <g id="圖層_2" data-name="圖層 2">
        <g id="圖層_1-2" data-name="圖層 1">
        <g>
            <polygon class="edu3dcls-1" points="44.37 5.58 44.37 10.62 30.87 25.15 30.85 25.14 30.85 18.91 44.35 5.56 44.37 5.58"/>
            <polygon class="edu3dcls-2" points="44.37 5.58 44.37 10.62 30.87 25.15 30.85 25.14 30.85 18.91 44.35 5.56 44.37 5.58"/>
            <polygon class="edu3dcls-1" points="30.82 25.16 18.22 22.84 18.22 16.88 30.85 18.91 30.85 25.14 30.82 25.16"/>
            <polygon class="edu3dcls-2" points="30.82 25.16 18.22 22.84 18.22 16.88 30.85 18.91 30.85 25.14 30.82 25.16"/>
            <polygon class="edu3dcls-1" points="18.22 16.88 16.02 19.08 16.02 24.97 16.03 24.97 18.22 22.84 18.22 16.88"/>
            <polygon class="edu3dcls-2" points="18.22 16.88 16.02 19.08 16.02 24.97 16.03 24.97 18.22 22.84 18.22 16.88"/>
            <polygon class="edu3dcls-1" points="16.01 24.98 11.33 24.06 11.33 18.32 16.02 19.08 16.02 24.97 16.01 24.98"/>
            <polygon class="edu3dcls-2" points="16.01 24.98 11.33 24.06 11.33 18.32 16.02 19.08 16.02 24.97 16.01 24.98"/>
            <polygon class="edu3dcls-1" points="13.89 15.73 11.33 18.32 16.02 19.08 18.22 16.88 30.85 18.91 44.34 5.58 44.33 5.53 34.59 3.76 35.75 2.57 35.75 2.54 26.56 0.99 25.37 1.95 15.63 0.13 5.85 9.32 2.59 8.76 0.14 10.93 0.15 10.96 2.52 11.35 4.07 9.8 5.11 10.01 1.56 13.28 13.89 15.73"/>
            <polygon class="edu3dcls-2" points="13.89 15.73 11.33 18.32 16.02 19.08 18.22 16.88 30.85 18.91 44.34 5.58 44.33 5.53 34.59 3.76 35.75 2.57 35.75 2.54 26.56 0.99 25.37 1.95 15.63 0.13 5.85 9.32 2.59 8.76 0.14 10.93 0.15 10.96 2.52 11.35 4.07 9.8 5.11 10.01 1.56 13.28 13.89 15.73"/>
            <polygon class="edu3dcls-1" points="1.55 13.28 1.55 19.47 11.3 21.5 11.33 18.32 13.89 15.73 1.55 13.28"/>
            <polygon class="edu3dcls-2" points="1.55 13.28 1.55 19.47 11.3 21.5 11.33 18.32 13.89 15.73 1.55 13.28"/>
            <polygon class="edu3dcls-1" points="2.54 11.35 4.07 9.8 5.14 9.98 2.54 12.4 2.54 11.35"/>
            <polygon class="edu3dcls-2" points="2.54 11.35 4.07 9.8 5.14 9.98 2.54 12.4 2.54 11.35"/>
            <polygon class="edu3dcls-1" points="5.78 8.02 5.78 9.43 28.31 13.39 28.33 13.36 28.33 11.99 5.82 7.99 5.78 8.02"/>
            <polygon class="edu3dcls-2" points="5.78 8.02 5.78 9.43 28.31 13.39 28.33 13.36 28.33 11.99 5.82 7.99 5.78 8.02"/>
            <polygon class="edu3dcls-1" points="5.8 7.96 12 2.28 33.52 6.17 33.53 6.2 28.33 11.99 5.82 7.99 5.8 7.96"/>
            <polygon class="edu3dcls-2" points="5.8 7.96 12 2.28 33.52 6.17 33.53 6.2 28.33 11.99 5.82 7.99 5.8 7.96"/>
            <polygon class="edu3dcls-1" points="28.33 11.99 33.54 6.19 33.55 6.21 33.55 7.54 28.35 13.37 28.33 13.36 28.33 11.99"/>
            <polygon class="edu3dcls-2" points="28.33 11.99 33.54 6.19 33.55 6.21 33.55 7.54 28.35 13.37 28.33 13.36 28.33 11.99"/>
            <polygon class="edu3dcls-1" points="35.78 2.58 35.78 3.97 34.59 3.76 35.76 2.56 35.78 2.58"/>
            <polygon class="edu3dcls-2" points="35.78 2.58 35.78 3.97 34.59 3.76 35.76 2.56 35.78 2.58"/>
        </g>
        </g>
      </g>
  </svg>

</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '@/assets/mixin.sass'

.edu_3D
  position: absolute
  width: 5vw
  top: 33.5vw
  left: 29.5vw
  stroke-dasharray: 4000
  stroke-dashoffset: 4000
  animation: draw 10s linear 0.5s forwards
  z-index: 10
  cursor: pointer
  +smallcom
    width: 6vw
    top: 42vw
    left: 41vw
  +phone
    display: none
  &:hover
    .edu3dcls-1, .edu3dcls-2
      fill: #FF834D
.edu3dcls-1, .edu3dcls-2

.edu3dcls-1 
  fill: rgba(#fff, 0)
  animation: fill 1s linear 0.5s forwards


.edu3dcls-2 
  fill: none
  stroke: #000
  stroke-miterlimit: 10
  stroke-width: 0.25px

@keyframes draw

  100%
    // stroke-dasharray: 0
    stroke-dashoffset: 0

@keyframes fill
  100%
    fill: #fff
</style>