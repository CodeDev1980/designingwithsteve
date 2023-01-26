const basicAutocomplete = document.querySelector('#customContact');
const data = ['Individual photo session', 'Pricing', 'Photo consultations', 'Portfolio', 'Other question'];
const dataFilter = (value) => {
    return data.filter((item) => {
        return item.toLowerCase().startsWith(value.toLowerCase());
    });
};

new mdb.Autocomplete(basicAutocomplete, {
    filter: dataFilter
});