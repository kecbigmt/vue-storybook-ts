import { storiesOf } from '@storybook/vue';

import HelloWorld from '../src/components/HelloWorld.vue';

storiesOf('HelloWorld', module)
  .add('simple', () => ({
    components: { HelloWorld },
    template: `<HelloWorld msg="Welcome to Your Vue.js + TypeScript + Storybook App"/>`,
  }));