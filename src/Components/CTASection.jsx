export default function CTASection() {
  return (
    <section className="grid md:grid-cols-2 border-t border-b">
      <div className="p-12 text-center">
        <h4 className="mb-4 font-semibold">Stay in touch</h4>
        <button className="border px-6 py-2 rounded">
          Subscribe
        </button>
      </div>

      <div className="p-12 text-center border-t md:border-t-0 md:border-l">
        <h4 className="mb-4 font-semibold">Enjoy your coffee</h4>
        <button className="border px-6 py-2 rounded">
          View Menu
        </button>
      </div>
    </section>
  );
}
