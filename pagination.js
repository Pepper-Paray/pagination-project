// pagination.js

let currentPage = 1;
let isRateLimited = false;

async function fetchPosts(page) {
    if (isRateLimited) {
        console.log("Rate limit exceeded. Please wait.");
        return;
    }
    isRateLimited = true;
    setTimeout(() => { isRateLimited = false; }, 2000);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
        if (!response.ok) throw new Error('API request failed');
        const posts = await response.json();
        renderPosts(posts);
        console.log(posts);
    } catch (error) {
        console.log("Error fetching posts:", error.message);
    }
}

function renderPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsDiv.appendChild(postDiv);
    });
}

function updateButtons() {
    document.getElementById('prev').disabled = currentPage === 1;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPosts(currentPage);
        updateButtons();
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    fetchPosts(currentPage);
    updateButtons();
});

// Initial load
fetchPosts(currentPage);
updateButtons();
