import React from "react";

const Footer = () => {
  const ourServices = [
    "Playable Ads",
    "Awareness Campaign",
    "Lead Generation Campaign",
    "Campaign (Sale)",
    "Instagram games (swipe up)",
    "Gorilla Campaigns",
    "Instagram filters",
    "AR / VR services",
  ];
  return (
    <footer>
      <div className="bg-gray-900 text-white px-16 pt-16 pb-6 flex justify-around gap-1 ">
        <div className="flex flex-col w-1/3 border-r-2 pr-6">
          <h2 className="text-4xl mb-4 font-bold">About us</h2>
          <p className="text-2xl text-left leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            saepe molestiae cum dolores vitae sint, obcaecati suscipit hic autem
            nemo ratione vero ex minus? Ipsum explicabo maxime rerum hic error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            saepe molestiae cum dolores vitae sint, obcaecati suscipit hic autem
            nemo ratione vero ex minus? Ipsum explicabo maxime rerum hic error
          </p>
        </div>

        <div className="flex flex-col w-1/3 border-r-2 pr-6 pl-6">
          <h2 className="text-4xl mb-4 font-bold">Our services</h2>
          {ourServices.map((item, index) => (
            <li className="text-2xl text-left list-inside mb-2" key={index}>
              {item}
            </li>
          ))}
        </div>

        <form className="flex flex-col w-1/3 pl-6">
          <h2 className="text-4xl mb-4 font-bold">Email us</h2>
          <label htmlFor="name" className="text-xl mb-3">
            Your name:
          </label>
          <input
            id="name"
            type="text"
            className="text-black px-6 py-2 outline-none focus:outline-2 focus:outline-amber-400 border-amber-200 mb-4"
          />

          <label htmlFor="name" className="text-xl mb-3">
            Your email:
          </label>
          <input
            id="name"
            type="email"
            className="text-black px-6 py-2 outline-none focus:outline-2 focus:outline-amber-400 border-amber-200 mb-4"
          />

          <label htmlFor="name" className="text-xl mb-3">
            Your comment:
          </label>
          <textarea
            rows={4}
            id="name"
            type="text"
            className="text-black px-6 py-2 outline-none focus:outline-2 focus:outline-amber-400 border-amber-200 mb-4"
          />
          <button className="mt-1 p-2 font-bold text-2xl bg-primary hover:bg-amber-600 duration-300">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center  bg-gray-900 text-gray-300 ">
        <p className="w-11/12 border-t-2 p-2 flex justify-center">
          © 2020 Career Karma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
