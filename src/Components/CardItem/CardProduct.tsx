import { IconLocation, IconPlus } from "../../Common/Icon/Icon";
import Button from "../Button/Button";

interface CardProductProps {
  img: string;
  name: string;
  location: string;
  time: string;
  price: string;
  typeButton: 1 | 2; //1: add , 2: add list
}

const cardProduct: React.FC<CardProductProps> = ({ img, name, location, time, price, typeButton }) => {
  const chooseTypeButton = () => {
    switch (typeButton) {
      case 1:
        return (
          <Button
            textColor="white"
            bg_color="#FF4949"
            size="custom"
            onClick={() => alert('click')}
            children={<p>Add</p>}
          />
        );
      case 2:
        return (
          <Button
            textColor="white"
            bg_color="#150A55"
            size="custom"
            leftIcon={
              <IconPlus width="1.25rem" height="1.25rem" />
            }
            onClick={() => alert('click')}
            children={'Add list'}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[300px] flex flex-col border space-y-2 pb-8">
      <img src={img} alt={name} />
      <p className="mx-2">{name}</p>
      {typeButton === 2 && <p className="mx-2 text-[20px]">{price}</p>}
      <div className="flex flex-row space-x-3 mx-2">
        <IconLocation width="1.25rem" height="1.25rem" />
        <p>{location}</p>
      </div>
      <p className={typeButton === 1 ? `mr-2 ml-auto` : `mr-auto ml-2`}>{time}</p>
      <div className="ml-auto mr-2">
        {chooseTypeButton()}
      </div>
    </div>
  );
};

export default cardProduct;