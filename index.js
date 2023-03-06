// Code your solutions in this file

const messages = [];

function writeCards(names, value) {
    for (let i = 0; i < names.length; i++) {
        messages.push(...[`Thank you, ${names[i]}, for the wonderful ${value} gift!`]);  
    }
    return messages;
}



function countDown() {
    let countUp = 10;
    while (countUp > -1) {
        console.log(countUp--)
    }

}
