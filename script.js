const blogPosts = [
    {
        title: "The Future of AI in Tech",
        date: "July 20, 2024",
        content: "Artificial Intelligence is revolutionizing the tech industry. From smart homes to autonomous vehicles, AI is becoming an integral part of our daily lives..."
    },
    {
        title: "5G: The Next Generation of Mobile Networks",
        date: "July 18, 2024",
        content: "5G technology promises to bring faster speeds, lower latency, and more reliable connections to mobile users. But what does this mean for the average consumer?"
    },
    {
        title: "Cybersecurity in the Age of IoT",
        date: "July 15, 2024",
        content: "As more devices become connected to the Internet of Things (IoT), cybersecurity concerns are on the rise. Here's what you need to know to protect your smart devices..."
    }
];

function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', displayBlogPosts);