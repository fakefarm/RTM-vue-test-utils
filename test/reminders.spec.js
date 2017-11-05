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
    expect(remindersList()).toContain('Go to the library');
  });

  it('can remove any reminder', () => {
    addReminder('clean house');
    addReminder('learn to test code');
    let deleteBtn = wrapper.find('ul > li:first-child .delete');
    deleteBtn.trigger('click');
    expect(remindersList()).not.toContain('clean house');
  });

  function addReminder(body) {
    let anotherReminder = wrapper.find('.new-reminder');
    anotherReminder.element.value = body;
    anotherReminder.trigger('input');
    wrapper.find('button').trigger('click');
  }

  function remindersList() {
    return wrapper.find('ul').text();
  }
});
