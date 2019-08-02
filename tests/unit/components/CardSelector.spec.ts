/* tslint:disable no-console */
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import CardSelector from '@/components/CardSelector.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const spy = jest.fn();
console.error = spy;
localVue.use(Vuetify);
spy.mockRestore();

describe('CardSelector.vue', () => {
  let store: any;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        cards: [
          {
            rank: 10,
          },
        ],
      },
    });
  });

  it('renders a card selector', () => {
    const msg = 'new message';
    const wrapper = mount(CardSelector, {
      propsData: {
        index: 0,
      },
      store,
      localVue,
    });
    expect(wrapper.find('.selector')).toBeDefined();
  });
});
