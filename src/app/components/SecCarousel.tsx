"use client";
import * as React from "react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

export default function SecCarousel() {
  const totalItems = 11; // 아이템의 총 개수
  const visibleItems = 5; // 화면에 보여줄 아이템 개수
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < totalItems - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-full relative">
      {/* Carousel Content */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / visibleItems) * 100}%)`,
          }}
        >
          {Array.from({ length: totalItems }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-2"

            >
              {/* 카드 스타일 적용 */}
              <Card
                style={{
                  width: "400px",
                  height: "500px",
                  aspectRatio: "400 / 500",
                }}
              >
                <CardContent className="p-0">
                  {/* 이미지 스타일 적용 */}
                  <img
                    src={`https://via.placeholder.com/400x500?text=Item+${index + 1}`}
                    alt={`Item ${index + 1}`}
                    className="rf-ccard-img-full"
                    style={{
                      display: "block",
                      height: "100%",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        disabled={currentIndex === 0}
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        disabled={currentIndex >= totalItems - visibleItems}
      >
        →
      </button>
    </div>
  );
}