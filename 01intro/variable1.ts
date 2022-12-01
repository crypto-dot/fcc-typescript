// If typescript can not implicitly infer the datatype it will set
// it as a any (NOT good) best to explicitly state the datatype

let hero: string;

//This function can return any data type!
function getHero() {
    return 'Thor';
}
hero = getHero();