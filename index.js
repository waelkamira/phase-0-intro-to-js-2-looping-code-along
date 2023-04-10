// Code your solutions in this file
function writeCards(name, surprise){
    let myArr = [];
    for(let i = 0; i < name.length; i++){
        myArr.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`)
    }
    return myArr
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


function countDown(num){
    
    while ( num >= 0 ){
        console.log(num);
        num--;
    }
    return num
}

countDown(10);


