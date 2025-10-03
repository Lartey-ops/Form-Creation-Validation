// Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear "Loading..." message
        dataContainer.innerHTML = '';

        // Create a list
        const userList = document.createElement('ul');

        // Loop through users and add each name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}


document.addEventListener('DOMContentLoaded', fetchUserData);
