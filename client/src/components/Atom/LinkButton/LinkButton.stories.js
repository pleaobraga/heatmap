import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { LinkButton } from './'

export default storiesOf('Components | Atom/LinkButton', module).add(
  'default',
  () => (
    <LinkButton handleCLick={() => {}} href="/" text={text('Text', 'Text')} />
  ),
  {
    info: { inline: true, header: false }
  }
)
