const nameFunction = function (name) {
    //console.log(name);
}
nameFunction('Arkam');
nameFunction('Zarif');

(function () {
    //console.log('I am function.')
})();

function newNameFunction(name) {
    return name;
}
//console.log(newNameFunction('Amima'));

function numFuction(number) {
    return number * 5;
}
//console.log(numFuction(100));

const arrowNum = (number) => number * 3;
//console.log(arrowNum(100));

const arrowDubleNum = (num1, num2) => num1 + num2;

console.log(arrowDubleNum(100, 200));
