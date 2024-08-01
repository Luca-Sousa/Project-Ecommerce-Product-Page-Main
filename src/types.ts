export interface Image {
  src: string;
  alt: string;
}

export interface MenuItem {
  label: string;
}

export interface NavPros {
  menuItens: MenuItem[];
  activeMenuItem: string;
  itemAdded: boolean;
  cartQuantity: number;
  activeModalCart: boolean;
  handleMenuItems: (page: string) => void;
  toggleModalCart: () => void;
  handleRemoveToCart: () => void;
}

export interface CartPros {
  itemAdded: boolean;
  cartQuantity: number;
  handleRemoveToCart: () => void;
}

export interface SlideImagesProps {
  selectedImage: Image;
  activeThumbnailImage: Image;
  handleOpenModalImages: () => void;
  handleThumbnailClick: (index: number) => void;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

export interface ModalImagensProps {
  currentSlideModal: number;
  setCurrentSlideModal: (index: number) => void;
  handlePrevSlideModal: () => void;
  handleNextSlideModal: () => void;
  handleCloseModalImages: () => void;
}

export interface QuantityItemsCartProps {
  quantity: number;
  handleMinusQuantity: () => void;
  handlePlusQuantity: () => void;
  handleAddToCart: () => void;
}
