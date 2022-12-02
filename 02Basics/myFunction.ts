
// Parameters are implicitly assigned the data type any
// return variables are also implicitly assigned the data type any


function addTwo(num: number): number {
    return num + 2;
}

//default parameters can be set after specifying the data type
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

const heros = ["Hero", "Thor", "Zeus"];
// const heros = [1,2,3]
//We can rely on typescript to switch context depending on the datatypes in the array

//We can and should specify what our map callback functions return
heros.map((hero): string => {
    return hero + ' is cool!';
});

function fail(msg: string): never {
    throw new Error(msg);
}

export { }