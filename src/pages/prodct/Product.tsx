import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Button from "../../components/button/Button";
import Img from "../../components/img/Img";

function Product() {
  const params = useParams();
  return (
    <div>
      <Container>
        <div className="h-96mt-4 grid grid-cols-12 h-96">
          <div className="col-span-10 h1 text-right">
            <h1>عنوان محصول</h1>
            <div>
              <p>قیمت : 25</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                pariatur perferendis tempore? Saepe quisquam cumque autem
                explicabo repellendus eligendi libero!
              </p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-cyan-200">
            <Img />
            <Button className="mt-2 w-full !py-3" variant="primary">
              Add to cart 
            </Button>
          </div>

          <div></div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
