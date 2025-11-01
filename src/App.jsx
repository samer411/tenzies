import { useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';

export default function App() {
  function generateAllNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return arr;
  }

  function hold(id) {
    console.log(id);
  }
  const [dieValue, setDieValue] = useState(generateAllNewDice());

  return (
    <main className="flex justify-center bg-[#0B2434]">
      <div className="m-10 flex h-150 w-150 flex-col items-center space-y-3 rounded-md bg-[#F5F5F5] p-10">
        <h1 className="text-5xl">Tenzies</h1>
        <p className="text-2xl text-[#4A4E74]">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="grid grid-cols-5">
          {dieValue.map((ob) => (
            <Die key={ob.id} value={ob.value} id={ob.id} hold={hold} />
          ))}
        </div>
        <button
          className="rounded-md bg-[#5035FF] px-12 py-3 text-2xl font-bold text-white hover:cursor-pointer"
          onClick={() => setDieValue(generateAllNewDice())}
        >
          Roll
        </button>
      </div>
    </main>
  );
}
