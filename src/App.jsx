import { useState, useEffect } from "react";
import FooterComponent from "./components/footer/Footer";
import HeaderComponent from "./components/header/Header";
import './index.css';

function App() {
  const [orderCount, setOrderCount] = useState(0); // Shoe order count
  const [currentImage, setCurrentImage] = useState(1); // Main image
  const [currentModalImage, setCurrentModalImage] = useState(1); // Modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [cartDetails, setCartDetails] = useState({ price: 0, quantity: 0 }); // Cart details

  // Log cart details for debugging
  useEffect(() => {
    console.log("Cart updated:", cartDetails);
  }, [cartDetails]);

  return (
    <>
      <HeaderComponent cart={cartDetails} setCart={setCartDetails} />
      <main className="w-screen min-h-screen font-['Times_New_Roman'] mb-8">
        <div className="md:py-20 pt-0 flex max-w-[1500px] flex-col md:flex-row justify-center md:mx-auto">
          {/* Desktop Image Section */}
          <div className="hidden w-1/2 md:flex flex-col items-center gap-8">
            <img
              src={`/images/photo${currentImage}.jpg`}
              alt={`photo${currentImage}.jpg`}
              className="w-96 rounded-3xl cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
            <div className="flex w-96 justify-between">
              {[1, 2, 3, 4].map((imgNumber) => (
                <img
                  key={imgNumber}
                  src={`/images/ph${imgNumber}.jpg`}
                  alt={`photo${imgNumber}.jpg`}
                  className={`w-20 rounded-3xl hover:opacity-50 cursor-pointer ${
                    currentImage === imgNumber
                      ? "opacity-75 border-2 border-[#f97316]"
                      : ""
                  }`}
                  onClick={() => setCurrentImage(imgNumber)}
                />
              ))}
            </div>
          </div>

          {/* Mobile Image Carousel */}
          <div className="md:hidden w-3/4 min-w-[400px] mx-auto relative mb-8">
            <img
              src={`/images/photo${currentImage}.jpg`}
              alt={`photo${currentImage}.jpg`}
              className="w-full"
            />
            <div
              className="w-14 h-14 bg-white absolute left-0 ms-4 rounded-full flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2"
              onClick={() =>
                currentImage === 1
                  ? setCurrentImage(4)
                  : setCurrentImage((prev) => prev - 1)
              }
            >
              <img
                src="/images/previous.svg"
                alt="previous.svg"
                className="w-4"
              />
            </div>
            <div
              className="w-14 h-14 bg-white absolute right-0 top-1/2 -translate-y-1/2 me-4 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() =>
                currentImage === 4
                  ? setCurrentImage(1)
                  : setCurrentImage((prev) => prev + 1)
              }
            >
              <img src="/images/next.svg" alt="next.svg" className="w-4" />
            </div>
          </div>

          {/* Product and Cart Section */}
          <div className="flex flex-col px-4 lg:px-0 md:w-1/2 justify-center w-3/4 min-w-[400px] mx-auto">
            <h2 className="uppercase text-orange-500 font-bold font-extrabold text-xs tracking-[0.2em] mb-4">
              Sneaker Company
            </h2>
            <h1 className="mb-8 text-5xl lg:text-6xl font-extrabold text-[rgba(29, 32, 38, 1)]">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-[#1d3557] mb-6">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center gap-5 mb-4">
              <span className="text-[rgba(29, 32, 38, 1)] text-4xl font-extrabold">
                $125.00
              </span>
              <div className="text-center rounded-md w-14 bg-[#f97316] text-white text-base">
                50%
              </div>
            </div>
            <p className="text-[#1d3557] font-bold text-base line-through mb-10">
              $250.00
            </p>
            <div className="flex gap-4 md:flex-row flex-col">
              {/* Quantity Control */}
              <div className="bg-[#f1faee] flex items-center justify-between p-4 md:w-40 w-full mx-auto md:mx-0 rounded-lg">
                <button
                  onClick={() =>
                    orderCount > 0 && setOrderCount((prev) => prev - 1)
                  }
                >
                  <img
                    src="/images/minus.svg"
                    alt="minus.svg"
                    className="w-4"
                  />
                </button>
                <span className="text-[#03045e] font-bold text-lg">
                  {orderCount}
                </span>
                <button onClick={() => setOrderCount((prev) => prev + 1)}>
                  <img src="/images/plus.svg" alt="plus.svg" className="w-4" />
                </button>
              </div>
              {/* Add to Cart */}
              <button
                className="bg-[#f97316] md:w-60 w-full mx-auto md:mx-0 py-4 flex items-center gap-4 hover:bg-[#ff7b00] justify-center rounded-lg text-white font-bold"
                onClick={() => {
                  if (orderCount > 0) {
                    setCartDetails((prevCart) => ({
                      ...prevCart,
                      price: 125 * orderCount,
                      quantity: prevCart.quantity + orderCount,
                    }));
                    setOrderCount(0);
                  } else {
                    alert(
                      "Please select at least one item to add to the cart."
                    );
                  }
                }}
              >
                <img
                  src="/images/white.svg"
                  alt="white.svg"
                  className="w-6"
                />
                <span className="text-white">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="w-full h-screen left-0 fixed bg-opacity-80 bg-black flex flex-col gap-8 items-center justify-center z-50 top-0">
            <div className="w-96 relative">
              <img
                src="/images/close.svg"
                alt="close.svg"
                className="w-6 ms-auto cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
              <img
                src={`/images/photo${currentModalImage}.jpg`}
                alt={`photo${currentModalImage}`}
                className="w-96 rounded-3xl cursor-pointer"
              />
              <div className="flex w-96 justify-between mt-4">
                {[1, 2, 3, 4].map((imgNumber) => (
                  <img
                    key={imgNumber}
                    src={`/images/ph${imgNumber}.jpg`}
                    alt={`photo${imgNumber}`}
                    className={`w-20 rounded-3xl hover:opacity-50 cursor-pointer ${
                      currentModalImage === imgNumber
                        ? "opacity-75 border-2 border-[#f97316]"
                        : ""
                    }`}
                    onClick={() => setCurrentModalImage(imgNumber)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
