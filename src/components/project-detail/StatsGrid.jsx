export default function StatsGrid({ stats }) {
  if (!stats) return null;
  return (
    <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
      {stats.map(function (s) {
        return (
          <div key={s.label} className="bg-white rounded-lg p-4 border border-black/10">
            <p className="text-xs text-gray-500">{s.label}</p>
            <p className="text-xl font-bold">{s.value}</p>
          </div>
        );
      })}
    </div>
  );
}