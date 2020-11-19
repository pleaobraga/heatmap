import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { InputField } from '.'

export default storiesOf('Components | Molecule/InputField', module)
  .add(
    'default',
    () => (
      <div className="container" style={{ textAlign: 'inherit' }}>
        <InputField
          className="item"
          label={text('Label', 'Label')}
          onChange={() => {}}
          name={text('Name', 'Name')}
          error={{}}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [InputField],
        text: `
          ~~~js
          <InputField 
            className=""
            label={Label}
            onChange={onChange}
            name={name}
            error={{}}
          />
          ~~~
      `
      }
    }
  )
  .add(
    'error',
    () => (
      <div className="container" style={{ textAlign: 'inherit' }}>
        <InputField
          className="item"
          label={text('Label', 'Label')}
          onChange={() => {}}
          name={text('Name', 'Name')}
          error={{
            hasError: true,
            message: text('Error Message', 'Error Message')
          }}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [InputField],
        text: `
          ~~~js
          <InputField 
            className=""
            label={Label}
            onChange={onChange}
            name={name}
            error={error}
          />
          ~~~
      `
      }
    }
  )
