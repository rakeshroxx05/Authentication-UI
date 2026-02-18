let users = JSON.parse(localStorage.getItem("users")) || [];

function showRegister() {
  document.getElementById("title").textContent = "Register";
  document.querySelector("button").textContent = "Register";
  document.querySelector(".switch").innerHTML =
    `Already have an account? <span onclick="showLogin()">Login</span>`;
  document.querySelector("button").setAttribute("onclick", "register()");
  document.getElementById("msg").textContent = "";
}

function showLogin() {
  document.getElementById("title").textContent = "Login";
  document.querySelector("button").textContent = "Login";
  document.querySelector(".switch").innerHTML =
    `Don't have an account? <span onclick="showRegister()">Register</span>`;
  document.querySelector("button").setAttribute("onclick", "login()");
  document.getElementById("msg").textContent = "";
}

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("msg").textContent = "Fill all fields";
    return;
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    document.getElementById("msg").textContent = "User already exists";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registered successfully!");
  showLogin();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Login successful!");
    document.body.innerHTML = `
      <div style="text-align:center; margin-top:100px;">
        <h1>Welcome, ${username}</h1>
        <button onclick="logout()">Logout</button>
      </div>
    `;
  } else {
    document.getElementById("msg").textContent = "Invalid username or password";
  }
}

function logout() {
  location.reload();
}

function togglePassword() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}
