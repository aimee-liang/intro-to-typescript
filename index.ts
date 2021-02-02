console.log("hello world")

let newArray : any = [1, 2, 3]

newArray = "me"

// strong type classes
interface Person {
    first: string,
    last: string,
    age: number,
    [key: string]: any
}

const person1: Person = {
    first: "Beyonce",
    last: "Knowles-Carter",
    age: 39,
    profession: "Singer-Actress-Business Mogul"
}

//strong type functions

function multiply(x: number, y: number){
    return (x * y)
}

// strong type arrays
const arr: string[] = []

arr.push("Apples")
arr.push("Bananas")
// arr.push(12) /* this will not work because it is not a string */