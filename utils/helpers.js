module.exports = {
    //formats date
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleDateString();
    },
};