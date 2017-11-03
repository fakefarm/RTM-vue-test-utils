<template lang="html">
  <div>
    <span class="count" v-text="count"></span>
    <button class='increment' @click='count++'>click</button>
    <button class='decrement' v-show="count > 0" @click="count--">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script>
