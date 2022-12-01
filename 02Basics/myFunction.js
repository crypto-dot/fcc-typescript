// Parameters are implicitly assigned the data type any
// return variables are also implicitly assigned the data type any
function addTwo(num) {
    return num + 2;
}
//default parameters can be set after specifying the data type
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
