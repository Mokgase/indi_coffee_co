export default function Hero() {
  return (
    <section className="bg-zinc-800 text-white text-center py-20 px-6">
      <h2 className="text-5xl font-bold tracking-widest leading-tight">
        SPOK <br /> COFFEE <br /> CO
      </h2>

      <p className="mt-4 text-zinc-300">
        Premium coffee by people
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
        <div className="h-48 bg-zinc-700 rounded-xl" />
        <div className="h-48 bg-zinc-700 rounded-xl" />
      </div>
    </section>
  );
}
