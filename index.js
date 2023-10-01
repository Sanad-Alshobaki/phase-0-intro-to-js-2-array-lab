// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName) {
    cats.push(catName)
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(catName) {
    const newArr = []
    for (let i = 0; i < cats.length; i++) {
        newArr.push(cats[i])
    }
    newArr.push(catName)
    return newArr
}

function prependCat(catName) {
    const newArr = []
    for (let i = 0; i < cats.length; i++) {
        newArr.push(cats[i])
    }
    newArr.unshift(catName)
    return newArr
}

function removeLastCat() {
    const newArr = []
    for (let i = 0; i < cats.length; i++) {
        newArr.push(cats[i])
    }
    newArr.pop()
    return newArr
}

function removeFirstCat() {
    const newArr = []
    for (let i = 0; i < cats.length; i++) {
        newArr.push(cats[i])
    }
    newArr.shift()
    return newArr
}