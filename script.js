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

// 팝업 js
function onClick(){
    document.querySelector(".container").classList.add('modal-open');
}

function onClose(){
    document.querySelector(".container").classList.remove('modal-open');
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[0], model);

        model.setAttribute('animation-mixer', '');

        // $(".js-click-modal").on("click", function(){
        //     alert("clicked.");
        // })
        
        document.querySelector('button[data-action="dogam"]').addEventListener('click', onClick);
        document.querySelector(".js-close-modal").addEventListener('click',onClose);

        scene.appendChild(model);
    });
}