import { useEffect, useState } from "react";

const CurrentTime = () => {
    const [time,setTime]=useState<Date>(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000)
    },[])
	return (
		<div className="flex flex-col ">
			<p className="text-white text-2xl font-medium">{time.getHours()>9?time.getHours():("0"+time.getHours())}:
                {time.getMinutes()>9?time.getMinutes():("0"+time.getMinutes())}:
                {time.getSeconds()>9?time.getSeconds():("0"+time.getSeconds())}</p>
			<p className="text-white text-sm">Thứ Ba, {time.getDate()}/{time.getMonth()+1}/{time.getFullYear()}</p>
		</div>
	);
};

export default CurrentTime;
