function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#AB824D" className="flex-shrink-0 mt-0.5">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6z" />
    </svg>
  );
}

export default function FeatureList({ features }) {
  if (!features) return null;
  return (
    <div className="flex flex-col gap-3 mb-8 max-w-2xl">
      {features.map(function (f) {
        return (
          <div key={f} className="flex items-start gap-2">
            <StarIcon />
            <span className="text-base">{f}</span>
          </div>
        );
      })}
    </div>
  );
}