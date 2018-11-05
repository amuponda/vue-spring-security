<template>
    <div v-if="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {

 },
data () {
  return {
    show: false
  }
}
}
</script>

<style scoped>

</style>