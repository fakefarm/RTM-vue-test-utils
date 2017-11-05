import { mount } from 'vue-test-utils';
import expect from 'expect';
import Reminders from '../components/Reminders.vue';

describe('Reminders', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Reminders);
  });

  it('hides reminders list if there are none.', function() {
    expect(wrapper.contains('ul')).toBe(false);
  });
  it('can add reminders', () => {
    addReminder('Go to the store');
    expect(wrapper.find('ul').text()).toContain('Go to the store');

    addReminder('Go to the library');
    expect(wrapper.find('ul').text()).toContain('Go to the library');
  });

  it.only('can remove any reminder', () => {
    addReminder('clean house');
    addReminder('learn to test code');
    let deleteBtn = wrapper.find('ul > li:first-child .delete');
    deleteBtn.trigger('click');
    expect(wrapper.find('ul').vnode.children.length).toBe(1);
  });

  function addReminder(body) {
    let anotherReminder = wrapper.find('.new-reminder');
    anotherReminder.element.value = body;
    anotherReminder.trigger('input');
    wrapper.find('button').trigger('click');
  }
});
