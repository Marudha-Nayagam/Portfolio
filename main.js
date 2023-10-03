document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // You can add logic here to handle form submission, such as sending an email or storing data in a database.
    // For now, let's just log the form data to the console.
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // Optionally, you can display a confirmation message to the user.
    alert('Message sent! Thank you.');
});


document.addEventListener('DOMContentLoaded', function () {
    // Project Modals
    const projectModals = document.querySelectorAll('.view-project-btn');

    projectModals.forEach((modalBtn, index) => {
        modalBtn.addEventListener('click', function () {
            const projectId = index + 1; // Assuming your project modals are numbered sequentially
            const modalId = `#projectModal${projectId}`;

            // Display the modal
            $(modalId).modal('show');
        });
    });
});
