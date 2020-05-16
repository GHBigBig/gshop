<template>
  <header class="header">
<!--    <slot :left="left" ></slot>-->
    <slot name="left"></slot>
    <a class="header_title">
      <span class="header_title_text ellipsis" >
        {{ title }}
      </span>
    </a>
    <slot name="right"></slot>
<!--    <slot :right="right"></slot>-->
  </header>
</template>

<script>
  export default {
    name: 'HeaderTop',
    props: {
      title: String,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
