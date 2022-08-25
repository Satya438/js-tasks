function validate(callback) {
    var id = document.registration.sid;
    var fname = document.registration.fname;
    var lname = document.registration.lname;
    var email = document.registration.email;
    var Branch = document.registration.Branch;
    var gender = document.registration.gender;
    var Course = document.registration.Course; 
   
    if (id.value.length <= 0) {
        alert("Student ID is required");
        id.focus();
        return false;
    }
    if (fname.value.length <= 0) {
        alert("First Name is required");
        fname.focus();
        return false;
    }
    if (lname.value.length <= 0) {
        alert("Last Name is required");
        lname.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email Id is required");
        email.focus();
        return false;
    }
    if (Branch.value.length <= 0) {
        alert("Branch is required");
        role.focus();
        return false;
    }
    if (gender.value.length <= 0) {
        alert("Gender is required");
        gender.focus();
        return false;
    }
    
    if (Course.value == "Default") {
        alert("Course is required");
        Course.focus();
        return false;
    }
    

    callback();
    
    return false;
}