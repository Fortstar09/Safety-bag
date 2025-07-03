const Icons = [
  { name: "amazon", src: "/icons/amazon.svg" },
  { name: "netflix", src: "/icons/netflix.svg" },
  { name: "apple", src: "/icons/apple.svg" },
  { name: "visa", src: "/icons/visa.svg" },
  { name: "google", src: "/icons/google.svg" },
  { name: "virus", src: "/icons/virus.svg" },
  { name: "stream", src: "/icons/stream.svg" },
  { name: "playstation", src: "/icons/playstation.svg" },
  { name: "eacard", src: "/icons/eacard.svg" },
  { name: "mappa", src: "/icons/mappa.svg" },
];

const GiftCards = () => {
  return (
    <section>
      <div className="px-5 lg:px-12 xl:px-36 my-14 flex flex-col gap-8">
        <div className="flexCenter w-full gap-3">
          <h1 className="text-3xl para text-grey w-fit">
            Featured<span className="pl-1">assets</span>
          </h1>
          <div className="h-[1px] w-full bg-line " />
        </div>
        <div className="flex justify-between items-center ">
          {Icons.map(({ name, src }) => (
            <img
              src={src}
              alt={name}
              key={name}
              className=" w-[20px] sm:w-[30px] md:w-fit"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftCards;
