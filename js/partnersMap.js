ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            behaviors: ['default', 'scrollZoom']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        clusterer = new ymaps.Clusterer({
            preset: 'islands#blackClusterIcons',
        }),

        getPointData = function (point) {
            return {
                iconCaption: point.namePartner,
                balloonContentHeader: point.namePartner,
                balloonContentBody: point.contactsPartner,
                balloonContentFooter: point.addressPartner,
            };
        },

        getPointOptions = function () {
            return {
                preset: 'islands#blackDotIcon'
            };
        },
        points = [
            {
                namePartner: 'БауЛогик',
                coordinatesPartner: [48.481645, 135.123795],
                contactsPartner: '<a href="mailto:office@tthru.com">office@tthru.com</a> <br> <a href="tel:+74212753015">+7(421-2) 753015</a>',
                addressPartner: 'г. Хабаровск, ул. Луговая, 10, оф. 17'
            },
            {
                namePartner: 'Стелмаркет',
                coordinatesPartner: [55.651826, 37.553774],
                contactsPartner: '',
                addressPartner: 'ул. Обручева, д. 35, корп. 2'
            },
            {
                namePartner: 'Стелмаркет',
                coordinatesPartner: [55.645817, 37.606379],
                contactsPartner: '',
                addressPartner: 'Симферопольский б-р, д. 31'
            },
            {
                namePartner: 'TECE market',
                coordinatesPartner: [55.680707, 37.715830],
                contactsPartner: '',
                addressPartner: 'ул. Гурьянова, 30, оф. 118 ТК «Сёрф Плаза»'
            },
            {
                namePartner: 'Сантехбокс',
                coordinatesPartner: [55.748848, 37.886196],
                contactsPartner: '<a href="tel:+79263421848">+7(926)342-18-48</a> <br> <a href="tel:+79266525455">+7(926)652-54-55</a>',
                addressPartner: 'Носовихинское шоссе, вл. 4 стр. 2'
            },
            {
                namePartner: 'ТехникХаус',
                coordinatesPartner: [55.865849, 37.674561],
                contactsPartner: '<a href="tel:+74954717181">+7(495)471-71-81</a> <br> <a href="tel:+79056133442">+7(905)613-34-42</a>',
                addressPartner: 'Ленская ул., д. 2/21 (этаж цокольный)'
            }
        ],
        geoObjects = [];

    for(var i = 0, len = points.length; i < len; i++) {
        geoObjects[i] = new ymaps.Placemark(points[i].coordinatesPartner, getPointData(points[i]), getPointOptions());
    }

    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);

    myMap.setBounds(clusterer.getBounds(), {
        checkZoomRange: true
    });
});