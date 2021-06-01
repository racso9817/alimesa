function compareSameContinent(clickedId, otherId) {
    return clickedId.split("_")[1] == otherId.split("_")[1];
}

function mostrarMapaPorContinente(selectedContinentId) {
    let mapImg = document.getElementById('mercadosMap');
    if (!mapImg.src.endsWith("/static/rsc/img/Mapa_" + selectedContinentId.split("_")[1] + ".png")) {
        mapImg.src = "/static/rsc/img/Mapa_" + selectedContinentId.split("_")[1] + ".png";
        let selected = document.getElementById(selectedContinentId);
        selected.style.background = "linear-gradient(90deg, rgba(255, 225, 0, 1) 0%, rgba(255, 225, 0, 0.5) 66%, rgba(255, 225, 0, 0) 100%)";
        selected.children[0].style.color = "var(--azul-titulos)";

        let matches_paises = document.querySelectorAll('[id^="paises_"]');
        matches_paises.forEach(function (x) {
            if (!compareSameContinent(selectedContinentId, x.id)) {
                x.style.display = 'none';
            } else {
                x.style.display = 'block';
            }
        })

        let matches_headers = document.querySelectorAll('[id^="header_"]');
        matches_headers.forEach(function (x) {
            if (!compareSameContinent(selectedContinentId, x.id)) {
                x.style.background = 'linear-gradient(90deg, rgba(0, 57, 132, 1) 0%, rgba(0, 79, 156, 0.5) 66%, rgba(0, 96, 180, 0) 100%)';
                x.children[0].style.color = "var(--blanco-nav)";
            }
        })
    } else {
        let selected = document.getElementById(selectedContinentId);

        let matches_paises = document.querySelectorAll('[id^="paises_"]');
        matches_paises.forEach(function (x) {
            x.style.display = 'none';
        })

        let matches_headers = document.querySelectorAll('[id^="header_"]');
        matches_headers.forEach(function (x) {
            x.style.background = 'linear-gradient(90deg, rgba(0, 57, 132, 1) 0%, rgba(0, 79, 156, 0.5) 66%, rgba(0, 96, 180, 0) 100%)';
            x.children[0].style.color = "var(--blanco-nav)";
        })

        mapImg.src = "/static/rsc/img/Mapa_Clean.png";
    }
}