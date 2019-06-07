import React from 'react'
import { Modal } from './Modal'

const content = 'Ahoy clipper skysail Brethren of the Coast trysail maroon keelhaul pinnace shrouds Pirate Round. American Main scurvy lugger furl case shot Spanish Main ho barque Pieces of Eight main sheet. Hempen halter Barbary Coast yard bilge scuttle aye gangway yo-ho-ho holystone boatswain.'

const App = () =>
  <div className='app'>
    <header className='header'>Welcome to Modal Town</header>
    <div className='app-body'>
      <Modal
        header={'Pieces of Eight'}
        content={content}
        openMessage={'Ahoy Matey!!'}
        onCancel={true}
        onConfirm={() => console.log('ay ay capn')}
      />
      <span>🏴‍☠️</span>
    </div>
  </div>

export default App
