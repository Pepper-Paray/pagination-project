// pagination.js

let currentPage = 1;
let isRateLimited = false;

async function getFlairForPosts(posts) {
    // Simulate an API call that adds a tech-themed flair to each post
    const flairs = ['💻 Dev Pick', '🖥️ Trending', '🧑‍💻 Coder Fav', '🚀 Launch', '🔧 Tool'];
    return posts.map(post => ({
        ...post,
        flair: flairs[Math.floor(Math.random() * flairs.length)]
    }));
}

async function getFeatureForPosts(posts) {
    // Simulate an API call that adds a tech feature to each post
    const features = [
        '🤖 AI Powered',
        '☁️ Cloud Ready',
        '🔓 Open Source',
        '🛡️ Secure',
        '⚡ High Performance',
        '📱 Mobile Friendly',
        '🌐 Web Enabled',
        '🧠 Smart Logic',
        '🔌 API Integrated',
        '🕸️ IoT Compatible'
    ];
    return posts.map(post => ({
        ...post,
        feature: features[Math.floor(Math.random() * features.length)]
    }));
}

function makePostsTech(posts) {
    // Replace title and body with tech-related content
    const techTitles = [
        'Building Scalable APIs',
        'Introduction to Cloud Computing',
        'Mastering JavaScript Frameworks',
        'AI and Machine Learning Trends',
        'Cybersecurity Best Practices',
        'DevOps Automation Tools',
        'Mobile App Development Tips',
        'Open Source Contributions',
        'Web3 and Blockchain',
        'IoT: The Next Frontier'
    ];
    const techBodies = [
        'Explore the latest in scalable backend architectures and RESTful API design.',
        'A beginner’s guide to leveraging the power of the cloud for your projects.',
        'Tips and tricks for working with React, Vue, Angular, and more.',
        'How AI is transforming industries and what to expect next.',
        'Protect your data and infrastructure with these security strategies.',
        'Streamline your workflow with the newest DevOps tools and practices.',
        'Key considerations for building robust and user-friendly mobile apps.',
        'Why contributing to open source can boost your career and skills.',
        'Understanding the basics and potential of blockchain technology.',
        'How IoT devices are changing the way we interact with the world.'
    ];
    return posts.map((post, i) => ({
        ...post,
        title: techTitles[i % techTitles.length] + ` (Post #${post.id})`,
        body: techBodies[i % techBodies.length]
    }));
}

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
        let posts = await response.json();
        posts = makePostsTech(posts);
        posts = await getFlairForPosts(posts);
        posts = await getFeatureForPosts(posts);
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
        postDiv.innerHTML = `<span style='font-size:1.2em;'>${post.flair}</span> <span style='font-size:1.2em; margin-left:10px;'>${post.feature}</span> <h3>${post.title}</h3><p>${post.body}</p>`;
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
