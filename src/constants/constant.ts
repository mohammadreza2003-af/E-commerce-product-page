type link = {
  label: string;
  path: string;
};
export type image = {
  Opath: string;
  Tpath: string;
  alt: string;
};
export const links: link[] = [
  {
    label: "Collections",
    path: "#",
  },
  {
    label: "Men",
    path: "#",
  },
  {
    label: "Women",
    path: "#",
  },
  {
    label: "About",
    path: "#",
  },
  {
    label: "Contact",
    path: "#",
  },
];

export const images: image[] = [
  {
    Opath: "/image-product-1.jpg",
    Tpath: "/image-product-1-thumbnail.jpg",
    alt: "Product-1",
  },
  {
    Opath: "/image-product-2.jpg",
    Tpath: "/image-product-2-thumbnail.jpg",
    alt: "Product-2",
  },
  {
    Opath: "/image-product-3.jpg",
    Tpath: "/image-product-3-thumbnail.jpg",
    alt: "Product-3",
  },
  {
    Opath: "/image-product-4.jpg",
    Tpath: "/image-product-4-thumbnail.jpg",
    alt: "Product-4",
  },
];
