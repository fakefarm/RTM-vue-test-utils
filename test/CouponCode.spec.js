import { mount } from 'vue-test-utils';
import expect from 'expect';
import CouponCode from '../components/CouponCode.vue';

describe('CouponCode', function() {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CouponCode);
  });

  it('accepts a coupon code', function() {
    expect(wrapper.contains('input.coupon-code')).toBe(true);
  });

  it('validates a real coupon code', function() {
    let couponCode = wrapper.find('input.coupon-code');
    couponCode.element.value = '50OFF';
    couponCode.trigger('input');
    // expect(wrapper.vm.valid).toBe(true);
    // TIP: use internals as sanity checks but don't test the parts that the user cannot see. Those implementation details are private.
    expect(wrapper.html()).toContain('Coupon Redeemed: 50% Off!');
  });

  it('validates a fake coupon code', function() {
    enterCouponCode('NOTREAL');
    expect(wrapper.html()).toContain('Invalid Coupon Code');
  });

  it('broadcasts the percentage discount when a valid coupon code is applied', () => {
    // option 1. Go through the UI
    // let couponCode = wrapper.find('input.coupon-code');
    // couponCode.element.value = '50OFF';
    // couponCode.trigger('input');

    // option 2. mock it out.
    // however the test knows implementation details
    wrapper.setData({
      // setData, sets the data
      code: '50OFF'
    });

    wrapper.vm.validate(); // vm holds instance of methods to fire.

    expect(wrapper.emitted().applied).toBeTruthy();
    expect(wrapper.emitted().applied[0]).toEqual(['50']);
  });
  function enterCouponCode(code) {
    let couponCode = wrapper.find('input.coupon-code');
    couponCode.element.value = code;
    couponCode.trigger('input');
  }
});
