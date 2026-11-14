import { useState } from "react"

const Calender = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const Months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const Days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysAround = (current: Date) => {
    const days: Date[] = [];
    for (let i = -3; i <= 3; i++) {
      const d = new Date(current);
      d.setDate(current.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const visibleDays = getDaysAround(currentDate);

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate()  + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="h-full w-[40%] flex flex-col justify-between px-4 py-4 font-[Inter] font-medium bg-[#C3E0C5] rounded-2xl text-[#013237]">
          
          <div className="flex justify-between items-center">
            <h1 className="text-[32px] font-semibold">{Months[currentDate.getMonth()]}</h1>
            <h1 className="text-[32px] font-semibold">{Days[currentDate.getDay()]}</h1>
          </div>

          <div className="flex text-lg items-center justify-between px-2">
            {visibleDays.map((dateObj, i) => {
             
              
              const dayNum = dateObj.getDate();
              const isSelected = dayNum === currentDate.getDate();

              return (
                <span
                  key={i}
                  onClick={() => setCurrentDate(dateObj)} 
                  className={`cursor-pointer transition-all px-2 py-1 rounded-lg ${
                    isSelected
                      ? "bg-[#779B7F] text-[#EAF7F8] text-[22px] font-bold shadow-sm"
                      : "hover:bg-[#b0d4b3] text-opacity-80"
                  }`}
                >
                  {dayNum}
                </span>
              );
            })}
          </div>

          <div className="flex items-center justify-around">
            <i 
              onClick={handlePrev}
              className="text-3xl ri-arrow-left-s-line cursor-pointer hover:scale-110 transition-all"
            ></i>
            <i 
              onClick={handleNext}
              className="text-3xl ri-arrow-right-s-line cursor-pointer hover:scale-110 transition-all"
            ></i>
          </div>

    </div>
  )
}

export default Calender;