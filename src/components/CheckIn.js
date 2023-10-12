import React, { useState } from "react";

// datepicker
import DatePicker from "react-datepicker";
// Datepicker Css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

  return (
    <div className="w-full h-full bg-white relative flex justify-between">
      {/* icon */}
      <div className="w-full h-full flex items-center justify-between px-8 absolute flex-row-reverse">
        <div>
          <BsCalendar className="text-accent text-base w-full" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
