import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-purple-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-fit object-center h-full w-full"
                  src="https://m.media-amazon.com/images/I/514LYTdn4yL._UX569_.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                T-Shirts
              </h2>
              <p className="text-base leading-relaxed mt-2">
                We offer a wide range of tshirts for all interests, including
                coding tshirts, anime tshirts, and casual tshirts for everyday
                wear. All of our tshirts are made with high-quality materials
                and are designed to be comfortable and durable. Shop now and
                find the perfect tshirt for you!.
              </p>
              <Link
                to="/Tshirt"
                className="text-purple-500 cursor-pointer inline-flex items-center mt-3">
                View Our Collection
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://image.spreadshirtmedia.com/image-server/v1/products/T20A2PA4162PT17X75Y1D1042996019W17822H27760/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2/bigfoot-american-flag-svg-shirt.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Sweatshirts
              </h2>
              <p className="text-base leading-relaxed mt-2">
                {" "}
                Our sweatshirts are perfect for every occasion, whether you're
                looking for a casual everyday sweatshirt or something to wear to
                the gym. We have a variety of styles to choose from, including
                coding sweatshirts, anime sweatshirts, and casual sweatshirts
                for everyday wear.
              </p>
              <Link
                to="/Mugs"
                className="text-purple-500 cursor-pointer inline-flex items-center mt-3">
                View Our Collection
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://m.media-amazon.com/images/I/41MQico4+vL._SX522_.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Caps
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Boldfit Head Caps for Men Unisex Mens Caps with Adjustable Strap
                in Summer for Men Caps Men for All Sports Cap for Girls caps Gym
                Caps for Men Women Cap Sports Caps for Men{" "}
              </p>
              <Link
                to="/Caps"
                className="text-purple-500 cursor-pointer inline-flex items-center mt-3">
                View Our Collection
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
