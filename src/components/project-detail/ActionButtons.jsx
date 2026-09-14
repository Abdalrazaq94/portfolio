export default function ActionButtons({ liveUrl, codeUrl, secondaryUrl }) {
  return (
    <div className="flex flex-wrap gap-3">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg text-white font-medium hover:opacity-90 transition"
          style={{ backgroundColor: "#AB824D" }}
        >
          View UI &#8599;
        </a>
      ) : null}

      {secondaryUrl ? (
        <a
          href={secondaryUrl}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg text-white font-medium hover:opacity-90 transition"
          style={{ backgroundColor: "#758F6B" }}
        >
          View Status &#8599;
        </a>
      ) : null}

      {codeUrl ? (
        <a
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg border-2 border-black font-medium hover:bg-black hover:text-white transition"
        >
          View code
        </a>
      ) : null}
    </div>
  );
}