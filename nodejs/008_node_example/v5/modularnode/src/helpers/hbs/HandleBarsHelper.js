var hbs = require('express-hbs')

hbs.registerHelper('isdefined', function (value) {
    return value !== undefined;
});

hbs.registerHelper('nvl2', function (value, valueIfNull='') {
    return (value !== undefined)? value.toString() : valueIfNull;
});

hbs.registerHelper('ifNull', function (value, valueIfNull='') {
    return (value !== undefined)? value.toString() : valueIfNull;
});

hbs.registerHelper('ifComboOptionSelected', function (value, valueOption='') {
    console.log('ifComboOptionSelected ',value,valueOption)
    return (value === valueOption) ? 'selected':''

});

module.exports = hbs