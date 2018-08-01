<template>
  <div class="star" :class="starSize">
    <div v-for="(starType, index) in itemClasses" :key="index" class="star-item" :class="starType"></div>
  </div>
</template>

<script>
const LENGTH = 5
const ON = 'on'
const OFF = 'off'
const HALF = 'half'

export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starSize () {
      return 'star-' + this.size
    },
    itemClasses () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let intNum = Math.floor(score)
      let hasDecimal = score % 2 !== 0
      for (let i = 0; i < intNum; i++) {
        result.push(ON)
      }
      if (hasDecimal) {
        result.push(HALF)
      }
      while (result.length < LENGTH) {
        result.push(OFF)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        height 0.4rem
        width 0.4rem
        margin-right 0.44rem
        background-size 0.4rem 0.4rem
        &.on
          bg-img(star48_on)
        &.half
          bg-img(star48_half)
        &.off
          bg-img(star48_off)
    &.star-36
      .star-item
        height 0.3rem
        width 0.3rem
        margin-right 0.12rem
        background-size 0.3rem 0.3rem
        &.on
          bg-img(star36_on)
        &.half
          bg-img(star36_half)
        &.off
          bg-img(star36_off)
    &.star-24
      .star-item
        height 0.2rem
        width 0.2rem
        margin-right 0.06rem
        background-size 0.2rem 0.2rem
        &.on
          bg-img(star24_on)
        &.half
          bg-img(star24_half)
        &.off
          bg-img(star24_off)
</style>
