document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector("#search-input");
    const searchResults = document.querySelector("#search-results");
  
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const searchTerm = searchInput.value.toLowerCase();
      const searchMatches = performSearch(searchTerm); // Simulando a busca
      displayResults(searchMatches);
    });
  
    function performSearch(searchTerm) {
      // Simulando a busca com um array de objetos
      const data = [
        { name: "Tosa", link: "servicos.html", description: "Descrição da tosa." },
        { name: "Banho", link: "servicos.html", description: "Descrição do banho." },
        // Adicione mais resultados aqui
      ];
  
      // Filtrando os resultados que correspondem ao termo de busca
      const searchMatches = data.filter(item => item.name.toLowerCase().includes(searchTerm));
      return searchMatches;
    }
  
    function displayResults(results) {
      searchResults.innerHTML = "";
  
      if (results.length === 0) {
        searchResults.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
      }
  
      const resultsList = document.createElement("ul");
      resultsList.classList.add("results-list");
  
      results.forEach(result => {
        const listItem = document.createElement("li");
        const resultLink = document.createElement("a");
        resultLink.href = result.link;
        resultLink.textContent = result.name;
        listItem.appendChild(resultLink);
  
        const resultDescription = document.createElement("p");
        resultDescription.textContent = result.description;
        listItem.appendChild(resultDescription);
  
        resultsList.appendChild(listItem);
      });
  
      searchResults.appendChild(resultsList);
    }
  });
  