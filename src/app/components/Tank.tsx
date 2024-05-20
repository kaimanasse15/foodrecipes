import Image from "next/image";
import React from "react";

const Tank = () => {
    return (
        <div className="relative min-h-screen">
          <Image
            className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
            src="/Tankdesign.png"
            width={1000}
            height={600}
            alt="tank_bg"
          />
        </div>
      );
    };
export default Tank