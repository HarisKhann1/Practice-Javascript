// Function to set the username property of an object
function setUserName(username) {
    console.log("called"); // Log to indicate the function was called
    this.username = username; // Set the username property of the current object
}

// Function to create a user account with username, email, and password
function createUserAccount(username, email, password) {
    // Call setUserName function with the current object context and username
    setUserName.call(this, username);
    this.email = email; // Set the email property of the current object
    this.password = password; // Set the password property of the current object
}

// Create a new user account object with specified username, email, and password
const user1 = new createUserAccount("john", "john@email.com", "john123");

// Log the created user account object to the console
console.log(user1);