function direccionarPagina() {
    var selectElement = document.getElementById("shopSelect");
    var selectedValue = selectElement.value;

    switch (selectedValue) {
        case "shop":
            window.location.href = "../shop.html";
            break;
        case "pokemon":
            window.location.href = "../item.html";
            break;
        case "starwars":
            window.location.href = "../item.html";
            break;
        case "harrypotter":
            window.location.href = "../item.html";
            break;
        default:
            break;
    }
}