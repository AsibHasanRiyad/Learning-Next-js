import Image from "next/image";
import React from "react";

const Album = () => {
  return (
    <div className=" px-6 md:px-8 lg:px-40">
      <h1>Using image component from next js</h1>
      <Image
        width={1500}
        height={500}
        src={"https://i.ibb.co/FHy1DgY/Firefly-20240105224119.jpg"}
        alt="bg-image"
      />
    </div>
  );
};

export default Album;
