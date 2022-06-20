function submitHandler(event){
    event.preventDefault();
    console.log("Yaaa working")
    var user = document.getElementById("userName")
    alert("Logged In "+user.value)
}