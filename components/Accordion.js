function Accordion({title, isOpen}) {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } -z-20 bg-third-gray text-white font-normal text-[15px] p-7 relative top-0 h-full w-full rounded-b-[8px] accordion`}
    >
      <span className="">
        <span className="font-bold uppercase">{`$${title}`}</span> just
        announced an acquisition of <span className="font-bold">$NFLX</span> at{" "}
        <span className="font-bold">$NFLX</span> $200 B.
      </span>
      <p className="mt-4">
        this is an{" "}
        <span className="text-accent-color underline cursor-pointer">
          arbitrage opportuntiy
        </span>
        , with the max doin being %X if the deal closes, but the possible risk
        is %Y if the deal success is % and therefore the recommended play is{" "}
        <span className="text-accent-color underline cursor-pointer">
          long/short
        </span>
      </p>
    </div>
  );
}

export default Accordion;
