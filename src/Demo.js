import React from 'react'
import { Modal } from './Modal'
import { Tooltip } from './Tooltip'
import { DropMenu } from './DropMenu'

const content = 'Ahoy cspanpper skysail Brethren of the Coast trysail maroon keelhaul pinnace shrouds Pirate Round. American Main scurvy lugger furl case shot Spanish Main ho barque Pieces of Eight main sheet. Hempen halter Barbary Coast yard bilge scuttle aye gangway yo-ho-ho holystone boatswain.'

export const Demo = () => {
  return (
  <div>
      <h3>Modal</h3>
      <Modal
        trigger={'button'}
        triggerMessage={'Click Me'}
        title={'Hi Title'}
        openMessage={'Open Me'}
        content={content}
        onConfirm={() => console.log('confirmed')}
        onCancel={() => console.log('cancelled')}
      />
      <h3>Tooltips</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '50px 50px', padding: '25px' }}>
      <Tooltip
        header={'Title'}
        message={'Here be treasure. Thar be dragons.'}>
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
    <h3>Drop Menu</h3>
    <DropMenu
      content={'results of pirate plunder'}
      />
    <DropMenu
      onClose={() => console.log('onClose')}
      onOpen={() => console.log('onOpen')}
      actions={[
        {icon: 'bin-line', action: 'Delete Item', danger: true, onClick: () => console.log('deleted')},
        {icon: 'star-line', action: 'Favorite Item'},
        {icon: 'sync-line', action: 'Forbidden Item', disabled: true, onClick: () => console.log('nope')},
        { copyValue: 123123, icon: 'copy-1-line', action: 'Copy Item', confirm: true, onClick: () => console.log('copied')}
      ]}
    />
  </div>
  )
}
