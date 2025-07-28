function fetchImages(type, page) {
    fetch(`/api/images?type=${encodeURIComponent(type)}&page=${page}`)
        .then(response => response.json())
        .then(images => {
            appendImages(images);
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