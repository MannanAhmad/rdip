
//  ****   JS FUNCTION FOR CALCULATOR.HTML WEBPAGE  ****  // (TASK-1)


var num1, num2, result;
function Addition() {
    num1 = parseFloat(document.getElementById("firstnum").value)
    num2 = parseFloat(document.getElementById("secondnum").value);
    if (!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2)) {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    } else {
        result = num1 + num2
        var key = document.getElementById("ans")
        key.value = result
        return key.value
    }
}

function Substraction() {
    num1 = parseFloat(document.getElementById("firstnum").value)
    num2 = parseFloat(document.getElementById("secondnum").value);
    if (!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2)) {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    } else {
        result = num1 - num2
        var key = document.getElementById("ans")
        key.value = result
        return key.value
    }
}

function Multiplication() {
    num1 = parseFloat(document.getElementById("firstnum").value)
    num2 = parseFloat(document.getElementById("secondnum").value);
    if (!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2)) {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    }
    else {
        result = num1 * num2
        var key = document.getElementById("ans")
        key.value = result
        return key.value
    }
}

function Division() {
    num1 = parseFloat(document.getElementById("firstnum").value)
    num2 = parseFloat(document.getElementById("secondnum").value);
    if (!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2)) {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    }
    else {
        result = num1 / num2
        var key = document.getElementById("ans")
        key.value = result
        return key.value
    }
}

function Percentage() {
    num1 = parseFloat(document.getElementById("firstnum").value)
    num2 = parseFloat(document.getElementById("secondnum").value);
    if (!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2)) {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    }
    else {
        result = (num1 / 100) * num2;
        var key = document.getElementById("ans")
        key.value = num1 + " % of " + num2 + " is = " + result
        return key.value
    }
}
function hide() {
    document.getElementById('secondnum').disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b8").disabled = true;
    return document.getElementById('secondnum').disabled = true;


}
function show() {
    document.getElementById('secondnum').disabled = false;
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b8").disabled = false;
    return document.getElementById('secondnum').disabled = false;
}
function Absolute() {
    num1 = parseFloat(document.getElementById("firstnum").value)
    // num2 = parseFloat(document.getElementById("secondnum").value);
    if (!/^[0-9]+$/.test(num1)) {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    }
    else {
        result = Math.abs(num1)
        var key = document.getElementById("ans")
        key.value = "Abs Value of " + num1 + " is = " + result
        return key.value
    }
}

function SquareRoot() {
    num1 = parseFloat(document.getElementById("firstnum").value)
    // num2 = parseFloat(document.getElementById("secondnum").value);
    if (!/^[0-9]+$/.test(num1)) {
        alert("Number Field Can Not Be Empty... Please Enter  Numeric Value Only.")
    }
    else {
        result = Math.sqrt(num1)
        var key = document.getElementById("ans")
        key.value = "Square root of " + num1 + " is = " + result.toFixed(3);
        return key.value
    }
}

function Clear() {
    document.getElementById("firstnum").value = ""
    document.getElementById("secondnum").value = ""
    document.getElementById("ans").value = ""
    return document.getElementById("firstnum").value = ""
}



//  ****   JS FUNCTION FOR ValidateForm.HTML WEBPAGE  ****  // (TASK-2)


function validation() {
    var userName = document.getElementById("user").value;
    var userMobile = document.getElementById("mob").value;
    var userEmail = document.getElementById("mail").value;
    var userPass = document.getElementById("npass").value;
    var userCnfPass = document.getElementById("cnfpass").value;

    // Regx expression for all fields

    var checkUserName = /^[A-Za-z. ]{3,25}$/;
    var checkUserPassword = /^(?=.*[0-9])(?=.*[!@#%$^&*])[A-Za-z0-9!@#%$^&*]{8,15}$/;
    var checkUserMobile = /^[6789]{1}[0-9]{9}$/
    var checkUserEmail = /^[A-Za-z_0-9]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;

    // check all expression

    if (checkUserName.test(userName)) {
        document.getElementById("name-error").innerHTML = " ";
    } else {
        document.getElementById("name-error").innerHTML = "*** Invalid UserName it must be only Charectors, lenght should be atleast 3";
        return false;
    }

    if (checkUserMobile.test(userMobile)) {
        document.getElementById("mob-error").innerHTML = " ";
    } else {
        document.getElementById("mob-error").innerHTML = "*** Invalid Mobile Number it only contains number lenght must be 10, First digit must be starting from (6-9)";
        return false;
    }

    if (checkUserEmail.test(userEmail)) {
        document.getElementById("mail-error").innerHTML = " ";
    } else {
        document.getElementById("mail-error").innerHTML = "*** Invalid E-mail ";
        return false;
    }

    if (checkUserPassword.test(userPass)) {
        document.getElementById("pass-error").innerHTML = " ";
    } else {
        document.getElementById("pass-error").innerHTML = "*** Invalid Password must contains one number and one special charector and lenght should be atleast 8";
        return false;
    }

    if (userCnfPass.match(userPass)) {
        document.getElementById("cnfpass-error").innerHTML = " ";
    } else {
        document.getElementById("cnfpass-error").innerHTML = "*** Password not matched";
        return false;
    }

}


//  ****   JS FUNCTION To CHECK PALINDROME FOR ISPALINDROME.HTML WEBPAGE  ****  // (TASK-3)(PART-1)

function isPalindrome() {
    var userValue = document.getElementById("Input").value;

    // regulare expression for userInput field
    var userCheck = /^[A-Za-z ]{3,}$/;

    if (userCheck.test(userValue)) {

        var nameInReverse = userValue.split('').reverse().join('')
        if (nameInReverse && (userValue.toUpperCase() === nameInReverse.toUpperCase())) {
            alert("String Is Palindrome.")
            return true;
        }
        else {
            alert("String is not palindrome")
            return false
        }
    } else {
        alert("Please enter valid string")
    }
}


//  ****   JS FUNCTION To CHECK Anagram FOR ISANAGRAM.HTML WEBPAGE  ****  // (TASK-3)(PART-2)

function isAnagram() {
    var firstVal = document.getElementById("first").value;
    var secondVal = document.getElementById("second").value;

    // regulare expression for userInput field
    var userCheck = /^[A-Za-z]{3,}$/;

    if (userCheck.test(firstVal) && userCheck.test(secondVal)) {
        let check1 = firstVal.split("").sort().join("").toUpperCase();
        let check2 = secondVal.split("").sort().join("").toUpperCase();
        if(check1 === check2){
            alert("Both Are Anagram.")
            return true;
        }
        else{
            alert("Both Are Not Anagram.")
            return false;
        }
    } else {
        alert("Please enter valid string, Space is not allowed")
    }
}



//  ****   JS FUNCTION FOR WHO WILL SURVIVE GAME FOR WHOWILLSURVIVE.HTML WEBPAGE  ****  // (TASK-4)
