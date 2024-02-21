// Grab the url of current page user is on
const productUrl = window.location.href;
fetch(productUrl).then(response => {
    if (!response.ok) {
        throw new Error('Response not ok');
    }
    return response.text(); // Grab HTML of product page
}).then(html => {
    // Begin parsing HTML
    // Grab each review from reviews of current product
    const reviewElements = document.querySelectorAll('.ebay-review-section-r');
    const reviews = [];
    // For each review element in reviewElements
    reviewElements.forEach(reviewElement => {
        // Grab text content of current review
        const contentElement = reviewElement.querySelector('.review-item-content');
        // If content exists, push back text onto reviews
        if (contentElement){
            reviews.push(contentElement.textContent.trim());
        }
    });
});

// Simply speaking, we now have our reviews in some form
//  Time to feed them to the machine god