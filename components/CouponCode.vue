<template lang="html">
  <div class="coupon">
    <input type="text" class="coupon-code" v-model='code' @input='validate'>
    <p v-text='validation_message'></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '',
      coupons: [],
      valid: false
    };
  },
  computed: {
    selectedCoupon() {
      return this.coupons.find(coupon => coupon.code == this.code);
    },
    message() {
      return this.selectedCoupon.message;
    },
    validation_message() {
      if (this.valid) {
        return `Coupon Redeemed: ${this.message}`;
      }
      return 'Invalid Coupon Code';
    }
  },
  methods: {
    validate() {
      this.valid = !!this.selectedCoupon;
      if (this.valid) {
        this.$emit('applied', this.selectedCoupon.discount);
      }
    }
  }
};
</script>

<style lang="css">
</style>
