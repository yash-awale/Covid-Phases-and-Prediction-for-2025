document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Basic validation for password confirmation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Simulate a successful signup (you can replace this with actual signup logic)
    alert(`Account created successfully!\nName: ${name}\nEmail: ${email}`);
  });
  