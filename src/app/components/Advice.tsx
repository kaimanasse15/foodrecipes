import React from "react";
import Dash from "./Dash";
import AdviceCard from "./AdviceCard";

const adviceData = [
  {
    img: "/Advice01.png",
    title: "Appetizer Recipes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/Advice02.png",
    title: "Main Dish Recipes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/Advice03.png",
    title: "Dessert ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/Advice04.png",
    title: "Snack",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Advice</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {adviceData.map((item, index) => (
          <AdviceCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
