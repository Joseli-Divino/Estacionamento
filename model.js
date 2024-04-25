// Lista de vagas cadastradas (dados simulados)
let parkingData = [
  { plate: 'ABC1234', owner: 'João Silva', apartmentNumber: '101', block: 'A', model: 'Toyota Corolla', color: 'Preto', parkingNumber: '1' },
  { plate: 'XYZ5678', owner: 'Maria Souza', apartmentNumber: '202', block: 'B', model: 'Honda Civic', color: 'Prata', parkingNumber: '2' },
  { plate: 'DEF9876', owner: 'Pedro Oliveira', apartmentNumber: '303', block: 'C', model: 'Ford Focus', color: 'Azul', parkingNumber: '3' },
  { plate: 'GHI6543', owner: 'Ana Santos', apartmentNumber: '404', block: 'D', model: 'Volkswagen Gol', color: 'Branco', parkingNumber: '4' },
  { plate: 'JKL3210', owner: 'Fernanda Costa', apartmentNumber: '505', block: 'E', model: 'Chevrolet Onix', color: 'Vermelho', parkingNumber: '5' }
];

// Função para remover uma vaga cadastrada
function removeParkingEntry(index) {
  parkingData.splice(index, 1);
}

// Exportando as funções do modelo para serem utilizadas no controlador
export { parkingData, removeParkingEntry };
