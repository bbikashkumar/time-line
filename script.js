const timelineItems = document.querySelectorAll('.timeline-item');
const contentTitle = document.querySelector('.timeline-title');
const contentDescription = document.querySelector('.timeline-description');
const contentImage = document.querySelector('.timeline-image');
const timelineContent = document.querySelector('.timeline-content');

// Function to smoothly update content
function updateContent(date) {
    // Temporarily hide the content for the transition
    timelineContent.style.opacity = '0';
    contentTitle.style.opacity = '0';
    contentDescription.style.opacity = '0';

    setTimeout(() => {
        // Update content based on the selected timeline item
        if (date === 'April 2018') {
            contentTitle.innerText = 'April 2018';
            contentDescription.innerText = "We are one of India's leading drone firms in providing end-to-end Drone Solutions.";
            contentImage.src = 'images/3cd4f45205f787af1e8d48607f225ba2.jpg'; // Change image
        } else if (date === 'April 2019') {
            contentTitle.innerText = 'April 2019';
            contentDescription.innerText = "We expanded our operations globally.";
            contentImage.src = 'images/240_F_628610631_TwJCmKqyVvNXuWycpqDtGyNSB8gRXILg.jpg'; // Change image
        } else if (date === 'April 2020') {
            contentTitle.innerText = 'April 2020';
            contentDescription.innerText = "We launched our first autonomous drone.";
            contentImage.src = 'images/360_F_271767114_RKqAc6N9rLHJLUtm3K38HxInaPIurzz8.jpg'; // Change image
        } else if (date === 'April 2021') {
            contentTitle.innerText = 'April 2021';
            contentDescription.innerText = "We introduced AI-powered drone solutions.";
            contentImage.src = 'images/images (1).jpg'; // Change image
        } else if (date === 'April 2022') {
            contentTitle.innerText = 'April 2022';
            contentDescription.innerText = "We achieved a milestone of 1 million drone flights.";
            contentImage.src = 'images/photo-1520539294759-590f20a6b6e2.jpg'; // Change image
        } else if (date === 'April 2023') {
            contentTitle.innerText = 'April 2023';
            contentDescription.innerText = "We launched our sustainable drone initiative.";
            contentImage.src = 'images/images.jpg'; // Change image
        } else if (date === 'April 2024') {
            contentTitle.innerText = 'April 2024';
            contentDescription.innerText = "We continue to lead in drone technology innovation.";
            contentImage.src = 'images/Leonardo_Phoenix_A_serene_dark_nighttime_landscape_featuring_t_3.jpg'; // Change image
        }

        // Show the content after updating
        timelineContent.style.opacity = '1';
        contentTitle.style.opacity = '1';
        contentDescription.style.opacity = '1';
    }, 300); // Adjust this delay if needed
}

// Event listeners for timeline items
timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.timeline-item.active').classList.remove('active');
        item.classList.add('active');
        
        // Get the selected date
        const date = item.getAttribute('data-date');
        
        // Call updateContent with the selected date
        updateContent(date);
    });
});
