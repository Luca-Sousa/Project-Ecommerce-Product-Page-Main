import Product1 from "./assets/images/image-product-1.jpg";
import Product2 from "./assets/images/image-product-2.jpg";
import Product3 from "./assets/images/image-product-3.jpg";
import Product4 from "./assets/images/image-product-4.jpg";
import ProductThumbnail1 from "./assets/images/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "./assets/images/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "./assets/images/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "./assets/images/image-product-4-thumbnail.jpg";
import { Image, MenuItem } from "./types";

export const productsImages: Image[] = [
  { src: Product1, alt: "Product Image 1" },
  { src: Product2, alt: "Product Image 2" },
  { src: Product3, alt: "Product Image 3" },
  { src: Product4, alt: "Product Image 4" },
];

export const productsThumbnailImages: Image[] = [
  { src: ProductThumbnail1, alt: "Product Thumbnail Image 1" },
  { src: ProductThumbnail2, alt: "Product Thumbnail Image 2" },
  { src: ProductThumbnail3, alt: "Product Thumbnail Image 3" },
  { src: ProductThumbnail4, alt: "Product Thumbnail Image 4" },
];

export const menuItens: MenuItem[] = [
  { label: "Collections" },
  { label: "Men" },
  { label: "Women" },
  { label: "About" },
  { label: "Contact" },
];
