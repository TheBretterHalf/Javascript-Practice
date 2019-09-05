var balance = 1000 
var years = 3
var interestMonths = .45


function nB (){
    let x = Math.floor(1000*(Math.pow(1+((interestMonths)/(12)), 12*years)))
    console.log(x)
}

function nBperMonth (){
    let monthlybal = balance;
    for (let i=0; i<years*12; i++){
        let monthlyx = monthlybal*((interestMonths)/12)
        monthlybal=monthlybal+monthlyx;
        console.log(Math.floor(monthlybal));
    }
}

function deposit (deposit){
    let monthlybal = balance;
    for (let i=0; i<years*12; i++){
        let monthlyx = monthlybal*((interestMonths)/12)
        monthlybal=monthlybal+monthlyx+deposit;
        console.log(Math.floor(monthlybal));
    }
}

function depositMonthly (deposit, month){
    let monthlybal = balance;
    for (let i=0; i<years*12; i++){
        if(i%month==0){
            let monthlyx = monthlybal*((interestMonths)/12)
            monthlybal=monthlybal+monthlyx+deposit;
            console.log(Math.floor(monthlybal));
        }
        else{
            let monthlyx = monthlybal*((interestMonths)/12)
            monthlybal=monthlybal+monthlyx;
            console.log(Math.floor(monthlybal));
        }
    }
}

function withdrawl (deposit, month, withdrawl, monthW){
    let monthlybal = balance;
    for (let i=0; i<years*12; i++){
        if(i%month==0){
            if(i%monthW==0){
                monthlybal=monthlybal-withdrawl
                let monthlyx = monthlybal*((interestMonths)/12)
                monthlybal=monthlybal+monthlyx+deposit;
                console.log(Math.floor(monthlybal));
            }
            else{
                let monthlyx = monthlybal*((interestMonths)/12)
                monthlybal=monthlybal+monthlyx+deposit;
                console.log(Math.floor(monthlybal));
            }
        }
        else{
            if(i%monthW==0){
                monthlybal=monthlybal-withdrawl
                let monthlyx = monthlybal*((interestMonths)/12)
                monthlybal=monthlybal+monthlyx;
                console.log(Math.floor(monthlybal));
            }
            else{
                let monthlyx = monthlybal*((interestMonths)/12)
                monthlybal=monthlybal+monthlyx;
                console.log(Math.floor(monthlybal));
            }
        }
    }
}

console.log(withdrawl(100,4,100,4))