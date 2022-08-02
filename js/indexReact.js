/*
    React.createElement(1,2,3)
    1. type
    2. props
    3. children (arrays)

*/

const app = document.querySelector("#root");
//const app = document.getElementById("root");

const Avatar = (params) => {
  return `<picture>
            <img src="https://randomuser.me/api/portraits/lego/${params.id}.jpg" alt="${params.name}">
            <p>${params.name}</p>
          </picture>`
}
const r = React.createElement

const AvatarReact = () => {
  const avatar = "https://randomuser.me/api/portraits/lego/2.jpg"
  return r("picture", {}, [r("img", {src: avatar, alt: "Logo Avatar", className: "imgAvatar", key: 1}), r("p",{key: 2},"Logo Avatar")])
}

/* ReactDOM.render(r(AvatarReact), app) */


  const root = ReactDOM.createRoot(app)
  root.render(r(AvatarReact))

