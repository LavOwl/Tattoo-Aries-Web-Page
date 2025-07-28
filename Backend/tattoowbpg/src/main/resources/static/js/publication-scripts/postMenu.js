function deletePost(title, button){
    const csrfToken = document.querySelector('meta[name="_csrf"]').content;
    const csrfHeader = document.querySelector('meta[name="_csrf_header"]').content;
    fetch(`/remove`, {
        method: 'POST',
        headers: {
            [csrfHeader]: csrfToken,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ title })
    })
    .then(response => {
        if (response.ok) {
            const card = button.closest('.card');
            if (card) {
                card.remove();
            }
        } else {
            alert('Failed to delete');
        }
    });
}