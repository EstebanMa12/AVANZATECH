/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

function zero(operation) {
if(!operation)return 0;
return operation(0);
}
function one(operation) {
if(!operation)return 1;
return operation(1);
}
function two(operation) {
if(!operation)return 2;
return operation(2);
}
function three(operation) {
if(!operation)return 3;
return operation(3);
}
function four(operation) {
if(!operation)return 4;
return operation(4);
}
function five(operation) {
if(!operation)return 5;
return operation(5);
}
function six(operation) {
if(!operation)return 6;
return operation(6);
}
function seven(operation) {
if(!operation)return 7;
return operation(7);
}
function eight(operation) {
if(!operation)return 8;
return operation(8);
}
function nine(operation) {
if(!operation)return 9;
return operation(9);
}
function plus(rightOperand) {
return function(leftOperand) {
    return leftOperand + rightOperand;
};
}

function minus(rightOperand) {
return function(leftOperand) {
    return leftOperand - rightOperand;
};
}

function times(rightOperand) {
return function(leftOperand) {
    return leftOperand * rightOperand;
};
}

function dividedBy(rightOperand) {
return function(leftOperand) {
    return Math.floor(leftOperand / rightOperand);
};
}


//*
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b