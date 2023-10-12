document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map', {
        center: [8.218960988257237, -62.818975274847546],
        zoom: 16,
        maxZoom: 22,
    });    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

    var homesData = [
        {
            coordinates: [
                [8.218985999488995, -62.81899765921186],  // Esquina superior izquierda
                [8.21907094859234, -62.818932615646474],  // Esquina superior derecha
                [8.219033119697011, -62.818878300916616],  // Esquina inferior derecha
                [8.218946843255555, -62.818944685586445]   // Esquina inferior izquierda
            ],
            popupContent: "Maritza Gordillo \n 🍎152 🏡29"
        },
        {
            coordinates: [
                [8.218947460992212, -62.818942263315286],
                [8.219033971517339, -62.81887093010351],
                [8.21898922469635, -62.818811653209224],
                [8.21890171978739, -62.818878967648494]
            ],
            popupContent: "Eduardo Nole \n 🍎152 🏡28"
        },
        {
            coordinates: [
                [8.218876485301532, -62.81887042487769],
                [8.218965845071981, -62.81879983678153],
                [8.218922789912368, -62.818745664521686],
                [8.218834242493942, -62.81881625261785]
            ],
            popupContent: "Richard Rodríguez \n 🍎152 🏡27"
        },
        {
            coordinates: [
                [8.218832617770468, -62.81879162886337],
                [8.218909792127407, -62.818729248685365],
                [8.21886836168502, -62.81867343484189],
                [8.218786313149112, -62.8187358150199]
            ],
            popupContent: "Santa Marina \n 🍎152 🏡26"
        },
        {
            coordinates: [
                [8.218754631036635, -62.8187358150199],
                [8.218859425706688, -62.81865783979739],
                [8.218814745811985, -62.81859710120303],
                [8.218710763492112, -62.81867507642552]
            ],
            popupContent: "Edgar Peña \n 🍎152 🏡25"
        },
        {
            coordinates: [
                [],
                [],
                [],
                []
            ],
            popupContent: "🍎152 🏡26"
        },
        {
            coordinates: [
                [],
                [],
                [],
                []
            ],
            popupContent: "🍎152 🏡26"
        },
        {
            coordinates: [
                [],
                [],
                [],
                []
            ],
            popupContent: "🍎152 🏡26"
        },
    ];

    homesData.forEach(function (data) {
        var rectangle = L.polygon(data.coordinates).addTo(map);
        rectangle.on('click', function (event) {
            var popupContent = data.popupContent.replace(/\n/g, '<br />'); // Convierte '\n' en etiquetas <br> de HTML
            rectangle.bindPopup(popupContent).openPopup();
        });
    });
});
