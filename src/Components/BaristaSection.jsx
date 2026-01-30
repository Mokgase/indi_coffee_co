import BaristaCard from "../BaristaCard";

export default function BaristasSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-3xl font-bold mb-12">
        MEET YOUR <br /> SPOKE BARISTAS
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        <BaristaCard name="Tebs" />
        <BaristaCard name="Thandi" />
        <BaristaCard name="Elson" />
      </div>
    </section>
  );
}
