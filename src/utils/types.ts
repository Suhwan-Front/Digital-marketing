export interface Image {
  image: string;
}

export interface Product {
  number: number;
  price: number;
  quantity: number;
  detail: string;
}

export interface SalesPost {
  result: string;
  postWriter: string;
  postHitCount: number;
  salesPostNumber: number;
  postLike: number;
  products: Product[];
  postContents: string;
  mainImage: string;
  storeLocation: string;
  descImages: Image[];
  postDate: string;
  postTitle: string;
  category: string;
}

export interface ErrorResponse {
  result: string;
}