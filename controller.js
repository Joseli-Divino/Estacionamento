// controller.js

// Importa as funções do modelo
import { parkingData, removeParkingEntry } from './model.js';

// Função para remover uma vaga
function removeParkingRow(index) {
    removeParkingEntry(index);
    renderParkingTable();
}

// Função para renderizar a tabela de vagas cadastradas
function renderParkingTable() {
    const tableBody = document.getElementById('parking-table-body');
    if (tableBody) {
     tableBody.innerHTML = '';

      parkingData.forEach(entry => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${entry.plate}</td>
              <td>${entry.owner}</td>
              <td>${entry.apartmentNumber}</td>
              <td>${entry.block}</td>
              <td>${entry.model}</td>
              <td>${entry.color}</td>
              <td>${entry.parkingNumber}</td>
              <td><button class="remove-button">x</button></td>
          `;
          tableBody.appendChild(row);
      });
    }
}

// Adiciona evento de clique para os botões de remover
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-button')) {
        const index = event.target.parentNode.parentNode.rowIndex - 1; // Pegando o índice da linha
        removeParkingRow(index);
    }
});

// Inicializa a tabela de vagas cadastradas ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('listar.html')) {
    renderParkingTable();
  }
});
