window.onload = () => {
    const button = document.querySelector('.js-click-modal');

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                lat: 37.313923,
                lng: 127.078560,
            },
        },
    ];
}

var models = [
    {
        url: './assets/magnemite/scene.gltf',
        scale: '0.5 0.5 0.5',
        info: 'Magnemite, Lv. 5, HP 10/10',
        rotation: '0 180 0',
    }
];

var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    // div.innerText = model.info;
};

function popup(){
    alert('clicked!');
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        // document.querySelector('.js-click-modal').addEventListener('click',popup);
        $(".js-click-modal").on("click", function(){
            alert("clicked.");
        })
        
        scene.appendChild(model);
    });
}