import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import RecipeCard from "./RecipeCard";
import Link from "next/link";

const recipeData = [
  {
    img: "/che2.png",
    title: "Sweet Red Bean Soup",
    desc: "2x tuna sahimi, 1x noodles",
  },
  {
    img: "/miquang1.png",
    title: "Mi Quang",
    desc: "2x tuna sahimi, 1x noodles",
  },
  {
    img: "/TomYum.png",
    title: "Tom Yum Vietnames Style Hot Pot",
    desc: "2x tuna sahimi, 1x noodles",
  },
  {
    img: "/Pho1.png",
    title: "Pho",
    desc: "2x tuna sahimi, 1x noodles",
  },
  {
    img: "/bunbohue.png",
    title: "Bun Bo Hue",
    desc: "2x tuna sahimi, 1x noodles",
  },
  {
    img: "/HuTieu.png",
    title: "Hu Tieu",
    desc: "2x tuna sahimi, 1x noodles",
  },
  {
    img: "/banhmi.png",
    title: "Banh Mi",
    desc: "2x tuna sahimi, 1x noodles",
  },
  {
    img: "/SpringRoll.png",
    title: "Fresh Spring Roll",
    desc: "2x tuna sahimi, 1x noodles",
  },
];

const Recipe = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Recipes</span>
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

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li>Sweet Soup</li>
        <li>Soup</li>
        <li>Steam</li>
        <li>Grill</li>
        <li>Drinks</li>
        <li><Link href="hotpot">Hot Pot</Link></li>     
         </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            src="/che1.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {recipeData.map((item, index) => (
            <RecipeCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc} 
                            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;