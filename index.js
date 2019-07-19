/* 
    Author: Otumian Empire
    last updated: Wed 27 Feb 2019 21:39:08 GMT 
*/

/* 
    Current Electricity Program based on the Ohm's law.

    Ohm's law states that the potential difference (Voltage - V) 
    across a conduct is directly proportional to the current (I) 
    that passes through the conductor at std environmental 
    conditions.

    The formular here is V = IR where R is the resistance offered 
    against the follow of current.

    The current is the follow of charges (Q) by time (t), Q = It.
*/


/*
    Varibles here are the voltage, current, resistance, charge and 
    time.
*/
var val_voltage = document.getElementById("val_voltage");
var val_current = document.getElementById("val_current");
var val_resistance = document.getElementById("val_resistance");
var val_charge = document.getElementById("val_charge");
var val_time = document.getElementById("val_time");


/*
    The value of the volatge is depent on current and resistance and 
    each, on the two others.
    That is :
    V = IR, I = V/R, R = V/I

    The value of also, current may be dependent of charge and time and
    each, on the two others.
    That is :
    Q = It, I = Q/t, t = Q/I

    Looking at the above dependencies, it seems that I has one to many
    dependencies.
    That is :
    I = V/R and I = Q/t
    This leaves us with V/R = Q/T.
    Now V  = (Q*R)/T and R  = Q/(T*V) and a whole trivia.
*/


/*
    Assumptions
    * If all the slots are empty, their values are 0.
    * All the slots can not be filled.
    * Two slots must be empty and these shouldn't be charge (I) and time (t),
       since they are dependent variables (dependent variables: variables that,
         may, depend on each other) nor voltage (V) and resistance (R).
*/


// This function is binded to the button, that says, "electrify me". It's electricy.
function btnClick() {

    // a. if all the slots are empty, V = I = R = Q = t = "Empty".
    if (val_voltage.value == 0 && val_current.value == 0 && val_resistance.value  == 0
        && val_charge.value  == 0  && val_time.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_charge.value = "Empty";
        val_current.value = "Empty";
        val_resistance.value = "Empty";
        val_time.value = "Empty";
        val_voltage.value = "Empty";

        // test output
        testOutPut();
    }

    //b. if V and I are empty,I = Q / t and  V = (Q * R) / T
    else if (val_resistance.value  == 0 && val_charge.value  == 0  && val_time.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_current.value = Number(val_charge.value / val_time.value);
        val_voltage.value = Number((val_charge.value * val_resistance.value) / val_time.value);

        // test output
        testOutPut();
    }

    //c. if V and Q are empty, Q = I * t and V = I * R
    else if (val_voltage.value == 0 && val_charge.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_charge.value = Number(val_current.value * val_time.value);
        val_voltage.value = Number(val_current.value * val_resistance.value);

        // test output
        testOutPut()
    }

    //d. if V and t are empty, I would be empty as such 
    // V = I * R, Q = I / t
    else if (val_voltage.value == 0 && val_time.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_voltage.value = Number(val_current.value * val_resistance.value);
        val_charge.value = Number(val_current.value / val_time.value);

        // test output
        testOutPut();
    }

    //e. if I and Q are empty, I = V / R and Q = (v / R) * t
    else if (val_current.value == 0 && val_charge.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_current.value = Number(val_voltage.value / val_resistance.value);
        val_charge.value = Number((val_voltage.value / val_resistance.value) * val_time.value);

        // test output
        testOutPut();
    }

    //f. if I and t are empty, I = V / R and t = Q / (v / R )
    else if (val_current.value == 0 && val_time.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_current.value = Number(val_voltage.value / val_resistance.value);
        val_time.value = Number(val_charge.value / (val_voltage.value / val_resistance.value));

        // test output
        testOutPut();
    }

    //g. if I and R are empty, I = Q / t and R = V / (Q / t)
    else if (val_current.value == 0 && val_resistance.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_current.value = Number(val_charge.value / val_time.value);
        val_resistance.value = Number(val_voltage.value / (val_charge.value / val_time.value));

        // test output
        testOutPut();
    }

    //h. if R and Q are empty, R = V / I and Q = I * t
    else if (val_resistance.value == 0 && val_charge.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_resistance.value = Number(val_voltage.value / val_current.value);
        val_charge.value = Number(val_current.value * val_time.value);

        // test output
        testOutPut();
    }

    //i. if R and t are empty, R = V / I and t = Q / I
    else if (val_resistance.value == 0 && val_time.value == 0) {

        /* Convert all the strings to Number */
        makeNumber();

        val_resistance.value = Number(val_voltage.value / val_current.value);
        val_time.value = Number(val_charge.value / val_current.value);

        // test output
        testOutPut();
    }

    //j. if all the filled are filled, this should clear it, sort of.
    else if (val_voltage.value != 0 && val_current.value != 0 && val_resistance.value  != 0
         && val_charge.value  != 0  && val_time.value != 0) {

        val_charge.value = "";
        val_current.value = "";
        val_resistance.value = "";
        val_time.value = "";
        val_voltage.value = "";
    }

    // if the case is as such when the variables are not dependent    
    // there are more than three variables needed to be filled
    // and some force Assumptions have to be made
    else {
        alert("I don't really know how to find the solution to the input entered, for i have limitations.");
    }

}


// test output
function testOutPut() {
    
    console.log("val_charge.value " +  val_charge.value);
    console.log("val_current.value " + val_current.value);
    console.log("val_resistance.value " + val_resistance.value);
    console.log("val_time.value " + val_time.value);
    console.log("val_voltage.value " + val_voltage.value);
}


// converts all variables to Numbers
function makeNumber() {

    val_charge.value = Number(val_charge.value);
    val_current.value = Number(val_current.value);
    val_resistance.value = Number(val_resistance.value);
    val_time.value = Number(val_time.value);
    val_voltage.value = Number(val_voltage.value);

    // test output
    testOutPut();
}
