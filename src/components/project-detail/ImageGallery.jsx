export default function ImageGallery({ images, title }) {
  if (!images || !images.some(function (img) { return img; })) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
      {images.map(function (img, i) {
        if (!img) return null;
        return (
          <div key={i} className="aspect-video bg-white rounded-lg overflow-hidden flex items-center justify-center">
            <img src={img} alt={title + " screenshot " + (i + 1)} className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>
  );
}