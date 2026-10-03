export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 space-y-6">
        <span className="px-3 py-1 text-xs font-semibold text-[#dda15e] bg-[#2a1a10] rounded-full border border-[#432818]">
          Brewing code & ideas
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#b08968]">
          Warm digital experiences, <br />
          <span className="bg-gradient-to-r from-[#dda15e] via-[#ddb892] to-[#b08968] bg-clip-text text-transparent">
            crafted line by line.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#ddb892]">
          Welcome to my cozy corner of the web. I build clean, efficient, and aesthetic applications.
        </p>
      </section>
    </div>
  );
}