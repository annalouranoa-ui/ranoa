export default function PortfolioPage() {
  const coffeeQuotes = [
    {
      quote: "As long as there was coffee in the world, how bad could things be?",
      author: "Cassandra Clare",
      tag: "Daily Inspiration",
    },
    {
      quote: "Procaffeinating: The tendency to not start anything until you've had a cup of coffee.",
      author: "Developer Proverb",
      tag: "Workflow",
    },
    {
      quote: "Science may never come up with a better office-communication system than the coffee break.",
      author: "Earl Wilson",
      tag: "Community",
    },
    {
      quote: "Good communication is as stimulating as black coffee, and just as hard to sleep after.",
      author: "Anne Morrow Lindbergh",
      tag: "Craft",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-[#b08968] tracking-tight">
          Coffee & Code
        </h1>
        <p className="text-lg text-[#dda15e]">
          Words of wisdom brewed fresh for developers and coffee lovers alike.
        </p>
      </div>

      {/* Quote Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffeeQuotes.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#2b1e16] border border-[#4a3525] rounded-2xl shadow-xl space-y-4 flex flex-col justify-between"
          >
            <span className="self-start px-3 py-1 text-xs font-semibold text-[#dda15e] bg-[#1a120c] rounded-full border border-[#4a3525]">
              {item.tag}
            </span>
            <p className="text-xl text-[#fefae0] font-medium leading-relaxed">
              "{item.quote}"
            </p>
            <p className="text-sm text-[#dda15e] font-semibold text-right">
              — {item.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}