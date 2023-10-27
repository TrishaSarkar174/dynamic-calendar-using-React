import CalendarHeader from "./CalendarHeader";
import DatesMatrix from "./DatesMatrix";
import Weeks from "./Weeks";
import Events from "./Events";
import React, {useState} from 'react';

const generateDates = () => {
    const calendar = [[]]

    const today = new Date()
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1)
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    
    let week = 0
    
    for(let i=0; i<startDate.getDay(); i++)
    {
        calendar[week].push(null)
    }
for(let i=1; i<=endDate.getDate(); i++)
{
    if(calendar[week].length ===7){
        week++
        calendar[week] = []
    }
    calendar[week].push(i)
}

while(calendar[week].length <7)
{
 calendar[week].push(null)
}

    return calendar
}
const Calendar = () => {
    const dates = generateDates()
    const [selectedDay, setSelectedDay] = useState(null)
    
    const daySelectHandler = (day) => {
        setSelectedDay(day)
    }
    
    return(
     <div className="bg-white p-6 rounded-xl shadow-lg w-96">
         <CalendarHeader />
         <Weeks />
         <DatesMatrix dates= {dates} onSelect={daySelectHandler} />
         <Events day={selectedDay} />
     </div>
    )
}
export default Calendar;