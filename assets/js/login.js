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
        }
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
