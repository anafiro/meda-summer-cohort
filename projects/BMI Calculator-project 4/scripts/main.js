function bmi(){
    // recieve all inputs from users
    // The Number() coverts the object arguments to a number which represents the object's value
    var weight=Number(document.getElementById("weight").value);
    var height=Number(document.getElementById("height").value);
    //The Math.pow() returns the base to exponent power
    var result = weight/height*height;
    // Display the result of caculation
    document.getElementById("result").innerHTML= weight/(height*height)

    if (result <18.5){
    //The toFixed() method formats a number using fixed-point notation.
    document.getElementById("type").value = "Uderweight";

    } else if (result>=18.5 && result<=25){
    document.getElementById("type").value = "Normal";

    } else if (result>=25 && result<=30){
    document.getElementById("type").value = "Obese";

    } else if  (result>30){
    document.getElementById("type").value = "Overweight";
}
}

    