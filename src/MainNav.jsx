function MainNav() {
  const className = "flex px-10 py-6 gap-6 items-center cursor-pointer ";

  return (
    <nav className="bg-sidebar w-[30rem] min-h-screen ">
      <ul className="pt-6">
        <li className={className}>
          <span className="w-16 h-16 border border-[#a7aaff] hover:bg-[#bee2fe] hover:text-[#001c41] transition-colors duration-200 flex justify-center items-center rounded-full text-[#e7ecff] font-bold">
            1
          </span>
          <span className="flex flex-col">
            <span className="text-[#b1b2ff] text-[1.2rem] uppercase font-[500] tracking-wide">
              Step 1
            </span>
            <span className="text-[#f9faff] font-bold uppercase text-[1.4rem] tracking-wide">
              Your info
            </span>
          </span>
        </li>

        <li className={className}>
          <span className="w-16 h-16 border border-[#a7aaff] hover:bg-[#bee2fe] hover:text-[#001c41] transition-colors duration-200 flex justify-center items-center rounded-full text-[#e7ecff] font-bold">
            2
          </span>
          <span className="flex flex-col">
            <span className="text-[#b1b2ff] text-[1.2rem] uppercase font-[500] tracking-wide">
              Step 2
            </span>
            <span className="text-[#f9faff] font-bold uppercase text-[1.4rem] tracking-wide">
              Select plan
            </span>
          </span>
        </li>

        <li className={className}>
          <span className="w-[4rem] h-[4rem] border border-[#a7aaff] hover:bg-[#bee2fe] hover:text-[#001c41] transition-colors duration-200 flex justify-center items-center rounded-full text-[#e7ecff] font-bold">
            3
          </span>
          <span className="flex flex-col">
            <span className="text-[#b1b2ff] text-[1.2rem] uppercase font-[500] tracking-wide">
              Step 3
            </span>
            <span className="text-[#f9faff] font-bold uppercase text-[1.4rem] tracking-wide">
              Add-ons
            </span>
          </span>
        </li>

        <li className={className}>
          <span className="w-16 h-16 border border-[#a7aaff] hover:bg-[#bee2fe] hover:text-[#001c41] transition-colors duration-200 flex justify-center items-center rounded-full text-[#e7ecff] font-bold">
            4
          </span>
          <span className="flex flex-col">
            <span className="text-[#b1b2ff] text-[1.2rem] uppercase font-[500] tracking-wide">
              Step 4
            </span>
            <span className="text-[#f9faff] font-bold uppercase text-[1.4rem] tracking-wide">
              Summary
            </span>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
