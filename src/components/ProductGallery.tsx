import React, { useState } from 'react';
import { ZoomIn, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [isHoverZooming, setIsHoverZooming] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Fallback if images array is empty
  const galleryImages = images && images.length > 0 ? images : ['/images/hero-sneaker.jpg'];
  const currentImage = galleryImages[activeIndex] || galleryImages[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div
        className="relative aspect-square sm:aspect-[4/3] w-full bg-gradient-to-b from-[#F9F9F9] to-[#EEEEEE] rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center p-6 sm:p-10 cursor-crosshair group select-none"
        onMouseEnter={() => setIsHoverZooming(true)}
        onMouseLeave={() => setIsHoverZooming(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Main Display Image */}
        <img
          src={currentImage}
          alt={`${productName} view ${activeIndex + 1}`}
          className={`w-full h-full object-contain object-center transition-transform duration-200 ${
            isHoverZooming ? 'scale-150' : 'scale-100'
          }`}
          style={
            isHoverZooming
              ? {
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`
                }
              : undefined
          }
        />

        {/* Floating Zoom Action Badge */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
          <button
            onClick={() => setIsZoomModalOpen(true)}
            className="p-2.5 bg-white/90 backdrop-blur-md hover:bg-forest hover:text-white text-brand-black rounded-xl shadow-md transition-all border border-gray-200"
            title="Expand Fullscreen View"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Prev / Next Carousel Controls */}
        {galleryImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-forest hover:text-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-forest hover:text-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* View Indicator Pill */}
        <div className="absolute top-4 left-4 z-10 bg-white/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-gray-700 shadow-xs border border-gray-100">
          Angle {activeIndex + 1} of {galleryImages.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      {galleryImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {galleryImages.map((img, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-50 border-2 overflow-hidden shrink-0 transition-all p-1 flex items-center justify-center ${
                  isActive
                    ? 'border-forest ring-2 ring-forest/20 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Zoom Modal */}
      {isZoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <button
            onClick={() => setIsZoomModalOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
          >
            <img
              src={currentImage}
              alt={productName}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
