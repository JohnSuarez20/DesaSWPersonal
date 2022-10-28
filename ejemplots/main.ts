import { series_data } from "./data.js";
import { Serie } from "./series.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;
const avgTemp: HTMLElement = document.getElementById("avg_temporadas")!;
const btnSerieTitulo: HTMLElement = document.getElementById("serie_titulo")!;
const btnSerieDes: HTMLElement = document.getElementById("descripcion")!;
const btnSerieLink: HTMLElement = document.getElementById("link_serie")!;

renderSeriesInTable(series_data);

avgTemp.innerHTML = `${getAvgTemporadas(series_data)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.pos}</td>
                           <td>${c.nombre}</td>
                           <td>${c.medioStreaming}</td>
                           <td>${c.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAvgTemporadas(series: Serie[]): number {
    let total_avg: number = 0;
    series.forEach((serie) => total_avg = (total_avg + serie.temporadas)/2);
    return total_avg;
  }