import React from "react";
import Img from "../img/Img";

function ProductItem() {
  return (
    <div className="shadow border rounded pb-4">
      <Img />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          dolorem aut vel rerum consequatur accusamus magni fugiat maiores
          officia! Blanditiis nam debitis velit libero, rerum at vitae
          consectetur quidem earum?
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
