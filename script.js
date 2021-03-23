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
};

let usaengArr = [["A1", "교육학과"], ["A2", "수학교육과"], ["A3", "컴퓨터교육과"],
["A4", "한문교육과"], ["A5", "소비자가족학과"], ["A6", "아동청소년학과"],
["B1", "경영학과"], ["C1", "러시아어문학과"], ["C2", "한문학과"], ["C3", "철학과"],
["C4", "중어중문학과"], ["C5", "불어불문학과"], ["C6", "국어국문학과"], ["C7", "사학과"],
["C8", "문헌정보학과"], ["C9", "경제학과"], ["D1", "미술학과"], ["D2", "영상학과"],
["D3", "연기예술학과"], ["D4", "의상학과"], ["D5", "무용학과"], ["D6", "디자인학과"],
["E1", "글로벌리더학과"], ["F1", "글로벌경영"], ["F2", "글로벌경제"]]


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

        
        document.querySelector('button[data-action="dogam"]').addEventListener('click', onClick);
        document.querySelector(".js-close-modal").addEventListener('click',onClose);

        scene.appendChild(model);
    });
}