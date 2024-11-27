interface ButtonProp extends React.ButtonHTMLAttributes<HTMLElement>{
  className?:string;
  type?:"button" |"submit";
}
const ButtonPrimary = ({className,type,children}:ButtonProp) => {
	return (
		<button
			className={` ${className} inline-block relative cursor-pointer border-none bg-black font-bold text-white rounded z-0 transition-all duration-500 
    after:absolute after:content-[''] after:top-0 after:left-0 after:bg-[rgb(208,89,89)] after:z-10 after:w-full
    after:h-full after:scale-100 after:rounded after:origin-center after:transition-transform after:duration-500
    before:absolute before:content-[''] before:top-0 before:left-0 before:bg-[rgb(208,89,89)] before:z-10 before:w-full
    before:h-full before:rounded-[200px] before:origin-center before:transition-transform before:duration-500
    hover:after:scale-x-0 hover:before:scale-y-0`}
		>
			<span className="relative z-20 font-semibold">{children}</span>
		</button>
	);
};

export default ButtonPrimary;
