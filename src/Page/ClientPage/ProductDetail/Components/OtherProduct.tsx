import CardProduct from "../../../../Components/CardItem/CardProduct";

interface OtherProductProps {
  list: Array<any>;
}

const otherProduct:React.FC<OtherProductProps> = ({list}) => {
  return (
    <div className="mt-[4%]">
      <h1 className="text-2xl font-semibold">Tài sản liên quan</h1>
      <div className="flex flex-row justify-between items-center space-x-5 mt-5">
        {list.map((item, index) => (
          <CardProduct
            key={index + 0}
            img={item.img}
            name={item.name}
            location={item.location}
            time={item.time}
            price={item.price}
            typeButton={item.typeButton}
          />
        ))}
      </div>
    </div>
  )
}

export default otherProduct;