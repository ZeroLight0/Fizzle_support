import { useEffect } from "react";

function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <div
      className={`fixed z-50 transition-all duration-300
        bottom-6 right-6
        sm:bottom-6 sm:right-6
        sm:left-auto sm:top-auto
        left-1/2 top-4 sm:translate-x-0 sm:translate-y-0
        -translate-x-1/2
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }
      `}
      style={{ maxWidth: "90vw" }}
    >
      <div className="bg-[#16A249] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 min-w-[200px] text-base font-medium justify-center">
        <span className="text-xl">🛒</span>
        <span>{message}</span>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .toast-pos {
            left: auto !important;
            top: auto !important;
            right: 1.5rem !important;
            bottom: 1.5rem !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Toast;
