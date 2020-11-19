import React from 'react'
import { storiesOf } from '@storybook/react'

import { Heatmap } from '.'

export default storiesOf('Components | Organism/Heatmap', module).add(
  'default',
  () => (
    <div className="container">
      <div className="map-container">
        <Heatmap data={[]} heightAttribute="none" />
      </div>
    </div>
  ),
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [Heatmap],
      text: `
          ~~~js
          <Heatmap 
            data={data} 
            heightAttribute="heightAttribute"
          />
          ~~~
      `
    }
  }
)
