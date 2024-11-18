import Button from "../button/Button";
import Img from "../img/Img";

function CartItem() {
  return (
    <div className="mt-4 border-b pb-4">
      <div>CartItem</div>
      <Img className="rounded w-28" />

      <div className="mr-4">
        <h3 className="">عمنوان محصول</h3>
        <div className="mt-2">
          <Button variant="danger" className="mr-2">
            remove
          </Button>

          <Button variant="primary">+</Button>
          <span className="mx-2">2</span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem