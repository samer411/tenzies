export default function Die(props) {
  return (
    <button
      className={`${props.isHeld ? 'bg-[#59E391]' : 'bg-white'} m-5 flex items-center justify-center rounded-md px-10 py-8 text-3xl font-bold hover:cursor-pointer hover:bg-[#59E391]`}
    >
      {props.value}
    </button>
  );
}
