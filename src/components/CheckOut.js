import React, { useState } from 'react';

// datepicker
import DatePicker from "react-datepicker";

// Datepicker Css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css"

// icons
import { BsCalendar } from 'react-icons/bs';

const CheckOut = () => {
   const [endDate, setEndDate] = useState(false);

   return (
     <div className="w-full h-full bg-white relative flex justify-between">
       {/* icon */}
       <div className="w-full h-full flex items-center justify-between px-8 absolute flex-row-reverse">
         <div>
           <BsCalendar className="text-accent text-base" />
         </div>
       </div>
       <DatePicker
         className="w-full h-full"
         selected={endDate}
         placeholderText="Check Out"
         onChange={(date) => setEndDate(date)}
       />
     </div>
   );
};

export default CheckOut;
