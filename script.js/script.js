document.addEventListener('DOMContentLoaded', function () {
   const reviewsContainer = document.getElementById('reviews-container');
    
    //Automatically create the review form on page load
    createReviewForm();

    function createReviewForm() {
        const form = document.createElement('form');
        form.id = 'add-review-form';

        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Write your review here...';

        const starRating = document.createElement('div');
        starRating.className = 'star-rating';
        starRating.id = 'star-rating';
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.dataset.rating = i;
            star.innerHTML = '&#9733;';
            starRating.appendChild(star);
        }

        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.textContent = 'Submit Review';

        submitBtn.addEventListener('click', function () {
            const reviewText = textarea.value;
            const rating = document.querySelector('.star.active').dataset.rating;

            if (reviewText.trim() !== '') {
                addReview(reviewText, rating);
                form.style.display = 'none';
                textarea.value = '';
            }
        });

        form.appendChild(textarea);
        form.appendChild(starRating);
        form.appendChild(submitBtn);

        reviewsContainer.appendChild(form);

        const stars = form.querySelectorAll('.star');

        stars.forEach((star) => {
            star.addEventListener('mouseover', function () {
                highlightStars(star.dataset.rating);
            });

            star.addEventListener('mouseout', function () {
                highlightStars(selectedRating);
            });

            star.addEventListener('click', function () {
                selectedRating = star.dataset.rating;
                highlightStars(selectedRating);
            });
        });
    }

    function addReview(reviewText, rating) {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = `<p>${reviewText}</p><p class="review-rating">Rating: ${rating}</p>`;

        reviewsContainer.appendChild(reviewDiv);
    }

    let selectedRating = 0;

    function highlightStars(rating) {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star) => {
            star.classList.remove('active');
            if (star.dataset.rating <= rating) {
                star.classList.add('active');
            }
        });
    }
    function getSelectedRating() {
        const activeStar = document.querySelector('.star.active');
        return activeStar ? activeStar.dataset.rating : null;
    }
});



document.addEventListener('DOMContentLoaded', function() {

    const openContactButton = document.querySelector('.nav-button');
    const contactForm = document.getElementById('contactForm');


   openContactButton.addEventListener('click', function(event) {
        event.preventDefault();

        contactForm.style.display = (contactFormSection.style.display == 'block') ? 'none' : 'block';
        
        document.getElementById('contactFormSection').scrollIntoView({
            behavior: 'smooth'
        });
    }); 
});


document.getElementById('scrollParagraph').addEventListener('click', function () {
    document.getElementById('targetParagraph').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('nav li a').addEventListener('click', function(event) {
    event.preventDefault();
});

document.querySelector('#home-link').addEventListener('click', function() {
    window.location.href = 'index.html';
});
