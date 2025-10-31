import { use, useState } from 'react';

export default function Die(props) {
  function generateAllNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.ceil(Math.random() * 6));
    }
    return arr;
  }
  const [dieValue, setDieValue] = useState(generateAllNewDice());
  return (
    <button className="m-5 flex items-center justify-center rounded-md bg-white px-10 py-8 text-3xl font-bold hover:cursor-pointer hover:bg-[#59E391]">
      {}
    </button>
  );
}
