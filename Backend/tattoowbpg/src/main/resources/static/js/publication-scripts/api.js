document.querySelector('.uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const actionUrl = form.getAttribute('action');

    fetch(actionUrl, {
    method: 'POST',
    body: formData
    })
    .then(response => response.text())
    .then(data => {
        clearImage();
        hideUploadForm();
    })
    .catch(error => {
        console.error('Error al subir:', error);
    });
});