const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const email = loginForm.elements.email;
  const password = loginForm.elements.password;

  if (!email.value || !password.value) {
    alert("Заповніть всі поля");
  } else {
    const formSubmit = {
      email: email.value,
      password: password.value,
    };
    console.log(formSubmit);

    loginForm.reset();
  }
}
