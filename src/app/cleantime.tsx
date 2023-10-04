import React, { useEffect, useState } from "react";

export const CleanTime = () => {
  const [dateEntered, setDateEntered] = useState("");
   const [cleanTime, setCleanTime] = useState({
     days: 0,
     weeks: 0,
     months: 0,
     years: 0,
   });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDateEntered(newDate);
    console.log(newDate);
  };

  useEffect(() => {
    if (dateEntered) {
      const currentDate = new Date();
      const enteredDate = new Date(dateEntered);

      const timeDiff = currentDate.getTime() - enteredDate.getTime();
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30.44); // Average days in a month
      const years = Math.floor(days / 365);

      setCleanTime({ days, weeks, months, years });
    }
  }, [dateEntered]);

  return (
    <div className="flex justify-center items-center h-screen -mt-24">
      <div className="bg-gray-800 bg-opacity-80 px-16 py-28 rounded-lg shadow-lg">
        <div className="-mt-20">
          <p className="text-white text-xl">Enter your clean date:</p>
          <input
            type="date"
            onChange={handleDateChange}
            value={dateEntered}
            className="w-full py-2 px-4 mt-2 bg-gray-200 text-gray-800 rounded-lg"
          />
        </div>
        {dateEntered !== "" && (
          <div className="text-white text-xl mt-16 w-64">
            You have been clean for{" "}
            {cleanTime.years > 0 && `${cleanTime.years} years, `}
            {cleanTime.months > 0 && `${cleanTime.months} months, `}
            {cleanTime.weeks > 0 && `${cleanTime.weeks} weeks, `}
            {cleanTime.days} days!
          </div>
        )}
      </div>
    </div>
  );
};
