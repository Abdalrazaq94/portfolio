export default function TextBlock({ paragraphs }) {
  if (!paragraphs) return null;
  return (
    <div className="flex flex-col gap-4 mb-8 max-w-2xl">
      {paragraphs.map(function (para, i) {
        return <p key={i} className="text-base text-gray-700 leading-relaxed">{para}</p>;
      })}
    </div>
  );
}