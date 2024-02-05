import { images } from "../constants/constant";
import MinIcon from "/icons/icon-minus.svg";
import PlusIcon from "/icons/icon-plus.svg";
import { useGContext } from "../context/globalContext";

function Main() {
  const {
    setProducts,
    img,
    handleChangeImg,
    count,
    setCount,
    handleShowPopup,
  } = useGContext();

  const offer: number = 50;
  const price: number = 250;
  let currentPrice: number = 0;

  const generateUniqueId = () => {
    const timestamp = new Date().getTime().toString(36);
    const randomString = Math.random().toString(36).substring(2, 8);
    return timestamp + randomString;
  };

  const handleCalcPrice = () => {
    if (offer) {
      currentPrice = (offer * (price * count)) / 100;
    }
    return currentPrice;
  };
  const handleSetInc = () => {
    setCount((count) => count + 1);
  };
  const handleSetDec = () => {
    if (count !== 0) setCount((count) => count - 1);
  };

  const handleAddToCart = () => {
    setProducts((pre) => [
      ...pre,
      {
        value: price,
        amount: count,
        total: handleCalcPrice(),
        info: img,
        id: generateUniqueId(),
      },
    ]);
    setCount(1);
  };
  return (
    <div className="grid grid-cols-2 my-16 items-center gap-24 mx-auto max-w-[70%]">
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex justify-center items-center"
          onClick={handleShowPopup}
        >
          <img className="rounded-xl shadow-sm" src={img.Opath} alt={img.alt} />
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-8 mt-8">
            {images.map((item) => (
              <li
                onClick={() => handleChangeImg(item)}
                key={item.alt}
                className="cursor-pointer"
              >
                <img
                  src={item.Tpath}
                  alt={item.alt}
                  className={`${
                    img.alt === item.alt
                      ? "border-[3px]  border-primaryColorOrange"
                      : ""
                  } rounded-xl shadow-sm`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <div>
          <h2 className="text-primaryColorOrange text-lg font-[500] mb-4">
            Sneaker Company
          </h2>
          <h1 className="font-bold text-4xl text-darkBlue">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mt-8 text-darkGrayishBlue text-[14px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="mt-8">
          <div>
            <span className="text-darkBlue font-bold text-lg mr-2">
              ${handleCalcPrice()}
            </span>{" "}
            <span className="px-2 py-1 bg-primaryColorPaleOrange rounded-lg font-bold text-primaryColorOrange text-sm ">
              {offer}%
            </span>
          </div>
          <span className="text-slate-500 text-sm line-through">
            ${price.toFixed(2)}
          </span>
          <div className="flex mt-8 w-full justify-between items-center">
            <div className="flex bg-slate-100 justify-between items-center gap-8 px-4 py-2 rounded-lg">
              <button onClick={handleSetDec}>
                <img src={MinIcon} alt="min" />
              </button>
              <p>{count}</p>
              <button onClick={handleSetInc}>
                <img src={PlusIcon} alt="plus" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex justify-center items-center text-white bg-primaryColorOrange px-16 py-2 rounded-lg"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
