const app = document.querySelector("#root");
//const app = document.getElementById("root");

const Avatar = (params) => {
  return `<picture>
            <img src="https://randomuser.me/api/portraits/lego/${params.id}.jpg" alt="${params.name}">
            <p>${params.name}</p>
          </picture>`
}

app.innerHTML = Avatar({id: 5, name: "Renzo"});