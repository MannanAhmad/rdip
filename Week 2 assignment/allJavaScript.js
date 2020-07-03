//  ****   JS FUNCTION FOR CALCULATOR.HTML WEBPAGE  ****  //

// document.getElementById("ans").value = firstNum +secondNum;


var num1,num2,result;
function Addition(){
    num1 = parseFloat(document.getElementById("firstnum").value) 
    num2 = parseFloat(document.getElementById("secondnum").value);
    if(!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2))
        {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
        }else{
    result = num1 + num2
    var key = document.getElementById("ans") 
    key.value = result
    return key.value}
}

function Substraction(){
    num1 = parseFloat(document.getElementById("firstnum").value) 
    num2 = parseFloat(document.getElementById("secondnum").value);
    if(!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2))
        {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
        }else{
    result = num1 - num2
    var key = document.getElementById("ans") 
    key.value = result
    return key.value
        }
}

function Multiplication(){
    num1 = parseFloat(document.getElementById("firstnum").value) 
    num2 = parseFloat(document.getElementById("secondnum").value);
    if(!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2))
        {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
        }
    else{
    result = num1 * num2
    var key = document.getElementById("ans") 
    key.value = result
    return key.value
    }
}

function Division(){
    num1 = parseFloat(document.getElementById("firstnum").value) 
    num2 = parseFloat(document.getElementById("secondnum").value);
    if(!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2))
        {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
        }
    else{
    result = num1 / num2
    var key = document.getElementById("ans") 
    key.value = result
    return key.value}
}

function Percentage(){
    num1 = parseFloat(document.getElementById("firstnum").value) 
    num2 = parseFloat(document.getElementById("secondnum").value);
    if(!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2))
        {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
        }
    else{
    result = (num1 / 100) * num2;
    var key = document.getElementById("ans") 
    key.value = num1+" % of "+num2+ " is = "+result
    return key.value
    }
}
function hide(){
    document.getElementById('secondnum').disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b8").disabled = true;
    
    
}
function show(){
    document.getElementById('secondnum').disabled = false;
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b8").disabled = false;
}
function Absolute(){
    num1 = parseFloat(document.getElementById("firstnum").value) 
    // num2 = parseFloat(document.getElementById("secondnum").value);
    if(!/^[0-9]+$/.test(num1))
    {
    alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    }
    else{
    result = Math.abs(num1)
    var key = document.getElementById("ans") 
    key.value = "Abs Value of "+num1+" is = "+result
    return key.value
    }
}

function SquareRoot(){
    num1 = parseFloat(document.getElementById("firstnum").value) 
    // num2 = parseFloat(document.getElementById("secondnum").value);
    if(!/^[0-9]+$/.test(num1))
        {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
        }
        else{
    result = Math.sqrt(num1)
    var key = document.getElementById("ans") 
    key.value = "Square root of "+num1+" is = "+result.toFixed(3);
    return key.value 
        }
}

function Clear(){
    document.getElementById("firstnum").value= ""
    document.getElementById("secondnum").value= ""
    document.getElementById("ans").value = ""
}

