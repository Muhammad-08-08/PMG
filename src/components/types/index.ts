export type CategoriesType = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}[];

export type BannerType = {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
}[];

export type ProductsType = {
  items: {
    id: number;
    name: string;
    description: string;
    price: string;
    stock: number;
    categoryId: number;
    createdAt: string;
    imageUrl: string;
  }[];
  page: number;
  limit: number;
  totalItems: number;
};

export type CardPageProps = {
  items: ProductsType["items"];
};

export type ProductPageType = {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  categoryId: number;
  createdAt: string;
  imageUrl: string;
};
