// ১. প্রোডাক্ট ডাটাবেস
const products = [
    { id: 1, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 2, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 3, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 4, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 5, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 6, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 7, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 8, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 9, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 10, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 11, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 12, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 13, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 14, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 15, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 16, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 17, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 18, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 1, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 2, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 3, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 4, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 5, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 6, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 7, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 8, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 9, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 10, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 11, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 12, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 13, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 14, name: "Smart Watch Z10", price: 3500, vendor: "Gadget BD", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 15, name: "Wireless Headphones", price: 2200, vendor: "Music Store", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 16, name: "Minimalist Leather Wallet", price: 1200, vendor: "Leather Craft", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { id: 17, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
    { id: 18, name: "Organic Green Tea", price: 450, vendor: "Nature Farm", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
];

let cart = [];
let currentPage = 1;
const productsPerPage = 9; 

// ২. প্রোডাক্ট রেন্ডার ফাংশন
function displayProducts(filteredList, page = 1) {
    const container = document.getElementById('product-container');
    const paginationContainer = document.getElementById('pagination-controls');
    if (!container) return;

    container.innerHTML = ""; 

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedItems = filteredList.slice(startIndex, endIndex);

   paginatedItems.forEach(p => {
    container.innerHTML += `
        <div class="product-card">
            <div class="card-glow"></div>
            <div class="product-inner-content">
                <div class="product-image-section">
                    <img src="${p.img}" class="main-img" alt="${p.name}">
                    <div class="circle-bg"></div>
                </div>
                <div class="product-info">
                    <span class="vendor-tag">${p.vendor}</span>
                    <h3 class="product-title">${p.name}</h3>
                    <p class="price-tag">৳ ${p.price}</p>
                </div>
                <button class="cart-btn-advanced" onclick="addToCart(${p.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
});
    setupPagination(filteredList, paginationContainer, page);
}


// ৩. পেজিনেশন বাটন তৈরি
function setupPagination(items, wrapper, page) {
    if (!wrapper) return;
    wrapper.innerHTML = "";
    const pageCount = Math.ceil(items.length / productsPerPage);
    if (pageCount <= 1) return;

    // ১. উইন্ডো ক্যালকুলেশন (কত নম্বর থেকে শুরু হবে)
    // যদি পেজ ৫ হয়, তবে দেখাবে ২ ৩ ৪ ৫ (সর্বোচ্চ ৪টি বাটন)
    let startPage = Math.max(1, page - 3); 
    let endPage = Math.min(pageCount, startPage + 3);

    // অ্যাডজাস্টমেন্ট: যদি শেষের দিকে ৪টি বাটন না থাকে তবে শুরুর নম্বর কমিয়ে আনা
    if (endPage - startPage < 3) {
        startPage = Math.max(1, endPage - 3);
    }

    // ২. লুপ চালিয়ে পেজ নম্বর বাটন তৈরি
    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.style.cssText = `
            padding: 10px 18px; margin: 0 5px; border: 1px solid #f85606; 
            background: ${i === page ? '#f85606' : 'white'}; 
            color: ${i === page ? 'white' : '#f85606'}; 
            cursor: pointer; border-radius: 6px; font-weight: bold;
        `;

        btn.onclick = () => {
            currentPage = i;
            displayProducts(items, currentPage);
            document.getElementById('product-section').scrollIntoView({ behavior: 'smooth' });
        };
        wrapper.appendChild(btn);
    }

    // ৩. Next অথবা Finish বাটন লজিক
    if (page < pageCount) {
        const nextBtn = document.createElement('button');
        
        // যদি শেষ পেজের ঠিক আগের পেজে থাকি, তবে 'Finish' দেখাবে অথবা পেজ নম্বর দেখাবে
        nextBtn.innerText = (page === pageCount - 1) ? "Finish" : "Next »";
        
        nextBtn.style.cssText = `
            padding: 10px 18px; margin: 0 5px; border: 1px solid #e17a05; 
            background: white; color: #e17a05; 
            cursor: pointer; border-radius: 6px; font-weight: bold;
        `;

        nextBtn.onclick = () => {
            currentPage++;
            displayProducts(items, currentPage);
            document.getElementById('product-section').scrollIntoView({ behavior: 'smooth' });
        };
        wrapper.appendChild(nextBtn);
    }
}

// ৪. কার্ট লজিক ও UI আপডেট
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartCountSide = document.getElementById('cart-count-side');
    const cartList = document.getElementById('cart-items-list');
    const totalDisplay = document.getElementById('total-price');

    if(cartCount) cartCount.innerText = cart.length;
    if(cartCountSide) cartCountSide.innerText = cart.length;
    
    if(!cartList || !totalDisplay) return;

    if(cart.length === 0) {
        cartList.innerHTML = '<p style="text-align:center; padding:20px;">Your cart is empty.</p>';
        totalDisplay.innerText = "0";
        return;
    }

    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item) => {
        total += item.price;
        cartList.innerHTML += `
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                <span>${item.name}</span>
                <span>৳${item.price}</span>
            </div>
        `;
    });
    totalDisplay.innerText = total;
}

// ৫. কার্ট ও চেকআউট টগল
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const overlay = document.getElementById('cartOverlay');
    if(!cartModal) return;

    cartModal.classList.toggle('open');
    
    if (cartModal.classList.contains('open')) {
        cartModal.style.display = "block";
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    } else {
        setTimeout(() => {
            if (!cartModal.classList.contains('open')) cartModal.style.display = "none";
        }, 300);
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }
}

function openCheckout() {
    if (cart.length === 0) {
        alert("Please add items to your cart first!");
        return;
    }
    toggleCart(); 
    document.getElementById('checkoutModal').style.display = "block";

    const summaryList = document.getElementById('checkout-summary-list');
    const checkoutTotal = document.getElementById('checkout-total');
    let total = 0;
    
    summaryList.innerHTML = cart.map(item => {
        total += item.price;
        return `<div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                    <span>${item.name}</span>
                    <span>৳${item.price}</span>
                </div>`;
    }).join('');
    
    checkoutTotal.innerText = total;
}

function closeCheckout() {
    document.getElementById('checkoutModal').style.display = "none";
    document.body.style.overflow = 'auto';
}

// ৬. সার্চ এবং ট্যাব লজিক
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const term = searchInput.value.toLowerCase();
                const results = products.filter(p => 
                    p.name.toLowerCase().includes(term) || 
                    p.vendor.toLowerCase().includes(term)
                );
                currentPage = 1;
                displayProducts(results, currentPage);
                const productSection = document.getElementById('product-section');
                if (productSection && term.trim() !== "") {
                    productSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    displayProducts(products, currentPage);
});

window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { // ৫০ পিক্সেল নিচে নামলেই পরিবর্তন হবে
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });  
// ৭. পপ-আপ কন্ট্রোল
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particlesArray;

// ক্যানভাস সাইজ ঠিক করা
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // প্রতিটি পার্টিকেল ড্র করা
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#f85606'; // আপনার ব্র্যান্ডের অরেঞ্জ কালার
        ctx.fill();
    }
    // পার্টিকেল মুভমেন্ট চেক করা
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

// পার্টিকেল সেটআপ
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        let color = '#f85606';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// লাইন দিয়ে কানেক্ট করা (Expert Look)
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = `rgba(248, 86, 6, ${opacityValue})`; // অরেঞ্জ কানেক্টিং লাইন
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// এনিমেশন লুপ
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

init();
animate();

// উইন্ডো রিসাইজ করলে এডজাস্ট করা
window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

fetch('Our_Service.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('service-content').innerHTML = data;
    })
    .catch(error => console.error('Error loading the service file:', error));
