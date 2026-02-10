//< !-- ================= JAVASCRIPT FOR FEEDBACK FORM ================= -->


function validateForm(){
            
    var firstName= document.forms["feedbackForm"]["firstname"].value;

    var lastname= document.forms["feedbackForm"]["lastname"].value;

    var gender=document.forms["feedbackForm"]["gender"].value;

    var messageDetails= document.forms["feedbackForm"]["message"].value;

    var emailDetails=document.forms["feedbackForm"]["emailaddress"].value;
    //alert(messageDetails);

    if (firstName=="" || lastname=="" || messageDetails == "" || emailDetails == ""){
        event.preventDefault();//makes sure the page doesnot refresh after clicking buttons
    alert("Fields are Empty!!! please enter the values..."); 

            }
    else{
        alert("Thank you for your feedback and please visit our website again");
            }
        
}
