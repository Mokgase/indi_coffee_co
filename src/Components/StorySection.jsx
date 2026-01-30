export default function StorySection() {
  return (
    <section className="bg-zinc-800 text-white py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <div>
          <h4 className="text-2xl font-bold mb-4">
            Atterbury Boulevard Centre
          </h4>

          <p className="text-zinc-300 text-sm leading-relaxed">
            Tucked within the lively district of Pretoria East,
            Spoke Coffee is more than just a cafe. It's a space
            where stories are shared over premium coffee.
          </p>
        </div>

        <div className="h-64 bg-zinc-600 rounded-2xl" />
      </div>
    </section>
  );
}
