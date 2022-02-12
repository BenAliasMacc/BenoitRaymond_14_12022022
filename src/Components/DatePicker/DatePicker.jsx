import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

/**
 * 
 * @param {id} string 
 * @returns 
 */
const Datepicker = ({ id }) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id={id} />
    );
  };

  export default DatePicker