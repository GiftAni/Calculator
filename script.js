let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err)
    {
      ("Invalid")
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
function percentage(){
    outputScreen.value = eval (outputScreen.value.replace("%",'/100'));
}
