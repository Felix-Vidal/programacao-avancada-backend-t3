const userList = document.getElementById("userList");

fetch("http://jsonplaceholder.typicode.com/users")
  .then(resposta => {
    if (!resposta.ok) {
      throw new Error("Erro ao obter os usuários.");
    }
    return resposta.json();
  })
  .then(data => {
    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.log(error);
    const li = document.createElement("li");
    li.textContent = "Erro ao obter os usuários.";
    userList.appendChild(li);
  });
