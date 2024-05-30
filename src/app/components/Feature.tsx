import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-8">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Food <span className="text-accent">Recipes</span>
      </h2>

      <p className="max-w-[700px] pt-10 text-gray-1000">
       Vietnamese cuisine is a vibrant and
       flavorful journey that delights the senses with its 
       fresh ingredients and harmonious balance of flavors. 
       Iconic dishes like pho, a savory noodle soup, and banh mi, 
       a deliciously stuffed baguette, showcase the perfect blend of 
       sweet, sour, salty, and umami tastes. The liberal use of herbs, 
       such as cilantro and basil, along with the zesty kick of lime and chili, 
       adds layers of complexity to each dish. Whether you're savoring the delicate 
       spring rolls or indulging in a hearty bowl of bun cha, Vietnamese food offers 
       a diverse and satisfying culinary experience.
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/Pho.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Pho</h2>
            <p className="text-gray-1000 text-[14px] xl:text-[16px]">
            Pho is a Vietnamese soup consisting of bone broth, rice noodles, 
            and thinly sliced meat (usually beef). It may also be served with bean sprouts,
             fresh herbs, limes, chiles, and other garnishes.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/MiQuang.png"
            width={100}
            height={400}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Mi Quang</h2>
            <p className="text-gray-1000 text-[14px] xl:text-[16px]">
            Mi quang is full of big flavors: nutty peanut oil, pungent cu nen, 
            a deeply concentrated chicken broth, spice from chili jam and fresh chilies, 
            and the cooling vegetal bite of banana blossom.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/BunBo.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Bun Bo Hue</h2>
            <p className="text-gray-1000 text-[14px] xl:text-[16px]">
            This classic dish is celebrated for its harmonious blend of spicy, 
            sour, sweet, salty, and umami tastes. The scent of lemongrass prominently 
            features. In comparison to dishes like phở and bún riêu, 
            its vermicelli noodles are thicker and cylindrical.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
