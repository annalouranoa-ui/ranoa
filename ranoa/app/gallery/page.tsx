export default function GalleryPage() {
  const images = [
    {
      title: "Caramel Macchiato",
      desc: "Freshly steamed milk marked with espresso and finished with sweet caramel drizzle.",
      url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Spanish Latte",
      desc: "A smooth, creamy blend of rich espresso and sweetened condensed milk.",
      url: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Americano Vibes",
      desc: "Bold, espresso shot diluted with hot water for a clean, rich flavor.",
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Matcha Latte",
      desc: "Earthy Japanese ceremonial matcha whisked with silky steamed milk.",
      url: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#f5abe]">Coffee Gallery</h1>
        <p className="text-[#a38d7d] mt-2">Visual highlights and warm coffee moments.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative h-64 overflow-hidden rounded-2xl border border-[#2e1d12] shadow-xl"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120b07] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-bold text-[#f5abe]">☕ {img.title}</h3>
              <p className="text-xs text-[#ddb892] mt-1">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}