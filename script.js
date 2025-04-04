
// check conditions and comparition opraters

let c = 7;
let b = 9;
console.log("a=b",c===b)

if(c<b && c<b){
    console.log('you can vote')
}
else{
    console.log('you can not vote')
}

// tring to convert in dark mode and light mode 

let mode = 'light'

if(mode == "dark"){
    console.log('black')
}if(mode == 'light'){
    console.log('white')
}
 // which nubers is multipal of 5
let use = prompt(Number('enter a nuber'))

if(use%5 == 0){
    console.log(use,'is muliple of ',5)
}else{
    console.log(use,'is not multiple of ',5)
}

// tell us your mark parsentege and gives them a grade accoding to the mark

let studentmark = prompt('enter your marks');

if(studentmark>=90 && studentmark<=100){
    console.log('Grade A')
}if(studentmark>=70 && studentmark<=89){
    console.log('Grade B')
}if(studentmark>=60 && studentmark<=69){
    console.log('Grade C')
}if(studentmark>=40 && studentmark<=59){
    console.log('Grade D')
}else{
    console.log('fale')
}

//Print 100 times my name and add all 1-100 numbers.

let num = 0
for(let i=1; i<=100;i++){
    num += i
console.log('Rahulkumar')
}
console.log(num)

let i = 0;
while(i<=10){
    i++
    console.log("i",i)
}

// find even nubers between 1-100

let a = 1;
while(a<=100){
    a++
    if(a%2 == 0){
        console.log("even Numbers",a)
    }if(a%2 != 0){
        console.log('odd Numbers', a)
    }
}

// A game that ask people to gess a write number by popup prompt

let gamenuber = 22;
let user = prompt('gass the currect number');

 while(gamenuber != user){
user = prompt('sorry you gass the wrong numbers')
}
console.log('congratulation you win!')

let p = 5;
console.log(p)