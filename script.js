document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav-items').classList.toggle('active');
});


document.querySelectorAll('.nav-items li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-items').classList.remove('active');
    });
});


document.querySelector('.search').addEventListener('click', function() {
    let query = prompt("What do you want to search?");
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});
const slider = document.getElementById('whyChooseUsContent');
const prevBtn = document.querySelector('.why-choose-us-nav.prev');
const nextBtn = document.querySelector('.why-choose-us-nav.next');
let scrollAmount = 0;
const cardWidth = 360; 

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
}); 
const coachSlider = document.getElementById('ourCoachesContent');
const coachPrevBtn = document.querySelector('.our-coaches-nav.prev');
const coachNextBtn = document.querySelector('.our-coaches-nav.next');
const coachCardWidth = 340; 

coachNextBtn.addEventListener('click', () => {
    coachSlider.scrollBy({ left: coachCardWidth, behavior: 'smooth' });
});
coachPrevBtn.addEventListener('click', () => {
    coachSlider.scrollBy({ left: -coachCardWidth, behavior: 'smooth' });
});

