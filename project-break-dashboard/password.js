/*

<div id="pass" class="passGen">
    <h1>Password Generator</h1>
    <div class="passContainer">
        <button id="generate">Generate Password</button>
        <input type="text" id="password" placeholder="Generated Password" readonly>
    </div>
</div>

*/

const password = document.getElementById('password');
const btnGenerate = document.getElementById('generate');
const minLength = 12;
const maxLength = 50;

btnGenerate.addEventListener('click', () => {
    const length = prompt('Enter the desired length of your password (between 12 and 50 characters)');
    
    if (length >= minLength && length <= maxLength) {
        generatePassword(length);
    }
    else {
        alert('Please enter a valid length between 12 and 50.');
    }
});

const generatePassword = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) { //it will loop through the length that i provided
        generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length)); //charAt will return the character at the specified index
    };
    password.value = generatedPassword;

};
