import { type ReactNode } from "react";
import Cart from "./Cart";
import { useGContext } from "../context/globalContext";

type PropType = {
  children: ReactNode;
};

function Container({ children }: PropType) {
  const { isOpen } = useGContext();
  return (
    <div className="mx-auto max-w-[1200px] font-kum h-[100vh] relative">
      {children}
      {isOpen && <Cart />}
    </div>
  );
}

export default Container;
