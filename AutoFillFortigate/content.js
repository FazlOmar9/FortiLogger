chrome.storage.sync.get(['username', 'password'], function(credentials) {
  var loginField = document.getElementById("ft_un");
  var passwordField = document.getElementById("ft_pd");
  var submitForm = document.forms[0];

  loginField.value = credentials.username;
  passwordField.value = credentials.password;
  submitForm.submit();
});