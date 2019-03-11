import { storiesOf, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info'
import VInputText from '.'

const wrapper = {
  components: { VInputText },
  propsDescription: {
    VInputText: {
      type: `Type of the text input. Options ['text', 'email', 'url', 'tel', 'search', 'password']`,
      disabled: 'Disables the input by adding "disabled" attribute',
      value: 'Value of the input',
      required: 'Adds the required attribute to input',
      placeholder: 'Placeholder text for the input',
      name: 'name attribute for input',
      pattern: 'pattern attribute for input (used for mobile keypad)',
      autocomplete: 'Autocomplete attribute used for browser autocomplete',
      inputmode: 'inputmode attribute for input (used for mobile keypad)',
      id: 'Id attribute for the input'
    }
  }
}

export const methods = {
  onFocus: action('onFocus'),
};

storiesOf('Atom - VInputText', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      ...wrapper,
      template: `
      <div>
        <VInputText type="text" defaultValue="40" v-model="inputValue" @focus="onFocus"/>

        <br/><br/>
        Value is: {{ inputValue }}
      </div>
    `,
      data () {
        return {
          inputValue: 'Default Value'
        }
      },
      methods
    }),
    {
      info: true
    }
  )
  .add(
    'type',
    () => ({
      ...wrapper,
      template: `
      <div>
        <VInputText type="password" v-model="inputValue" />
      </div>
    `,
      data () {
        return {
          inputValue: ''
        }
      }
    }),
    {
      info: true
    }
  )
