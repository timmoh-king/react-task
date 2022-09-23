import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import { ContactUs } from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Placards from "./components/Placards";

const Homepage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div id="home" className="mt-[50px]">
        <div className="container mt-[30px] flex justify-between items-center mx-auto">
          <div>
            <h1 className="text-4xl text-font-[36px] text-[#0083ce]">
              Don't Know Where To Start <br />
              <span className="text-green-600">We've Got You Covered</span>
            </h1>
            <p className="block py-2 pr-4 pl-3 mt-[50px] mb-[50px] text-gray-700 text-md  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum!
            </p>
            <Button onClick={()=>navigate("/signup")} label="Sign Up" />
          </div>
          <img
            className="rounded-[5px] max-h-[500px] max-w-[656px] ml-4"
            src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/5ffca6e3e0d8ad9231cc2af6_Portfolio-course---final.png"
            alt="cover image"
          />
        </div>
      </div>
      <div className=" mt-[100px]">
        <div className="container justify-between items-center mx-auto">
          <p className="text-4xl text-font-bold text-center">
            Customizable and truly unique
          </p>
          <p className="block py-2 pr-4 mt-10 pl-3 text-gray-700 text-xl text-center md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            How can I create my portfolio freely and unique? Your online
            portfolio website should reflect your creativity and originality.
            Rather than being limited to a standard theme, Portfoliobox allows
            you to use a different style for every single page. This
            unparalleled freedom in design options is the reason why over one
            million unique websites have been created on this platform.
          </p>
        </div>
        <div id="about" className="mt-[100px]">
          <div className="container mt-[40px] flex justify-between items-center mx-auto">
            <Placards
              alt="potrait 1"
              src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
            <Placards
              alt="potrait 2"
              src="https://assets.teenvogue.com/photos/5c3fb55c9eeaf112b818b7f9/master/w_1600%2Cc_limit/IMG_3211.JPG"
            />
            <Placards
              alt="potrait 3"
              src="https://assets.teenvogue.com/photos/5c3fb58b9f26617015141087/master/w_1600%2Cc_limit/IMG_3209.JPG"
            />
            <Placards
              alt="potrait 3"
              src="https://i.pinimg.com/originals/42/85/6c/42856c1dbb56d288ae634b84310df488.jpg"
            />
          </div>
        </div>
        <div className="bg-gray-100 mt-[50px] mb-[50px] pt-10 pb-10">
        <p className="text-2xl text-green-600 text-center mt-3 mb-5">Subcribe to get the latest news</p>
          <div className="container flex justify-between items-center mx-auto">
            <div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1126px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Enter your email to get the latest news"
              />
            </div>
            <div>
              <Button label="Subscribe" />
            </div>
          </div>
        </div>
        <div id="services">
          <div className="container mt-[50px] justify-between items-center mx-auto">
            <p className="text-5xl text-font-bold text-start">
              Customizable and truly unique
            </p>
            <p className="mt-8 text-3xl text-font-bold text-start">
              Well printed and truly unique
            </p>
            <p className="block py-2 pr-4 mt-10 pl-3 text-gray-700 text-xl text-start md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              How can I create my portfolio freely and unique? Your online
              portfolio website should reflect your creativity and originality.
              Rather than being limited to a standard theme, Portfoliobox allows
              you to use a different style for every single page. This
              unparalleled freedom in design options is the reason why over one
              million unique websites have been created on this platform.
            </p>
          </div>
        </div>
        <div className="mt-[100px]">
          <div className="container mt-[40px] flex justify-between items-center mx-auto">
            <Placards
              alt="potrait 1"
              src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
            <Placards
              alt="potrait 2"
              src="https://assets.teenvogue.com/photos/5c3fb55c9eeaf112b818b7f9/master/w_1600%2Cc_limit/IMG_3211.JPG"
            />
            <Placards
              alt="potrait 3"
              src="https://i.pinimg.com/originals/42/85/6c/42856c1dbb56d288ae634b84310df488.jpg"
            />
            <Placards
              alt="potrait 3"
              src="https://assets.teenvogue.com/photos/5c3fb58b9f26617015141087/master/w_1600%2Cc_limit/IMG_3209.JPG"
            />
          </div>
        </div>
        <div id="testimonial">
          <div className="container mt-[40px] flex justify-between items-center mx-auto">
            <Placards
              alt="potrait 1"
              src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
            <Placards
              alt="potrait 2"
              src="https://assets.teenvogue.com/photos/5c3fb55c9eeaf112b818b7f9/master/w_1600%2Cc_limit/IMG_3211.JPG"
            />
            <Placards
              alt="potrait 3"
              src="https://i.pinimg.com/originals/42/85/6c/42856c1dbb56d288ae634b84310df488.jpg"
            />
            <Placards
              alt="potrait 3"
              src="https://assets.teenvogue.com/photos/5c3fb58b9f26617015141087/master/w_1600%2Cc_limit/IMG_3209.JPG"
            />
          </div>
        </div>
        <div className="bg-gray-100 mt-[100px] pt-5 pb-5">
          <div className="container flex justify-between items-center mx-auto">
            <div>
              <p className="text-2xl text-font-semibold text-[#0083ce]">
                Want to join us?
              </p>
              <p className="text-md text-gray-700 pt-1">
                The quick brown fox jumped over the lazy fox
              </p>
            </div>
            <div className="mb-3">
              <Button onClick={()=>navigate("/signup")} label="Sign Up" />
            </div>
          </div>
        </div>
        <div>
          <ContactUs />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
