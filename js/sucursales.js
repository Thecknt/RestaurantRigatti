//alert("Hola mundo desde script.js")
// function setMarker(){
//     document.getElementById('map').src = 'https://maps.google.com/maps?q=-34.58042501329499, -58.42775031589176&z=15&output=embed';
//     $('#map').attr('src', 'https://maps.google.com/maps?q=-34.58042501329499, -58.42775031589176&z=15&output=embed');
// }
function setMarker(id) {
    let url = "";
    switch (id) {
        case "abasto":
            url =
                "https://maps.google.com/maps?q=-34.60299068662696, -58.4108287473918&z=15&output=embed";
            break;
        case "arcos":
            url =
                "https://maps.google.com/maps?q=-34.58038967968567, -58.42779323004906&z=15&output=embed";
            break;
        case "palermo":
            url =
                "https://maps.google.com/maps?q=-34.58810016665554, -58.41078918772087&z=15&output=embed";
            break;
        case "devoto":
            url =
                "https://maps.google.com/maps?q=-34.61154271910215, -58.51776580121254&z=15&output=embed";
            break;
        case "recoleta":
            url =
                "https://maps.google.com/maps?q=-34.589023558438704, -58.39396698772071&z=15&output=embed";
            break;
        case "galerias":
            url =
                "https://maps.google.com/maps?q=-34.59906412128504, -58.37477890121277&z=15&output=embed";
            break;

    }

    document.getElementById("map").src = url;
}
