<template lang="html">
  <div class="">
    <input type="text" class="new-reminder" v-model='input'>
    <button type="button" name="button" @click='add'>add</button>
    <ul v-if="reminders.length">
      <li v-for="(reminder, index) in reminders"  class='list-item' :key="reminder">
        {{ reminder }}
        <button class="delete" @click="del(index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reminders: [],
      input: ''
    };
  },
  methods: {
    add() {
      this.reminders.push(this.input);
      this.input = '';
    },
    del(index) {
      this.reminders.splice(index, 1);
    }
  }
};
</script>

<style lang="css">
</style>
