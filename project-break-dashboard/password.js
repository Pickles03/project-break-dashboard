/*

<div id="pass" class="passGen">
        <h1>Password Generator</h1>
        <div class="passContainer">
            <input type="number" id="length" placeholder="Length of Password">
            <button id="generate">Generate Password</button>
            <input type="text" id="generatedPassword" placeholder="Generated Password" readonly>
        </div>
    </div>


*/
document.addEventListener('DOMContentLoaded', () => {
    const passLength = document.getElementById('length');
    const password = document.getElementById('generatedPassword');
    const btnGenerate = document.getElementById('generate');

    if (!passLength || !password || !btnGenerate) return;

    const minLength = 12;
    const maxLength = 50;

    const generatePassword = (length) => {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
        let generatedPass = '';
        for (let i = 0; i < length; i++) { 
            generatedPass += charset.charAt(Math.floor(Math.random() * charset.length)); 
        };
        password.value = generatedPass;

    };
    btnGenerate.addEventListener('click', () => {
        const length = parseInt(passLength.value);
    
        if (length >= minLength && length <= maxLength) {
            generatePassword(length);
        }
        else {
            alert('Please enter a valid length between 12 and 50.');
        }

        passLength.value = '';
    });
});
