import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const TrungThuMenu = () => {
  const [page, setPage] = useState(0);
  const bookRef = useRef();

  const onFlip = (e) => {
    setPage(e.data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-4">
      <div className="book-container w-full max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden p-4">
        <HTMLFlipBook
          width={400}
          height={400}
          size="stretch"
          minWidth={280}
          maxWidth={600}
          minHeight={280}
          maxHeight={600}
          maxShadowOpacity={0.5}
          className="w-full h-auto"
          showCover={true}
          onFlip={onFlip}
          ref={bookRef}
        >
          {/* Bìa trước */}
          <div className="page bg-white flex items-center justify-center">
            <img
              src={process.env.PUBLIC_URL + "/1.png"}
              alt="Bìa trước"
              className="cover-image w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Trang trong 1 */}
          <div className="page bg-white flex items-center justify-center">
            <img
              src={process.env.PUBLIC_URL + "/2.png"}
              alt="Trang trong 1"
              className="cover-image w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Trang trong 2 */}
          <div className="page bg-white flex items-center justify-center">
            <img
              src={process.env.PUBLIC_URL + "/3.png"}
              alt="Trang trong 2"
              className="cover-image w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Bìa sau */}
          <div className="page bg-white flex items-center justify-center">
            <img
              src={process.env.PUBLIC_URL + "/4.png"}
              alt="Bìa sau"
              className="cover-image w-full h-full object-cover rounded-lg"
            />
          </div>
        </HTMLFlipBook>
      </div>

      {/* Nhúng CSS trực tiếp */}
      <style>
        {`
          .book-container {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            overflow: hidden;
          }
          .page {
            border: 2px solid #f4e4bc;
          }
          .cover-image {
            border-radius: 10px;
          }
          @media (max-width: 640px) {
            .book-container {
              width: 90%;
              padding: 1rem;
            }
            .cover-image {
              object-fit: contain;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TrungThuMenu;