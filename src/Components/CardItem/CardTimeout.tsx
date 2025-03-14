import React, { useEffect, useState } from "react";
interface CardTimeoutProps{
    timeout: string
}
const CardTimeout:React.FC<CardTimeoutProps> = ({timeout}) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const calculateTimeLeft = () => {
    const endTime = new Date(timeout).getTime();
    const now = Date.now();
    const difference = endTime - now;

    if (difference <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }

    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

    setDays(daysLeft);
    setHours(hoursLeft);
    setMinutes(minutesLeft);
    setSeconds(secondsLeft);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [timeout]);
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="py-4 px-6">
        <h2 className="text-4xl font-bold text-gray-800">Kết thúc</h2>
        <p className="mt-2 text-lg text-gray-600">
          Thời gian còn lại đến khi phiên đấu giá kết thúc.
        </p>
      </div>
      <div className="py-4 px-6">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <div className="border rounded-lg px-4 py-2">
            <div className="font-bold font-mono text-2xl text-gray-800">
              {days}
            </div>
            <p className="text-sm text-gray-600">Ngày</p>
          </div>
          <div className="border rounded-lg px-4 py-2">
            <div className="font-bold font-mono text-2xl text-gray-800">
              {hours}
            </div>
            <p className="text-sm text-gray-600">Giờ</p>
          </div>
          <div className="border rounded-lg px-4 py-2">
            <div className="font-bold font-mono text-2xl text-gray-800">
              {minutes}
            </div>
            <p className="text-sm text-gray-600">Phút</p>
          </div>
          <div className="border rounded-lg px-4 py-2">
            <div className="font-bold font-mono text-2xl text-gray-800">
              {seconds}
            </div>
            <p className="text-sm text-gray-600">Giây</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTimeout;
