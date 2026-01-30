export default function BaristaCard({ name }) {
  return (
    <div className="text-center">
      <div className="h-40 w-40 bg-zinc-300 rounded-2xl mx-auto mb-4" />
      <p className="font-medium">{name}</p>
    </div>
  );
}
