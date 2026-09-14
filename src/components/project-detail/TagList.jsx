export default function TagList({ tags, color = "#ECD1B3" }) {
  if (!tags) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-5 mb-6">
      {tags.map(function (tag) {
        return (
          <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: color }}>
            {tag}
          </span>
        );
      })}
    </div>
  );
}