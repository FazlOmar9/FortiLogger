var myUsername = "your_id";
var myPassword = "your_pwd";


var loginField = document.getElementById("ft_un");
var passwordField = document.getElementById("ft_pd");
var submitForm = document.forms[0];

loginField.value = myUsername;
passwordField.value = myPassword;
submitForm.submit();
