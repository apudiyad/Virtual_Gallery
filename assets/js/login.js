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
  navBarLogin.innerHTML = `
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLoginContent" aria-controls="navbarLoginContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="bi bi-person-fill"></span> <!-- This is the user icon from Bootstrap Icons -->
    </button>
    <div class="collapse navbar-collapse" id="navbarLoginContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="user.html">User</a></li>
            <li class="nav-item"><a class="nav-link" href="user.html#upcoming">Events</a></li>
            <li class="nav-item"><a class="nav-link" href="user.html#savedart">Saved Art</a></li>
            <li class="nav-item"><a class="nav-link" id="logoutBtn">Logout</a></li>
        </ul>
    </div>
  `;
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


const navBarToggler = document.querySelector('.navbar-toggler'); // The user icon
const navbarLoginContent = document.querySelector('#navbarLoginContent'); // The dropdown content

let isHoveringOverIcon = false;
let isHoveringOverDropdown = false;

// Function to show the dropdown
function showDropdown() {
  $(navbarLoginContent).collapse('show');
}

// Function to hide the dropdown
function hideDropdown() {
  // Only hide if not hovering over icon or dropdown
  if (!isHoveringOverIcon && !isHoveringOverDropdown) {
    $(navbarLoginContent).collapse('hide');
  }
}

// Mouse enter and leave for icon
navBarToggler.addEventListener('mouseenter', function() {
  isHoveringOverIcon = true;
  showDropdown();
});

navBarToggler.addEventListener('mouseleave', function() {
  isHoveringOverIcon = false;
  setTimeout(hideDropdown, 500); // Gives a delay to allow moving to the dropdown
});

// Mouse enter and leave for dropdown content
navbarLoginContent.addEventListener('mouseenter', function() {
  isHoveringOverDropdown = true;
});

navbarLoginContent.addEventListener('mouseleave', function() {
  isHoveringOverDropdown = false;
  hideDropdown();
});

// CSS for nav user icon
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
  .bi-person-fill {
    color: #fff;
  }
  .navbar-toggler {
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #navbarLoginContent {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0);
    width: 100%;
  }
  #navbarLoginContent .nav-link {
    padding: 10px 15px;
    color: #fff;
  }
  #navbarLoginContent .nav-item:hover .nav-link {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
document.getElementsByTagName('head')[0].appendChild(style);
