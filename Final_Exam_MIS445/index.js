function incentive(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var internetBill = document.getElementById("internet").value;
    var yearlymaintaince = document.getElementById("maintaince").value;

    var monthlymaintaince = yearlymaintaince/12;
    var incen;
    
    if(age > 50 && yearlymaintaince > 20000){
          incen = (internetBill*12) *(20/100);
    }
    else if(age > 30 && monthlymaintaince > 250){
        incen = (internetBill*12) *(15/100);
    }
    else{
        incen = 0;
    }
    
    document.getElementById("print").innerHTML = name + "Your incentive amount is " + incen + "taka"; 
}  