function bmi(){
    // recieve all inputs from users
    // The Number() coverts the object arguments to a number which represents the object's value
    var weight=Number(document.getElementById("weight").value);
    var height=Number(document.getElementById("height").value);
    //The Math.pow() returns the base to exponent power
    var bmi = weight/Math.pow(height,2);
    // Display the result of caculation
    document.getElementById("bmi").innerHTML=Math.round(bmi*100/100);

    if (bmi<18.5){}
    //The toFixed() method formats a number using fixed-point notation.
    document.getElementById("p").value = "Uderweight: Your BMI is:" + Math.round(bmi*100/100).toFixed(2);

    } elif (bmi>=18.5 && bmi<=25){
    document.getElementById("p").value = "Normal:Your BMI is:" + Math.round(bmi*100/100).toFixed(2);

    } elif (bmi>=25 && bmi<=30){
    document.getElementById("p").value = "Obese:Your BMI is:" + Math.round(bmi*100/100).toFixed(2);

    } elif  (bmi>30){
    document.getElementById("p").value = "Overweight:Your BMI is:" + Math.round(bmi*100/100).toFixed(2);
}
}
// To activate the button we should use EventListenr function
document.querySelector(".btn").addEventListener("click",bmi);
    