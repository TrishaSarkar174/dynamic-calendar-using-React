const Events = ({day}) => {

    const eventsList = {
        16: 'Reunion',
        20: 'New Semester Starting'
    }
    return(
        <p>{eventsList[day]}</p>
    )
}
export default Events