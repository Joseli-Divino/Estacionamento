// Função para mostrar mensagem na tela
function displayMessage() {
  alert('Cadastro registrado com sucesso');
}

// Função para lidar com o envio do formulário
function addParkingEntry(event) {
  event.preventDefault();

  const plate = document.getElementById('plate').value;
  const owner = document.getElementById('owner').value;
  const apartmentNumber = document.getElementById('apartment-number').value;
  const block = document.getElementById('block').value;
  const model = document.getElementById('model').value;
  const color = document.getElementById('color').value;
  const parkingNumber = document.getElementById('parking-number').value;
 
  // Exibe os valores no console
  console.log('Formulário enviado:');
  console.log('Placa do veículo:', plate);
  console.log('Nome do proprietário:', owner);
  console.log('Número do apartamento:', apartmentNumber);
  console.log('Bloco do apartamento:', block);
  console.log('Modelo do veículo:', model);
  console.log('Cor do veículo:', color);
  console.log('Número da vaga de estacionamento:', parkingNumber);

  displayMessage()
}

export { addParkingEntry }
