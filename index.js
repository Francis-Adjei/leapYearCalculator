 isLeapFunction = () => {

    let year = document.getElementById("year").value;
  
   if (year === "" ||  isNaN(year)){

    document.getElementById("yeardisplay").innerHTML = "Provide a valid Year!" ;

   }else if(year <= 0){

    document.getElementById("yeardisplay").innerHTML = "Year cannot be less than or equal to 0 " ;

   }else{

    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                document.getElementById("yeardisplay").innerHTML = `${year} is a Leap Year` ;
            }else{
                document.getElementById("yeardisplay").innerHTML = `${year} is not a Leap Year` ;
            }
        }else{
            document.getElementById("yeardisplay").innerHTML = `${year} is a Leap Year` ;
        }
        
    }else{
        document.getElementById("yeardisplay").innerHTML = `${year} is not a Leap Year` ;
    }

   }
      
 }
 
  // Function for calculating leapYear

      let submit = document.getElementById("btn"); 
       submit.addEventListener("click", isLeapFunction);



