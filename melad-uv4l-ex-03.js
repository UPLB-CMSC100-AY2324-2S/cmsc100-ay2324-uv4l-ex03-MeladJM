//Jan Michael C. Melad

//defining variables
const password1 = "Hello1234"
const password2 = "Hello1234"
const username = "Jan"

//function to know if a number in a string is a number
function isNumber(value) {
    for(let j=0;j<=10;j++)
    {
        if(value==j)
        {
            return true;
        }
    }
    return false;
  }

  //function for validating the password if they are exactly the same, more than 8 characters, and have at least 1 lowercase, 1 uppercase, and a number
function validatePassword(password1,password2)
{
    let uppercases = 0
    let lowercases = 0
    let numbers = 0
    let length = password1.length
    for(let i = 0; i<length; i++)
    {
        if(password1[i].toUpperCase() === password1[i] && isNumber(password1[i])===false)       //uppercase
        {
            uppercases++;
        }
        if(password1[i].toLowerCase() === password1[i] && isNumber(password1[i])===false)       //lowercase
        {
            lowercases++;
        }
        if(isNumber(password1[i])===true)                                                       //number
        {
            numbers++;
        }
    }
    if(!(password1===password2))                    //if they are not exactly the same
    {
        return false;
    }
    if(!(length>8))                                   //if not more than 8 characters
    {
        return false;
    }
    if (!(uppercases>0 && lowercases>0 && numbers>0))   //if not more than 1 uppercs,e 1 lowercase, and 1 number
    {
        return false
    }
    return true;
}

//reversing the password
function reversePassword(password1)
{
    let length = password1.length
    let newPassword = ''
    for(let i = length-1; i>=0; i--)
    {
        newPassword = newPassword + password1[i]
    }
    return newPassword
}

//storing the passwrod into the person
function storePasswowrd(name,password1,password2)
{
    //object
    let person = {}
    person.name = name          //add name
    person.actual_passwrord = password1
    if (validatePassword(password1,password2))              //if the password is validates
    {
        person.new_password = reversePassword(password1)     //password will be its reverse
    }
    else
    {
        person.new_password = password1                      //password will be its original
    }
    return(person)
}

//main
let account = storePasswowrd(username,password1,password2)      //object will eb assigned to account
if(validatePassword(password1,password1))
{
    console.log(account)                                    //print account
}
else
{
    console.log("Invalid Password")                     //invalid password
}