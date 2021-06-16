function getHistory(){
    return document.querySelector(".calc__history-value").innerText 
}

function printHistory(num){
    document.querySelector(".calc__history-value").innerText = num;
}

function getOutput(){
    return document.querySelector(".calc__output-value").innerText;
}

function printOutput(num){
    if(num ==""){
        document.querySelector(".calc__output-value").innerText = num;
    }else{
        document.querySelector(".calc__output-value").innerText = num;
    }
}

let toggle = false;

let operator = document.querySelectorAll(".calc__operator");

for(let i = 0; i< operator.length; i++){
    operator[i].addEventListener("click", function(){
        if(this.id === "clear"){
            printHistory("");
            printOutput("");
        }else {
            let output = getOutput();
            let history = getHistory();
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0, history.length - 1);
                }
            }
            if(output != "" || history != ""){
                history = history + output;
                if(this.id === "="){
                    toggle = !toggle;
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    history += this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

let number = document.querySelectorAll(".calc__number");
for(let i = 0; i< number.length; i++){
    number[i].addEventListener("click", function(){
        let output = getOutput();
        if(toggle){
            output = output.substr(output.length);
            toggle = !toggle;
        }
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }
    });
}