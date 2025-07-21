let btns = document.querySelectorAll("button");
let display = document.querySelector("#display");


for (let btn of btns) {
    btn.addEventListener("click", () => {

        if (btn.textContent === "=") {
            try {
                display.value = eval(display.value);
            }
            catch {
                display.value = "ERRor";
            }
        }
        else if (btn.textContent === "C") {
            display.value = display.value.slice(0, -1);
        }
        else if (btn.textContent === "AC") {
            display.value = "";
        }
        else{
            display.value += btn.textContent;
        }
    });
}



//for control with key board

document.addEventListener("keydown", (event) => {
    let allowKey = "0123456789+-*/.";

    if(allowKey.includes(event.key)){
        display.value += event.key;
    }
    else if(event.key === "Enter"){
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "ERRor";
        }
    }
    else if(event.key === "Backspace"){
        display.value = display.value.slice(0, -1);
    }
    else if(event.key === "Delete"){
        display.value = "";
    }
});