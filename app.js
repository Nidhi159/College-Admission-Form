function display(){

    var sname = document.getElementById("sname").value;
    var rad = document.getElementById("rad").value;
    var  deptname= document.getElementById("deptname").value;
    var firstGraduate = document.getElementById("firstGraduate").value;
    var result = document.getElementById("result");
    console.log(firstGraduate);
    switch(deptname){
        case 'MBBS':
            tutionFee= 90000;
            admissionFee= 2300000;
            hostelFee=96000;
            break;
        case 'BDS':
            tutionFee=80000;
            admissionFee=1500000;
            hostelFee=96000;
            break;
        case 'BHMS':
            tutionFee=95000;
            admissionFee=1235000;
            hostelFee=96000;
            break;
    }
    if(rad=='yes')
      hostelFee=96000;
    else
    hostelFee=0;
    totalCollegeFee=admissionFee+tutionFee+hostelFee;

  
    if(firstGraduate =='on')
    totalCollegeFee = totalCollegeFee - 25000;
    console.log(totalCollegeFee);
    result.innerHTML="Hii <span  class ='innerhtml'>" + sname + "</span><br> Your Admission Fee is Rs.<span class='innerhtml'>"
    + admissionFee +"</span><br>  Tution Fee is Rs.<span class='innerhtml'>"+ tutionFee +"</span><br>  Hostel Fee is Rs.<span class='innerhtml'>"+hostelFee+
    "</span><br> Total College  Fee is Rs.<span class='innerhtml'>"+totalCollegeFee+"</span>";
    return false;
}