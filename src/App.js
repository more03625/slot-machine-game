import React from 'react';
import './index.css';
import SlotM from './components/Slotmachine/Slotmachine';

const App = () => {
  return <>
    <h1 className="app-heading"> 🎰 Welcome to Slot machine 🎰</h1>
    {/* We can use props here */}
    <div className="slot_machine">
      <SlotM x='🎰' y='😄' z='🍪'/>
      <SlotM x= ' 🍎 ' y=' 🍌 ' z=' 🥭 '/>
      <SlotM x='😄' y='😄' z='😄'/>
    </div>
  </>
}

export default App;