class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateonSubmit();
  }

  validateonSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (self.validateFields(input) == false) {
          error++;
        }
      });
      if (error == 0) {
        //do login api here
        var username = document.querySelector("#username").value,
          password = document.querySelector("#password").value;
        if (username == "admin" && password == "admin") {
          localStorage.setItem("auth", 1);
          var authValue = localStorage.getItem("auth");
          this.form.submit();
        } else {
          console.log(username + " " + password);
          self.invalidUserDetails();
          this.form.reset();
        }
        this.form.reset();
      }
    });
  }

  invalidUserDetails() {
    const errorMessage = document.querySelector(".invalid-user");
    errorMessage.innerText = "Invalid user details";
  }

  validateFields(field) {
    if (field.value.trim() === "") {
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
      return false;
    } else {
      this.setStatus(field, null, "success");
      return true;
    }
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message");

    if (status == "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      field.classList.remove("input-error");
    }

    if (status == "error") {
      errorMessage.innerText = message;
      field.classList.add("input-error");
    }
  }
}

const form = document.querySelector(".loginForm");
if (form) {
  const fields = ["username", "password"];
  const validator = new Login(form, fields);
}

const navBarLogin = document.getElementById("navbar-login");
if (localStorage.getItem("auth") == 1) {
  navBarLogin.innerHTML = "<li><a class=\"nav-link btn\" href=\"user.html\">Admin</a></li>"
    + "<li><a class=\"nav-link btn\" id=\"logoutBtn\">Logout</a><li>";
} else {
  navBarLogin.innerHTML = "<li><a class=\"nav-link btn\" data-toggle=\"modal\" data-target=\"#login-modal\">Login</a></li>";
}

const saveinfo = document.getElementById("saveinfo")
if (saveinfo != null && localStorage.getItem("auth") == 1) {
  saveinfo.hidden = true;
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn != null) {
  logoutBtn.addEventListener('click', function () {
    localStorage.removeItem("auth");
    localStorage.removeItem("savedArtworks");
    window.location.href = "/index.html";
  }, false);
}

