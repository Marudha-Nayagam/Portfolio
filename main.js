
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
