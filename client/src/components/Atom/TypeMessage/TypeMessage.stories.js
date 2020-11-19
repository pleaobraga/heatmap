import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { TypeMessage } from '.'

export default storiesOf('Components | Atom/TypeMessage', module)
  .add(
    'default',
    () => (
      <div className="container">
        <TypeMessage text={text('Text', 'Text')} />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [TypeMessage],
        text: `
          ~~~js
          <TypeMessage 
            className="" 
            text={text}
          />
          ~~~
      `
      }
    }
  )
  .add(
    'success',
    () => (
      <div className="container">
        <TypeMessage text={text('Text', 'Success text')} type="success" />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [TypeMessage],
        text: `
          ~~~js
          <TypeMessage 
            className="" 
            text={text}
            type="success"
          />
          ~~~
      `
      }
    }
  )
  .add(
    'error',
    () => (
      <div className="container">
        <TypeMessage text={text('Text', 'Error text')} type="error" />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [TypeMessage],
        text: `
          ~~~js
          <TypeMessage 
            className="" 
            text={text}
            type="error"
          />
          ~~~
      `
      }
    }
  )
