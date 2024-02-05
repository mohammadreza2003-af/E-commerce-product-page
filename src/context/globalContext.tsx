import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { type image } from "../constants/constant";

type Product = {
  value: number;
  amount: number;
  total: number;
  info: image;
  id: string;
};

type ValueType = {
  numberOfProducts: number;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setImg: Dispatch<SetStateAction<image>>;
  setCount: Dispatch<SetStateAction<number>>;
  isOpen: boolean;
  img: image;
  count: number;
  handleChangeImg: (path: image) => void;
  handleShowPopup: () => void;
  showPopup: boolean;
};

const GlobalContext = createContext<ValueType | null>(null);

const initState = {
  Opath: "/image-product-1.jpg",
  Tpath: "/image-product-1-thumbnail.jpg",
  alt: "Product-1",
};

function Provide({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [img, setImg] = useState<image>(initState);
  const [count, setCount] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const numberOfProducts: number = products.length | 0;

  const handleChangeImg = (path: image) => {
    setImg(path);
  };
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };
  const values: ValueType = {
    numberOfProducts,
    setProducts,
    products,
    isOpen,
    setIsOpen,
    setImg,
    img,
    setCount,
    count,
    handleChangeImg,
    handleShowPopup,
    showPopup,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

function useGContext(): ValueType {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGContext must be used within a Provide component");
  }
  return context;
}

export { Provide, useGContext };
