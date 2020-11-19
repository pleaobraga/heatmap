import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { InputField } from '.'

export default storiesOf('Components | Molecule/InputField', module).add(
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
            text={text}
          />
          ~~~
      `
    }
  }
)
// .add(
//   'success',
//   () => (
//     <div className="container">
//       <TypeMessage text={text('Text', 'Success text')} type="success" />
//     </div>
//   ),
//   {
//     info: {
//       inline: true,
//       header: false,
//       source: false,
//       propTables: [TypeMessage],
//       text: `
//         ~~~js
//         <TypeMessage
//           className=""
//           text={text}
//           type="success"
//         />
//         ~~~
//     `
//     }
//   }
// )
// .add(
//   'error',
//   () => (
//     <div className="container">
//       <TypeMessage text={text('Text', 'Error text')} type="error" />
//     </div>
//   ),
//   {
//     info: {
//       inline: true,
//       header: false,
//       source: false,
//       propTables: [TypeMessage],
//       text: `
//         ~~~js
//         <TypeMessage
//           className=""
//           text={text}
//           type="error"
//         />
//         ~~~
//     `
//     }
//   }
// )
