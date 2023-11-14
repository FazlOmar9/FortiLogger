document.getElementById('credentialsForm').addEventListener('submit', e => {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  chrome.storage.sync.set({username: username, password: password}, () => window.close());
});


chrome.storage.sync.get('username', data => {
  if (data.username) {
    document.getElementById('username').value = data.username;
  }
});
