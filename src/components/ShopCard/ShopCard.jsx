import { useRef, useEffect } from "react";
import gsap from "gsap";

function ShopCard({ image, title, price, description, badge, onAddToCart }) {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
    });
  }, []);
  return (
    <div
      ref={cardRef}
      className="bg-white rounded-md border-1 border-[#E5E7EB] shadow-sm p-4 py-8 text-center flex flex-col transition-transform duration-300 hover:scale-105"
    >
      {/* Product Image */}
      <div className="flex justify-center mb-3">
        <img src={image} alt={title} className="w-20 h-20 object-contain" />
      </div>

      {/* Title + Badge */}
      <h2 className="text-lg font-semibold flex items-center justify-center gap-2">
        {title}
        {badge && (
          <span className="bg-orange-200 text-orange-700 text-xs font-medium px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </h2>

      {/* Price */}
      <p className="text-green-600 font-bold text-xl my-2">${price}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>

      {/* Button */}
      <button
        onClick={onAddToCart}
        className="bg-green-600 text-white px-4 py-2 rounded-md w-full hover:bg-green-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ShopCard;
