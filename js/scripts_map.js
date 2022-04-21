$(function() {
    var mapStyle = [{'featureType': 'administrative', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#444444'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'color': '#f2f2f2'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'road', 'elementType': 'all', 'stylers': [{'saturation': -100}, {'lightness': 45}]}, {'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{'visibility': 'simplified'}]}, {'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'color': '#4f595d'}, {'visibility': 'on'}]}];

    // Create the map
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 4,
        styles: mapStyle,
        center: new google.maps.LatLng(49.04, 2.50)
    });

    // Add a marker
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(49.04, 2.50)
    });

    var info = new SnazzyInfoWindow({
        marker: marker,
        content: '<h1>Лувр</h1>' +
                 '<p>Любой культурный человек мечтает попасть в знаменитый парижский Лувр, где собрана величайшая коллекция настоящих бесценных шедевров мирового искусства. Это один из крупнейших музеев всего мира, расположенный в здании древнего королевского дворца на берегу Сены.</p>',
        closeOnMapClick: false
    });

    // Add a marker1
    var marker1 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(51.13146, 4.56732)
    });

    var info1 = new SnazzyInfoWindow({
        marker: marker1,
        content: '<h1>Музей современного искусства Stedelijk</h1>' +
                 '<p>Городской музей Стеделейк в Амстердаме представляет собой музей современного искусства, где выставляются работы знаменитых художников модернизма, экспрессионизма, представителей других новейших художественных течений (Пабло Пикассо, Поля Сезанна, Марка Шагала, Клода Моне, Василия Кандинского и других), а также творческих групп, работающих в стилях поп-арт и видео-арт.</p>',
        closeOnMapClick: false
    });

    // Add a marker2
    var marker2 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(43.667476,-79.39417)
    });

    var info2 = new SnazzyInfoWindow({
        marker: marker2,
        content: '<h1>Королевский музей Онтарио</h1>' +
                 '<p>Знаменитый Королевский музей Онтарио является действующим с 1857 года и считается одним из самых крупных музеев всей Канады.</p>',
        closeOnMapClick: false
    });

    // Add a marker3
    var marker3 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(51.50778,-0.09917)
    });

    var info3 = new SnazzyInfoWindow({
        marker: marker3,
        content: '<h1>Тэйт Модерн</h1>' +
                 '<p>Галерея Тейт Модерн (Tate Modern) считается одной из самых посещаемых достопримечательностей в Лондоне. Крупнейший в мире музей современного искусства расположился в отреставрированном здании бывшей электростанции на южном берегу Темзы. Само сооружение является творением знаменитого архитектора Джайлса Гилберта Скотта.</p>',
        closeOnMapClick: false
    });

    // Add a marker4
    var marker4 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.408778,-3.6945)
    });

    var info4 = new SnazzyInfoWindow({
        marker: marker4,
        content: '<h1>Центр современного искусства королевы Софии</h1>' +
                 '<p>С 1986 года Музей королевы Софии функционировал как выставочный центр современного искусства, специализировавшийся на скульптуре. Официально Национальный музей Центр искусств королевы Софии был открыт 10 сентября 1992 года королевской четой — Хуаном Карлосом и Софией. Это здание старинного госпиталя сегодня знаменито тем, что в нём собрана великолепная коллекция современной живописи. Наряду с другими художниками на двух этажах музея размещены известнейшие творения представителей испанского авангарда Жоана Миро, Хуана Гриса, Пабло Пикассо, Сальвадора Дали, а также известных современных художников, среди которых Антони Тапиес, Эдуардо Чильида и другие.</p>',
        closeOnMapClick: false
    });

    // Add a marker5
    var marker5 = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.78306,-73.95889)
    });

    var info4 = new SnazzyInfoWindow({
        marker: marker5,
        content: '<h1>Музей Гуггенхайма</h1>' +
                 '<p>Прогуливаясь по 5-й Авеню в Нью-Йорке, невозможно не заметить белоснежное футуристическое здание, напоминающее огромную улитку или инопланетный космический корабль. В нем расположен музей современного искусства Соломона Гуггенхайма. Один из самых необычных музеев в мире знаменит большой коллекцией редчайших произведений великих мастеров искусства.</p>',
        closeOnMapClick: false
    });
});
