document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
  fetch("./my_degrees.json")
    .then(response => {
      if (response.status != 200) 
      {
        throw new Error(`Response was not ok: ${response.status}`);
      }
      //console.log(response);
      return response.json();
    })
    .then(data => {
      //console.log(data);
      const dataDisplayElement = document.getElementById("dataDisplay");
      dataDisplayElement.innerHTML = "";
      //console.log(data['degrees']);
      for (let i = 0; i < data['degrees'].length; i++) {
        const degree = data['degrees'][i];
        const p = document.createElement("p");
        p.textContent = `School: ${degree.school}, Program: ${degree.program}, Type: ${degree.type}, Year Conferred: ${degree.yearConferred}`;
        dataDisplayElement.appendChild(p);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}