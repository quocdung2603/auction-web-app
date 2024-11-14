import Banner from "./Components/Banner";
import HomeCarousel from "./Components/HomeCarousel";
import Partner from "./Components/Partner";
import NewBlog from "./Components/NewBlog";

interface ProductItem {
  img: string;
  location: string;
  name: string;
  typeButton: 1 | 2;
  time: string;
  price: string;
}

const homePageUser = () => {

  const listProduct: ProductItem[] = [
    {
      img: "https://vinatools.com/wp-content/uploads/2019/10/Bua-cao-su-O55-O90mm-can-go-1620.jpg",
      location: "Hà Nội",
      name: "Bánh mỳ pate",
      typeButton: 1,
      time: "10/10/2020",
      price: "15.000đ"
    },
    {
      img: "https://vinatools.com/wp-content/uploads/2019/10/Bua-cao-su-O55-O90mm-can-go-1620.jpg",
      location: "Hà Nội",
      name: "Bánh mỳ pate",
      typeButton: 1,
      time: "10/10/2020",
      price: "15.000đ"
    },
    {
      img: "https://vinatools.com/wp-content/uploads/2019/10/Bua-cao-su-O55-O90mm-can-go-1620.jpg",
      location: "Hà Nội",
      name: "Bánh mỳ pate",
      typeButton: 1,
      time: "10/10/2020",
      price: "15.000đ"
    },
    {
      img: "https://vinatools.com/wp-content/uploads/2019/10/Bua-cao-su-O55-O90mm-can-go-1620.jpg",
      location: "Hà Nội",
      name: "Bánh mỳ pate",
      typeButton: 1,
      time: "10/10/2020",
      price: "15.000đ"
    },
    {
      img: "https://vinatools.com/wp-content/uploads/2019/10/Bua-cao-su-O55-O90mm-can-go-1620.jpg",
      location: "Hà Nội",
      name: "Bánh mỳ pate",
      typeButton: 1,
      time: "10/10/2020",
      price: "15.000đ"
    },
  ]

  return (
    <div>
      <Banner />
      <HomeCarousel title="Tài sản sắp được đấu giá" data={listProduct} />
      <HomeCarousel title="Tài sản đã đấu giá" data={listProduct} />
      <Partner />
      <NewBlog />
    </div>
  );
};

export default homePageUser;
