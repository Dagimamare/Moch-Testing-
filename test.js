let assert = require('assert');

function sum(arr1, arr2) {
    let sumNumber = [];

    if (arr1.length >= arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2[i] !== undefined) {
                sumNumber.push(arr1[i] + arr2[i])
            } else {
                sumNumber.push(arr1[i])
            }

        }
    }

    if (arr2.length > arr1.length) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] !== undefined) {
                sumNumber.push(arr1[i] + arr2[i])
                //   console.log(arr1[i] + arr2[i],'number2')
            } else {
                sumNumber.push(arr2[i])
            }

        }
    }
    return sumNumber
}

let arr1 = [1,2]
let arr2 = [4,5,6]
let arr3 = [5, 7, 6]

console.log(sum(arr1, arr2));

describe('Array sum function', function () {
    it('Array sum function', function () {
        assert.deepEqual(sum(arr1, arr2), arr3)
    })
})
function mySubstring(abc, b, d) {
    let sub1 = abc.split("");
    let result = ""

    for (let i = b; i < sub1.length; i++) {
        if (d) {
            if (i >= b && i <= d) {
                result += sub1[i]

            }
        } else if (i >= b || i <= d) {
            result += sub1[i]

        }
    }

    return result

}
describe('mySubstring', function () {
    it('mySubstring', function () {
        assert.equal( mySubstring("This is awesome",3,6),'s is')
    })
    it('mySubstring', function () {
        assert.equal( mySubstring("This is awesome",5),"is awesome")
    })
})

describe('Title', () => {
    it('Description', () => {
        assert.equal([1, 2, 3].indexOf(4), -1)
    })
})







