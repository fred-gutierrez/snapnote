const Coffee = () => {
  return (
    <a
      className="text-base dark:bg-neutral-600 hover:dark:bg-neutral-500 bg-neutral-200 hover:bg-neutral-300 flex w-46 items-center border-black rounded p-2 tracking-wide hover:-translate-y-0.5 transition duration-300 ease-in-out"
      target="_blank"
      href="https://www.buymeacoffee.com/fredthemathematician"
    >
      <img
        className="align-middle border-none shadow-none ml-1"
        width={18}
        height={18}
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span className="align-middle font-semibold ml-2.5">Buy me a coffee</span>
    </a>
  );
}

export default Coffee;
