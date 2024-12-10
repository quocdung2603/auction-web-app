
type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  const products: Product[] = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
  ];
  
  export const fakeApi = (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products); // Trả về mảng dữ liệu sau 500ms
      }, 500);
    });
  };
  