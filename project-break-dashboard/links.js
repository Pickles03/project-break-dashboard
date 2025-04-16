/*

<div class="linkContainer" id="links">
    <input type="text" id="linkTitle" placeholder="Title"/>
    <input type="url" id="linkUrl" placeholder="URL"/>
    <button id="addLink">Add link ✅</button>
    <div class="linkList" id="linkList">
        <ul id="linksList"></ul>
    </div>
</div>

*/

document.addEventListener('DOMContentLoaded', () =>{
    const linkTitle = document.getElementById("linkTitle");
    const linkURL = document.getElementById('linkUrl');
    const addLink = document.getElementById('addLink');
    const linksList = document.getElementById('linksList');

    function loadLinks () { //this function loads the links from local storage
        const savedLinks = localStorage.getItem('links'); // Get the saved links from local storage
        if (savedLinks) { // If there are saved links, load them into the list
            linksList.innerHTML = savedLinks; //
            deleteLinksButtons(); //this function sets the event listeners for the delete buttons
        }
    }
    
    function saveLinks() {
        localStorage.setItem('links', linksList.innerHTML); // Save the current links to local storage
    }

    function saveLinksToDOM(title, url) { //this function saves the links to the DOM
        const li = document.createElement('li'); // Create a new list item
        li.innerHTML = `
        <a href='${url}' target='_blank'>${title}</a> 
        <button class='deleteLink'>❌</button>
        `; // Create a new link with the title and url
        linksList.appendChild(li); // Append the new link to the list
        deleteLinksButtons();
    }

    function deleteLinksButtons() {
        const deleteLinks = document.querySelectorAll('.deleteLink'); //takes the button with corresponding class and asigns it to a variable which will be used to delete the link
        deleteLinks.forEach(button => { //forEach loop to iterate through the buttons
            button.onclick = function() {
                button.parentElement.remove(); //the parent element is the li element, so this will remove the li element
                saveLinks(); 
            };
        }); 
    }

    addLink.addEventListener('click', () => {
        const title = linkTitle.value;
        const url = linkURL.value;
        if (title === '' || url === '') {
            alert('Please fill in both fields');
            return;
        }
        
        
        saveLinksToDOM(title, url); //this function saves the links to the DOM
        
        linkTitle.value = ''; // the input field is cleared
        linkURL.value = ''; 

        saveLinks(); // this function saves the links to local storage

    });

    loadLinks(); // this function loads the links from local storage
});