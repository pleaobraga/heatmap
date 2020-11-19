import React from 'react'
import { storiesOf } from '@storybook/react'
import { formData } from '../../../pages/HeatmapPage/formHelper'
import { Form } from '.'

export default storiesOf('Components | Organism/Form', module).add(
  'default',
  () => (
    <div className="container" style={{ textAlign: 'inherit' }}>
      <div style={{ width: '400px', margin: 'auto' }}>
        <Form formData={formData} postAPI={() => {}} onSuccess={() => {}} />
      </div>
    </div>
  ),
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [Form],
      text: `
          ~~~js
          <Form 
            formData={formData},
            postAPI={postAPI},
            onSuccess={onSuccess},
            className={className}
          />
          ~~~
      `
    }
  }
)
