function ThankYou() {
  return (
    <div className="flex flex-col items-center tracking-wide gap-8 justify-center h-[50rem]">
      <img
        className="w-[6rem] h-[6rem]"
        src="/src/assets/images/icon-thank-you.svg"
        alt="icon"
      />
      <h2 className="text-[#011b3b] text-[3.2rem] font-bold tracking-wide">
        Thank You!
      </h2>
      <p className="text-[#b0b0ba] text-[1.4rem] tracking-wide w-[40rem] text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        plateform. if you ever need support, please feel free to email us at
        support@apkabhai.com.
      </p>
    </div>
  );
}

export default ThankYou;
