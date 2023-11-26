document.getElementById('credentialsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  chrome.storage.sync.set({username: username, password: password}, () => window.close());
});


chrome.storage.sync.get('username', (data) => {
  if (data.username)
    document.getElementById('username').value = data.username;
});
