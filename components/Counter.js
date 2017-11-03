export default {
  template: `
    <div>
      <span class="count" v-text="count"></span>
      <button @click='count++'>click</button>
    </div>
  `,
  data() {
    return {
      count: 0
    };
  }
};
