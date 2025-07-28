function showUploadForm() {
    darkBackground.style.display = 'block';
    uploadForm.style.display = 'flex';
}

function hideUploadForm() {
    darkBackground.style.display = 'none';
    uploadForm.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    darkBackground = document.querySelector('.darkBackground');
    uploadForm = document.querySelector('.uploadForm');
    transparentCard = document.querySelector('.transparent-card');

    transparentCard.addEventListener('click', function(event) {
        showUploadForm();
    });

    darkBackground.addEventListener('click', function(event) {
        hideUploadForm();
    });
});