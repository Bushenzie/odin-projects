
const capitalize = function(str) {
    return str[0].toUpperCase() + str.slice(1,str.length).toLowerCase();
}

module.exports = capitalize;