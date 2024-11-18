import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/container"

function Cart() {
  return (
    <div>
      <Container>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="shadow mb-4 p-4 bg-gray-100">
          <p>قیمت کل : 20000</p>
          <p>قیمت تخفیف : 5000</p>
          <p>قیمت نهایی : 15000</p>
        <Button variant="success" className="mt-4">ثبت سفارش</Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart