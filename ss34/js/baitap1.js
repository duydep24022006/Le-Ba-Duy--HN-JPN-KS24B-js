 function register() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");
            const confirmPasswordError = document.getElementById("confirmPasswordError");
            
            emailError.textContent = passwordError.textContent = confirmPasswordError.textContent = "";
            
            if (!email) {
                emailError.textContent = "Email cannot be empty";
                return;
            }else if(!(email.includes("@") && (email.endsWith(".vn") || email.endsWith(".com")))){
                 emailError.textContent = "Please enter a valid email address.";
                return;
            }
            if (!password||password.length<=8) {
                passwordError.textContent = "Password cannot be empty";
                return;
            }
            if (password !== confirmPassword) {
                confirmPasswordError.textContent = "Passwords do not match";
                return;
            }
            
            const users = JSON.parse(localStorage.getItem("users")) || [];
            if (users.some(user => user.email === email)) {
                emailError.textContent = "Email already exists";
                return;
            }
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful!");
        }