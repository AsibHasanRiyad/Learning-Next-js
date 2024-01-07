import React from "react";

const DynamicArticle = ({ params, searchParams }) => {
  return (
    <div>
      <h1>THis is dynamic article {params.id} </h1>
      <h1>{searchParams?.name}</h1>
    </div>
  );
};

export default DynamicArticle;
