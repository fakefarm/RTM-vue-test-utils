<template lang="html">
  <div>
    <span class="count" v-text="count"></span>
    <button @click='count++'>click</button>
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
