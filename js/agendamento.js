document.addEventListener("DOMContentLoaded", function() {
    const petSelect = document.getElementById("pet-name");
  
    // Simulando uma lista de pets cadastrados
    const petList = [
      "Joaquim",
      "Ricardo",
      "Miau",
      "Marcelo D2",
      "Pitty"
    ];
  
    // Preenchendo as opções no campo "Nome do Pet"
    petList.forEach((pet, index) => {
      const option = document.createElement("option");
      option.value = pet;
      option.textContent = pet;
      if (index === 0) {
        option.selected = true; // Seleciona o primeiro animal por padrão
      }
      petSelect.appendChild(option);
    });
  
    const agendamentoForm = document.getElementById("agendamento-form");
  
    agendamentoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Simulando o agendamento
      const petName = document.getElementById("pet-name").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
  
      // Exibindo mensagem de agendamento
      const confirmationMessage = `Agendamento para ${petName} em ${date} às ${time} foi realizado com sucesso!`;
      alert(confirmationMessage);
  
      // Redirecionando para a tela inicial
      window.location.href = "index.html";
    });
  });
  