function bmi(){
    // recieve all inputs from users
    // The Number() coverts the object arguments to a number which represents the object's value
    var feet =document.querySelector(".feet").value;
    var inch=document.querySelector(".inch").value;
    var metre= feet+"."+inch;
    let height= metre / 3.2808;
    var weigh=document.querySelector(".weight").value;
    //The Math.pow() returns the base to exponent power
    var bmi= weight/Math.pow(height,2);
    // Display the result of caculation


    if (bmi<18.5){
    //The toFixed() method formats a number using fixed-point notation.
         document.querySelector("p").innerHTML = "Your BMI is "+ (Math.round(bmi*100/100).toFixed(2))+"<br>"+"You are Uderweight";

    } else if (bmi>=18.5 && bmi<=25){
        document.querySelector("p").innerHTML = "Your BMI is "+ (Math.round(bmi*100/100).toFixed(2))+"<br>"+"You are Normal";  

    } else if (bmi>=25 && bmi<=30){
        document.querySelector("p").innerHTML = "Your BMI is "+ (Math.round(bmi*100/100).toFixed(2))+"<br>"+"You are Normal";  

    } else {
        document.querySelector("p").innerHTML = "Your BMI is "+ (Math.round(bmi*100/100).toFixed(2))+"<br>"+"You are Obese";  
    
}
}
// Here is the formula to activate the button  
document.querySelector(".btn").addEventListener("click",bmi);