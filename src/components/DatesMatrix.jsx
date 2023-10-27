const DatesMatrix = ({dates, onSelect}) => {
  return(
  
    <div className="mb-6">
    {dates.map(date => (
         <div className="flex" key={date}>
           {date.map(day => (
              <div className="w-12 text-center cursor-pointer"  onClick={() => {onSelect(day)}} key={Math.random()}>{day}</div>  
             ))}
         </div>
    ))} 
    </div>
  )
}
export default DatesMatrix