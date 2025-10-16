document.addEventListener("DOMContentLoaded", () => {
  // Donate & Request Forms
  const donateForm = document.getElementById("donateForm");
  const requestForm = document.getElementById("requestForm");

  if (donateForm) {
    donateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your donation! NGO will contact you soon.");
      donateForm.reset();
    });
  }

  if (requestForm) {
    requestForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your request has been sent. You’ll be contacted shortly!");
      requestForm.reset();
    });
  }

  // Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const role = document.getElementById("role").value;
      alert(`Logged in as ${role}. (Frontend only, no backend yet)`);
      loginForm.reset();
    });
  }

  // Signup Form
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const role = document.getElementById("signupRole").value;
      alert(`Sign up successful for ${role}. (Frontend only)`);
      signupForm.reset();
    });
  }
});
