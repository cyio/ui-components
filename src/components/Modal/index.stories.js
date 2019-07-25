import { storiesOf, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info'
import Modal from '.'

const wrapper = {
  components: { Modal },
  propsDescription: {
    Modal: {
      title: `标题`,
      show: '是否显示',
      enableCloseBtn: '是否启用关闭按钮',
    }
  }
}

export const methods = {
};

storiesOf('Modal', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      ...wrapper,
      template: `
      <div>
        <Modal title="hello" :show="show" @close="show=false">
          <div slot="content">world</div>
        </Modal>
        <button @click="show=!show">toggle</button>
      </div>
    `,
      data () {
        return {
          show: true
        }
      },
      methods
    }),
    {
      info: true
    }
  )
