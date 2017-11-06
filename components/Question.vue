<template lang="html">
  <div class="question">
    <section class='question-viewing' v-if='!editing'>
      <h1 v-text="question.title"></h1>
      <div class="body" v-text="question.body"></div>
      <button id="edit" @click='editing = true'>Edit</button>
    </section>
    <section class='question-editing' v-if='editing'>
      <input type="text" name="title" v-model="form.title">
      <textarea name="body" rows="8" v-model="form.body"></textarea>
      <button id="update" @click="update">Update</button>
      <button id="cancel" @click="cancel">Cancel</button>
    </section>
  </div>

</template>

<script>
export default {
  props: ['dataQuestion'],
  data() {
    return {
      editing: false,
      question: this.dataQuestion, // assign props value to own data property
      form: {
        title: this.dataQuestion.title,
        body: this.dataQuestion.body
      }
    };
  },
  methods: {
    cancel() {
      this.editing = false;
    },
    update() {
      this.question.title = this.form.title;
      this.question.body = this.form.body;
      this.editing = false;
    }
  }
};
</script>

<style lang="css">
</style>
