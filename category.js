// Book data with categories
const books = [
    // Nepali
    {
        title: "Palpasa Café",
        author: "Narayan Wagle",
        category: "Nepali",
        price: 320,
        rating: 4.8,
        img: "https://covers.openlibrary.org/b/id/8231998-L.jpg",
        info: "A bestselling Nepali novel depicting the Nepalese Civil War through romance and hope.",
        link: "https://en.wikipedia.org/wiki/Palpasa_Cafe"
    },
    {
        title: "Karnali Blues",
        author: "Buddhisagar",
        category: "Nepali",
        price: 370,
        rating: 4.9,
        img: "https://covers.openlibrary.org/b/id/8373570-L.jpg",
        info: "A powerful coming-of-age story set in rural Nepal.",
        link: "https://en.wikipedia.org/wiki/Karnali_Blues"
    },
    {
        title: "Seto Dharti",
        author: "Amar Neupane",
        category: "Nepali",
        price: 290,
        rating: 4.7,
        img: "https://covers.openlibrary.org/b/id/8373574-L.jpg",
        info: "A touching story about child widowhood in Nepal.",
        link: "https://en.wikipedia.org/wiki/Seto_Dharti"
    },
    // Hindu Epics
    {
        title: "Bhagavad Gita",
        author: "Vyasa",
        category: "Hindu Epics",
        price: 299,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        info: "The song of God, a spiritual classic and timeless wisdom.",
        link: "https://en.wikipedia.org/wiki/Bhagavad_Gita"
    },
    {
        title: "Ramayan",
        author: "Valmiki",
        category: "Hindu Epics",
        price: 349,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        info: "The epic tale of Lord Rama, a story of virtue and devotion.",
        link: "https://en.wikipedia.org/wiki/Ramayana"
    },
    {
        title: "Mahabharat",
        author: "Vyasa",
        category: "Hindu Epics",
        price: 399,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
        info: "India's greatest epic, filled with drama, philosophy and war.",
        link: "https://en.wikipedia.org/wiki/Mahabharata"
    },
    // Self Help
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Self Help",
        price: 220,
        rating: 4.5,
        img: "https://covers.openlibrary.org/b/id/8155431-L.jpg",
        info: "A classic self-help book about the power of thought for wealth and success.",
        link: "https://en.wikipedia.org/wiki/Think_and_Grow_Rich"
    },
    {
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        category: "Self Help",
        price: 210,
        rating: 4.6,
        img: "https://covers.openlibrary.org/b/id/10958368-L.jpg",
        info: "Unlock your potential with the power of your mind.",
        link: "https://en.wikipedia.org/wiki/The_Power_of_Your_Subconscious_Mind"
    },
    // Children
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        category: "Children",
        price: 500,
        rating: 4.9,
        img: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
        info: "The magical start of the Harry Potter series.",
        link: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone"
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        category: "Children",
        price: 180,
        rating: 4.8,
        img: "https://covers.openlibrary.org/b/id/8105047-L.jpg",
        info: "A poetic tale about a young prince exploring the universe.",
        link: "https://en.wikipedia.org/wiki/The_Little_Prince"
    },
    // Science Fiction
    {
        title: "The Martian",
        author: "Andy Weir",
        category: "Science Fiction",
        price: 330,
        rating: 4.7,
        img: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        info: "An astronaut's struggle for survival on Mars.",
        link: "https://en.wikipedia.org/wiki/The_Martian_(Weir_novel)"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        category: "Science Fiction",
        price: 380,
        rating: 4.6,
        img: "https://covers.openlibrary.org/b/id/8104616-L.jpg",
        info: "A science fiction masterpiece set on the desert planet Arrakis.",
        link: "https://en.wikipedia.org/wiki/Dune_(novel)"
    },
];

// Unique categories with icons
const categories = [
    { name: "All", icon: "fa-th-large" },
    { name: "Nepali", icon: "fa-mountain" },
    { name: "Hindu Epics", icon: "fa-om" },
    { name: "Self Help", icon: "fa-lightbulb" },
    { name: "Children", icon: "fa-child" },
    { name: "Science Fiction", icon: "fa-rocket" },
];

// Render category buttons
function renderCategories(selected = "All") {
    const catList = document.getElementById('categoryList');
    catList.innerHTML = '';
    categories.forEach(cat => {
        catList.innerHTML += `
            <button class="category-btn${cat.name === selected ? ' selected' : ''}" data-category="${cat.name}">
                <i class="fas ${cat.icon}"></i> ${cat.name}
            </button>
        `;
    });
}

// Render books
function renderBooks(filteredBooks) {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = '';
    if (filteredBooks.length === 0) {
        grid.innerHTML = `<div class="no-results">
            <i class="fas fa-search fa-2x" style="color:#006fe6; margin-bottom:10px;"></i>
            <p>No books found. Try a different keyword or category!</p>
        </div>`;
        return;
    }
    filteredBooks.forEach(book => {
        grid.innerHTML += `
        <div class="book-card" tabindex="0">
            <img class="book-img" src="${book.img}" alt="${book.title} cover">
            <div class="book-title">${book.title}</div>
            <div class="book-author"><i class="fas fa-user"></i> ${book.author}</div>
            <div class="book-info">${book.info}</div>
            <div class="book-meta">
                <div class="book-rating" title="Rating">
                    ${getStars(book.rating)} ${book.rating}
                </div>
                <div class="book-price"><i class="fas fa-tag"></i> ₹${book.price}</div>
            </div>
            <a href="${book.link}" class="book-link" target="_blank" rel="noopener">
                <i class="fas fa-link"></i> Details
            </a>
        </div>
        `;
    });
}

// Helper to get stars for rating
function getStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars > 0.4;
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
    return stars;
}

// Filtering logic
let currentCategory = "All";
let currentQuery = "";

// Render initial
renderCategories();
renderBooks(books);

// Category click
document.getElementById('categoryList').addEventListener('click', function(e) {
    if (e.target.closest('.category-btn')) {
        const cat = e.target.closest('.category-btn').getAttribute('data-category');
        currentCategory = cat;
        renderCategories(cat);
        filterAndRender();
    }
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function filterAndRender() {
    let filtered = books;
    if (currentCategory !== "All") {
        filtered = filtered.filter(b => b.category === currentCategory);
    }
    if (currentQuery) {
        const q = currentQuery.toLowerCase();
        filtered = filtered.filter(book =>
            book.title.toLowerCase().includes(q) ||
            book.author.toLowerCase().includes(q) ||
            book.info.toLowerCase().includes(q)
        );
    }
    renderBooks(filtered);
}

searchBtn.addEventListener('click', () => {
    currentQuery = searchInput.value.trim();
    filterAndRender();
});
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        currentQuery = searchInput.value.trim();
        filterAndRender();
    }
});

// Animation for card on hover/focus
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('book-card')) {
        e.target.style.transform = 'scale(1.04) translateY(-7px)';
        e.target.style.boxShadow = '0 10px 32px #006fe61a';
    }
});
document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('book-card')) {
        e.target.style.transform = '';
        e.target.style.boxShadow = '';
    }
});
document.addEventListener('focusin', function(e) {
    if (e.target.classList.contains('book-card')) {
        e.target.style.transform = 'scale(1.04) translateY(-7px)';
        e.target.style.boxShadow = '0 10px 32px #006fe61a';
    }
});
document.addEventListener('focusout', function(e) {
    if (e.target.classList.contains('book-card')) {
        e.target.style.transform = '';
        e.target.style.boxShadow = '';
    }
});