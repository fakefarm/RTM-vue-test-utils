import { mount } from 'vue-test-utils';
import Question from '../components/Question.vue';
import expect from 'expect';

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Question, {
      propsData: {
        dataQuestion: {
          title: 'The title',
          body: 'The body'
        }
      }
    });
  });

  it('presents a title and body', function() {
    see('The title');
    see('The body');
  });

  it('can be edited', () => {
    expect(wrapper.contains('input[name=title]')).toBe(false);
    click('#edit');
    expect(wrapper.find('input[name=title]').element.value).toBe('The title');
    expect(wrapper.find('textarea[name=body]').element.value).toBe('The body');
  });

  it('hides the edit button when editing', () => {
    click('#edit');
    expect(wrapper.contains('#edit')).toBe(false);
  });

  it('updates the question after being edited', function() {
    click('#edit');
    type('input[name=title]', 'New title');
    type('textarea[name=body]', 'New body');
    click('#update');
    see('New title');
    see('New body');
  });

  it('can cancel out of edit mode', function() {
    click('#edit');
    type('input[name=title]', 'New title');
    click('#cancel');
    see('The title');
  });

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;
    expect(wrap.html()).toContain(text);
  };

  let type = (selector, text) => {
    let node = wrapper.find(selector);
    node.element.value = text;
    node.trigger('input');
  };

  let click = selector => {
    wrapper.find(selector).trigger('click');
  };
});
