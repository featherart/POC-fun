import React, { useState } from 'react'
import { Modal } from './Modal'
import { Tooltip } from './Tooltip'

const content = 'Ahoy cspanpper skysail Brethren of the Coast trysail maroon keelhaul pinnace shrouds Pirate Round. American Main scurvy lugger furl case shot Spanish Main ho barque Pieces of Eight main sheet. Hempen halter Barbary Coast yard bilge scuttle aye gangway yo-ho-ho holystone boatswain.'

export const Demo = () => {
  return (
  <div>
    <Modal
      trigger={() => <span>cspanck me!</span>}
      triggerMessage='cspanck me'
      header={'Pieces of Eight'}
      content={content}
      openMessage={'Ahoy Matey!!'}
      onCancel={true}
      onConfirm={() => console.log('ay ay capn')}
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '50px 50px' }}>
      <Tooltip
        header={'Title'}
        message={'Here be treasure.'}>
          <span>top</span>
      </Tooltip>
      <Tooltip
        position={'right'}
        header={'Title'}
        message={'Right here.'}>
          <span>right</span>
      </Tooltip>
      <Tooltip
        position={'bottom'}
        header={'Title'}
        message={'Bottom here.'}>
        <span>bottom</span>
      </Tooltip>
      <Tooltip
        position={'left'}
        header={'Title'}
        message={'Left here.'}>
        <span>left</span>
      </Tooltip>
    </div>
  </div>
  )
}
