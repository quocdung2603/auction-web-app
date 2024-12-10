import { Link } from "react-router-dom";

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLElement> {
	className?: string;
	type?: "button" | "submit";
	link?: string;
}
const ButtonPrimary = ({
	className,
	type,
	children,
	link = "/product-detail",
}: ButtonProp) => {
	return (
		<button
			className={` ${className} inline-block relative cursor-pointer border-none bg-black font-bold text-white rounded z-0 transition-all duration-500 
    after:absolute after:content-[''] after:top-0 after:left-0 after:bg-red after:z-1 after:w-full
    after:h-full after:scale-100 after:rounded after:origin-center after:transition-transform after:duration-500
    before:absolute before:content-[''] before:top-0 before:left-0 before:bg-red before:z-1 before:w-full
    before:h-full before:rounded-[200px] before:origin-center before:transition-transform before:duration-500
    hover:after:scale-x-0 hover:before:scale-y-0`}
		>
			<Link to={link}>
				<span className="relative z-20 font-semibold">{children}</span>
			</Link>
		</button>
	);
};

export default ButtonPrimary;
