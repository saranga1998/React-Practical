import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerA() {

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker 
      selected={selectedDate} 
      onChange={(date) => setSelectedDate(date)}
      dateFormat="yyyy/MM/dd"
      showYearDropdown
      scrollableMonthYearDropdown
       />
    </div>
  )
}

export default DatePickerA
