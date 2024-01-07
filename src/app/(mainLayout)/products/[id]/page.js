import React from "react";

const DynamicProduct = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h1>This is the dynamic Page {params.id} </h1>
    </div>
  );
};

export default DynamicProduct;
