// Add any JavaScript you need for handling dynamics such as pop-ups
document.addEventListener('DOMContentLoaded', function () {
    const popUpContainer = document.querySelector('.pop-up-container');

    // Array of possible testimonials for each product
    const testimonials = [
        { 
            img: 'course.jpg', 
            responses: [
                "This course completely changed my approach to business!",
                "I made my first sale within a week of taking this course!",
                "Best investment I've ever made, highly recommend.",
                "I feel so much more confident in my marketing skills now!",
                "The insights in this course are worth 10x the price!"
            ],
            names: ['Robert Dawson', 'John Smith', 'Alice Johnson', 'Michael T.', 'Sarah B.']
        },
        { 
            img: 'plushies.jpg', 
            responses: [
                "This plushie is even cuter in real life!",
                "Soft, adorable, and totally worth the price!",
                "Got this for my friend, and she absolutely loves it!",
                "Best plushie I’ve ever bought. Super high quality!",
                "My little sister won’t let go of this plushie, it's perfect!"
            ],
            names: ['Emily R.', 'Sophia L.', 'Lucas M.', 'David A.', 'Jessica F.']
        }
    ];

    function updateTestimonial() {
        popUpContainer.innerHTML = '';

        // Randomly pick a testimonial category (course or plushie)
        const testimonialIndex = Math.floor(Math.random() * testimonials.length);
        const testimonial = testimonials[testimonialIndex];

        // Randomly pick a response and a name
        const responseIndex = Math.floor(Math.random() * testimonial.responses.length);
        const nameIndex = Math.floor(Math.random() * testimonial.names.length);

        // Create testimonial popup
        const div = document.createElement('div');
        div.className = 'testimonial-popup';
        div.innerHTML = `<img src="${testimonial.img}" alt="Testimonial Image">
                         <div>
                             <p style="font-size: 12px;">${testimonial.responses[responseIndex]}</p>
                             <p style="font-size: 10px;"><em>- ${testimonial.names[nameIndex]}</em></p>
                         </div>`;
        popUpContainer.appendChild(div);

        setTimeout(updateTestimonial, 3000); // Change every 3 seconds
    }

    updateTestimonial(); // Initial call to start the cycle
});

// Particle Animation Background
const canvas = document.createElement("canvas");
canvas.id = "particle-canvas";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    
    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 100; i > 0; i--) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animateParticles();
