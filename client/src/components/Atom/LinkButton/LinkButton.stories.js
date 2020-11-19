import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { LinkButton } from './'

export default storiesOf('Components | Atom/LinkButton', module).add(
  'default',
  () => (
    <div className="container">
      <LinkButton handleClick={() => {}} href="/" text={text('Text', 'Text')} />
    </div>
  ),
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [LinkButton],
      text: `
          ~~~js
          <LinkButton 
            className={className} 
            handleClick={handleClick} 
            href={href}
            text={text}
          />
          ~~~
      `
    }
  }
)
