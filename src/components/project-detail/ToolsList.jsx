export default function ToolsList({ tools }) {
  if (!tools) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tools.map(function (t) {
        return (
          <span key={t} className="text-sm px-3 py-1 rounded-full bg-white font-medium">
            {t}
          </span>
        );
      })}
    </div>
  );
}