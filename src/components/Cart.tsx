import { useGContext } from "../context/globalContext";
import DeleteIcon from "/icons/icon-delete.svg";
function Cart() {
  const { products, setProducts } = useGContext();

  const handleDelete = (id: string) => {
    setProducts((pre) => pre.filter((item) => item.id !== id));
  };
  return (
    <div className="w-[380px] shadow-lg p-4 rounded-md absolute bg-white top-20 right-0">
      <div>
        <h2 className="text-xl">Cart</h2>
        <div className="w-full h-[1px] mt-4 bg-slate-300" />
        {products.map((pro) => (
          <ul key={pro.info.alt}>
            <li className="flex gap-6 justify-center items-center my-4">
              <img
                src={pro.info.Tpath}
                width={64}
                height={64}
                alt={pro.info.alt}
                className="rounded-md"
              />
              <div className="flex flex-col">
                <p className="text-slate-500">Fall Limited Edition Sneakers</p>
                <div className="text-slate-500 flex gap-2">
                  <p>
                    ${pro.value.toFixed(2)} x {pro.amount}
                  </p>
                  <p className="text-black">${pro.total.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(pro.id)}>
                <img src={DeleteIcon} alt="delete icon" />
              </button>
            </li>
          </ul>
        ))}
        {products.length !== 0 && (
          <button className="flex mt-2 mx-auto justify-center items-center text-white bg-primaryColorOrange px-16 py-2 rounded-lg">
            Checkout
          </button>
        )}
        {products.length === 0 && (
          <p className="mt-2 text-slate-500">You have not product</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
