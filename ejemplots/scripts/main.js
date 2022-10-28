import { series_data } from "./data.js";
var seriesTbody = document.getElementById("series");
var avgTemp = document.getElementById("avg_temporadas");
var btnSerieTitulo = document.getElementById("serie_titulo");
var btnSerieDes = document.getElementById("descripcion");
var btnSerieLink = document.getElementById("link_serie");
renderSeriesInTable(series_data);
avgTemp.innerHTML = "".concat(getAvgTemporadas(series_data));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.pos, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.medioStreaming, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgTemporadas(series) {
    var total_avg = 0;
    series.forEach(function (serie) { return total_avg = (total_avg + serie.temporadas) / 2; });
    return total_avg;
}
