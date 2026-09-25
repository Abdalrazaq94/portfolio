import { useEffect, useState } from "react";

export default function CvModal(props) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const [cvExists, setCvExists] = useState(false);

  useEffect(function () {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";

      fetch("/cv.pdf", { method: "HEAD" })
        .then(function (res) {
          const type = res.headers.get("content-type") || "";
          setCvExists(res.ok && type.indexOf("pdf") !== -1);
        })
        .catch(function () {
          setCvExists(false);
        });
    } else {
      document.body.style.overflow = "";
    }

    return function () {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-20 overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
        onClick={function (e) { e.stopPropagation(); }}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-black/10">
          <p className="font-bold text-lg">My CV</p>

          <div className="flex items-center gap-3">
            {cvExists ? (
              <a
                href="/cv.pdf"
                download
                className="px-4 py-2 text-sm font-bold rounded-lg text-white hover:opacity-90 transition"
                style={{ backgroundColor: "#AB824D" }}
              >
                Download
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition text-xl"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="flex-1 w-full flex items-center justify-center bg-gray-50">
          {cvExists ? (
            <object data="/cv.pdf" type="application/pdf" className="w-full h-full">
              <div className="flex flex-col items-center gap-4 p-8 text-center">
                <p className="text-gray-600 text-base">
                  Preview isn't supported on this device.
                </p>
                <a
                  href="/cv.pdf"
                  download
                  className="px-5 py-2.5 rounded-lg text-white font-bold hover:opacity-90 transition"
                  style={{ backgroundColor: "#AB824D" }}
                >
                  Download CV instead
                </a>
              </div>
            </object>
          ) : (
            <p className="text-gray-500 text-lg">CV coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}