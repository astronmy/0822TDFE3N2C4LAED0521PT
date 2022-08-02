
const app = document.querySelector("#root");

const AvatarReact = () => {
  const avatar = "https://randomuser.me/api/portraits/lego/2.jpg"
  return r("picture", {}, [r("img", {src: avatar, alt: "Logo Avatar", className: "imgAvatar", key: 1}), r("p",{key: 2},"Logo Avatar")])
}

const AvatarJsx = () => {
  const avatar = "https://randomuser.me/api/portraits/lego/2.jpg"
  return (
      <picture>
          <img src={avatar} alt="Logo Avatar" />
          <p>Logo Avatar</p>
      </picture>
  )
}
const r = React.createElement
/* ReactDOM.render(r(AvatarReact), app) */


  const root = ReactDOM.createRoot(app)
  root.render(r(AvatarJsx))

