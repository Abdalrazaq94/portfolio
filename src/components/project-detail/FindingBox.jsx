export default function FindingBox({ finding, color }) {
  if (!finding) return null;
  return (
    <div className="rounded-xl p-6 mb-8 max-w-2xl" style={{ backgroundColor: color }}>
      <p className="font-bold text-xl mb-3">{finding.title}</p>
      {finding.body.map(function (para, i) {
        return <p key={i} className="text-base leading-relaxed mb-3 last:mb-0">{para}</p>;
      })}
    </div>
  );
}