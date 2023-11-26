chrome.storage.sync.get(['username', 'password'], (credentials) => {
  if (document.getElementById("ft_un") && document.getElementById("ft_pd")) {
    let loginField = document.getElementById("ft_un");
    let passwordField = document.getElementById("ft_pd");
  }
  else return;

  let submitForm = document.forms[0];

  loginField.value = credentials.username;
  passwordField.value = credentials.password;
  submitForm.submit();
});