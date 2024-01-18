const formattedDate = (dateString, orderBy) => {
    const dateObject = new Date(dateString);

    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    let date = '';

    switch(orderBy) {
        case 'day':
            date = `${day}-${month}-${year}`; 
            break;
        case 'month':
            date = `${month}-${day}-${year}`;
            break;
        default:
            date = `${year}-${month}-${day}`;
    }

    return date;
}

module.exports = {
    formattedDate
}