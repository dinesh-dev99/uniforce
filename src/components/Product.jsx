import { useRef } from "react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';


export default function Product() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const images = [
    "/src/assets/pdt.jpeg",
    "/src/assets/pdt2.jpeg",
    "/src/assets/pdt3.jpeg",
    "/src/assets/pdt4.jpeg",
    "/src/assets/pdt5.jpeg",
    "/src/assets/pdt6.jpeg",
  ];

  return (
    <div className="relative w-full max-w-md mx-auto my-6">
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth whitespace-nowrap flex snap-x snap-mandatory no-scrollbar"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-80 h-64 relative mx-auto"
          >
            <img
              src={img}
              alt={`Product ${i}`}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2  text-white p-2 rounded-full"
      >
        <ChevronDoubleLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 text-white p-2 rounded-full"
      >
        <ChevronDoubleRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
