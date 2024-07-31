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