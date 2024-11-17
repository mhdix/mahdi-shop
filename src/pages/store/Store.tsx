import React from 'react'
import ProductItem from "../../components/productItem/ProductItem";
import Container from '../../components/container/container';

const Store = () => {
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات</h1>

        <div className="grid grid-cols-4 gap-4 mt-4 ">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </div>
  );
};

export default Store