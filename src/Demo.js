import React, { useState } from 'react'
import { Modal } from './Modal'
import { Tooltip } from './Tooltip'

const content = 'Ahoy clipper skysail Brethren of the Coast trysail maroon keelhaul pinnace shrouds Pirate Round. American Main scurvy lugger furl case shot Spanish Main ho barque Pieces of Eight main sheet. Hempen halter Barbary Coast yard bilge scuttle aye gangway yo-ho-ho holystone boatswain.'

export const Demo = () => {
  return (
  <div>
    <Modal
      trigger={() => <span>click me!</span>}
      triggerMessage='click me'
      header={'Pieces of Eight'}
      content={content}
      openMessage={'Ahoy Matey!!'}
      onCancel={true}
      onConfirm={() => console.log('ay ay capn')}
    />
    <ul>
      <Tooltip
        message={'Here be treasure.'}>
          <li>top</li>
      </Tooltip>
      <Tooltip
        position={'right'}
        header={'Title'}
        message={'Right here.'}>
          <li>right</li>
      </Tooltip>
      <Tooltip
        position={'bottom'}
        header={'Title'}
        message={'Bottom here.'}>
        <li>bottom</li>
      </Tooltip>
      <Tooltip
        position={'left'}
        header={'Title'}
        message={'Left here.'}>
        <li>left</li>
      </Tooltip>
    </ul>
  </div>
  )
}
