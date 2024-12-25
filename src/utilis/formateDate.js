export const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    // Check if the date is valid
    // if (isNaN(date)) {
    //     return "Invalid Date";  // Handle invalid date gracefully
    // }

    return date.toLocaleDateString('en-Us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
