'use strict';

var returnId = (id)=>{
    return document.getElementById(id);
}

var myForm = returnId('myForm');
var fname = returnId('firstname');
var lname = returnId('lastname');
var sts = returnId('status');
var data = returnId('data');
var parsedString  = JSON.parse(localStorage.getItem('data'));//convert string to object
console.log(parsedString);
data.textContent = `The First Name is ${parsedString.firstname} and the Last name is ${parsedString.lastname}`

myForm.addEventListener('submit',(event)=>{
    event.preventDefault();//prevents default submission

    if(fname.value==''){
        fname.style.border='1px solid red';
        return;
    }else{
        fname.style.border='none';
    }

    if(lname.value==''){
        lname.style.border='1px solid red';
        return;
    }else{
        lname.style.border='none';
    }
    //form vaild
    if(fname.value != '' && lname.value!=''){

        var obj={};
        obj['firstname'] = fname.value;
        obj['lastname'] = lname.value;
        console.log(obj);
        localStorage.setItem('data',JSON.stringify(obj));//covert object to string

        sts.textContent = "Processing the given input .Please wait!!!.."
        setTimeout(() => {
            sts.textContent="Form Submitted Sucessfully..."
        }, 3000);
    }
    
}
)
