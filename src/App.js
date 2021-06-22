import React from 'react';
import './index.css';
import SlotM from './components/Slotmachine/Slotmachine';

const App = () => {
  return <>
    {/* We can use props here */}
    <h1 className="app-heading"> 🎰 Welcome to Slot machine 🎰</h1>

    <div className="slot_machine">
        <SlotM x='🎰' y='😄' z='🍪'/>
        <SlotM x= ' 🍎 ' y=' 🍌 ' z=' 🥭 '/>
        <SlotM x='😄' y='😄' z='😄'/>
    </div>
  </>
}

export default App;