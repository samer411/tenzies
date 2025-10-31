import Die from './components/Die';

export default function App() {
  return (
    <body className="flex justify-center bg-[#0B2434]">
      <main className="align-items m-10 flex h-150 w-150 flex-col items-center justify-center rounded-md bg-[#F5F5F5] p-10">
        <h1 className="text-5xl">Tenzies</h1>
        <p className="text-2xl text-[#4A4E74]">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="grid grid-cols-5">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
        </div>
      </main>
    </body>
  );
}
