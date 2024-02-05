import { images } from "../constants/constant";
import { useGContext } from "../context/globalContext";
import CloseIcon from "/icons/icon-close.svg";
function Popup() {
  const { img, handleChangeImg, showPopup, handleShowPopup } = useGContext();
  if (!showPopup) {
    return null;
  }
  if (showPopup)
    return (
      <div className="fixed top-0 overflow-y-auto bg-black w-full h-screen flex flex-col justify-center items-center z-[90] bg-opacity-70">
        <div
          className="w-[30%] mb-2 flex justify-end cursor-pointer"
          onClick={handleShowPopup}
        >
          <img src={CloseIcon} alt="close" width={18} />
        </div>
        <div className="flex justify-center items-center w-[30%]">
          <img className="rounded-xl shadow-sm" src={img.Opath} alt={img.alt} />
        </div>
        <div className="flex justify-center items-center w-[30%]">
          <ul className="flex gap-8 mt-8 justify-center items-center">
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
    );
}

export default Popup;
