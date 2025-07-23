function fetchImages(type, page) {
    fetch(`/api/images?type=${encodeURIComponent(type)}&page=${page}`)
        .then(response => response.json())
        .then(images => {
            appendImages(images);
            //const skeleton = document.querySelectorAll('li:has(.shimmer)');
            //skeleton.forEach(card => card.style.display = 'none');
            setTimeout(() => document.getElementById("-loading-skeleton").style.opacity = 0, 1000);
            setTimeout(() => {document.getElementById("-loading-skeleton").style.display = "none"; updateButtons();}, 2000);
            
        })
        .catch(error => console.error('Error fetching images:', error));
}

function appendImages(images){
    const list = document.getElementById('' + '-list');
    const fragment = document.createDocumentFragment();
    images.forEach(image => {
        const li = document.createElement('li');
        li.className = 'tattooListElement';

        const div = document.createElement('div');
        div.className = 'card';

        const img = document.createElement('img');
        img.className = 'tattooImg';
        img.src = 'data:image/jpeg;base64,'+ image.image;
        img.alt = 'Tattoo Image';

        const textContainer = document.createElement('div');
        textContainer.className = 'textcontainer';

        const h3 = document.createElement('h3');
        h3.textContent = image.title;

        const p = document.createElement('p');
        p.textContent = image.description;

        textContainer.appendChild(h3);
        textContainer.appendChild(p);
        div.appendChild(img);
        div.appendChild(textContainer);
        li.appendChild(div);

        fragment.appendChild(li);
    });
    requestIdleCallback(() => list.appendChild(fragment));
}

fetchImages("1", 0);
/*
window.onscroll = function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // User reached the bottom, load the next page
        let currentPage = document.getElementById('currentPage').value;
        fetchImages(currentPage);
        document.getElementById('currentPage').value = parseInt(currentPage) + 1;
    }
};*/