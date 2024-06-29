console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const baseURL = 'https://api.giphy.com/v1/gifs/search';

const form = document.getElementById('search-form');
const gifContainer = document.getElementById('gif-container');
const clearBtn = document.getElementById('clear-btn');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const searchTerm = document.getElementById('search-term').value;
    const limit = 1;
    const offset = Math.floor(Math.random() * 50); // Generate a random offset between 0 and 49

    const url = `${baseURL}?q=${searchTerm}&api_key=${API_KEY}&limit=${limit}&offset=${offset}`;

    try {
        const response = await axios.get(url);
        console.log('Giphy API Response:', response.data);

        const gifUrl = response.data.data[0].images.fixed_height.url; // Get the URL of the first GIF
        const gifElement = document.createElement('img');
        gifElement.src = gifUrl;
        gifContainer.appendChild(gifElement);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

clearBtn.addEventListener('click', function() {
    gifContainer.innerHTML = ''; // Clear all GIFs from the container
});

