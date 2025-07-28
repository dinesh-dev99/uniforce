import { useRef } from "react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';
import pdt from '/src/assets/pdt.jpeg';
import pdt1 from '/src/assets/pdt1.jpeg';
import pdt2 from '/src/assets/pdt2.jpeg';
import pdt3 from '/src/assets/pdt3.jpeg';
import pdt4 from '/src/assets/pdt4.jpeg';
import pdt5 from '/src/assets/pdt5.jpeg';
import pdt6 from '/src/assets/pdt6.jpeg';


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
    "pdt",
    "pdt1",
    "pdt2",
    "pdt3",
    "pdt4",
    "pdt5",
    "pdt6",
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
