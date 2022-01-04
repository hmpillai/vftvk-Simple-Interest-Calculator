function compute()
{    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // raise warning if principal is less than or equal to 0
    if (parseInt(principal)<=0){
        alert("Enter a positive number")
        document.getElementById("principal").focus
    }
    // calclate interest and display message
    else{
        var interest = parseInt(principal) * parseInt(years) * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>";  
    }  
}

function updateRate() 
{
    // update the slider value when slider changes
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
