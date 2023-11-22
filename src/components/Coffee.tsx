function Coffee() {
  return (
    <a
      className="text-base dark:bg-neutral-600 hover:dark:bg-neutral-500 bg-neutral-200 hover:bg-neutral-300 flex w-48 items-center border-black rounded p-2 tracking-wide"
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
      <span className="align-middle ml-3 font-semibold">Buy me a coffee</span>
    </a>
  );
}

export default Coffee;
