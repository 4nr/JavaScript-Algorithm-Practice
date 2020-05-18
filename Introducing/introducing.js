//using the .concat() operator
function introducing1(firstName, lastName) {
    const intro = 'Hi, my name is '.concat(firstName, ' ', lastName, '.');
    return intro;
}

//simply using the plus operator on strings
function introducing2(firstName, lastName) {
    const intro = 'Hi, my name is ' + firstName + ' ' + lastName + '.';
    return intro;
}

//using template literals
//also returning directly without intermediate step of saving to a variable
function introducing3(firstName, lastName) {
    return `Hi, my name is ${firstName} ${lastName}.`;  
}

//renamed variables name1 to firstName and name2 to lastName
// see notes in readme

console.log(introducing1('Jon', 'Kane'));
console.log(introducing2('Jonny', 'Kane'));
console.log(introducing3('Jonathan', 'Kane'));