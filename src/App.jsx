import { useEffect,useState } from 'react'
import User from './components/User'


function App() {
  const [login, setLogin] = useState()
  const [id, setId] = useState()
  const [avatar, setAvatar] = useState()
  const [bio, setBio] = useState()
  const [followers, setFollowers] = useState()
  const [following, setFollowing] = useState()
  const [location,setLocation] = useState()
  const [pesquisa,setPepesquisa] = useState("")
  const [notFound, setNotFound] = useState("")

// const users={
//   login:login,
//   id:id,
//   avatar:avatar,
//   bio:bio,
//   following:following,
//   followers:followers,
//   location:location
// }  
const nome=pesquisa

async function renderizarTela(){
  const url=`https://api.github.com/users/${nome}`
  fetch(url)
  .then(response=>response.json())
  .then(data=> {
    console.log(data)
    setLogin(data.login)
    setAvatar(data.avatar_url)
    setId(data.id)
    setBio(data.bio)
    setFollowers(data.followers)
    setFollowing(data.following)
    setLocation(data.location)
    // if(data.message){
    //  return (setNotFound("User not found"),
    //   alert(notFound))
    //   }
  }
  )
  .catch(err=>console.log("erro na solitação"))

}


  return (
    
    <div
    style={{
      backgroundColor:"#324258",
      color:"#fff",
      fontFamily:"Helvetica",

    }}
    >
           <div>
                <p></p>
                <input type="text"
                placeholder="pesquisa aqui"
                value={pesquisa}
                onChange={(e)=>(
                  setPepesquisa(e.target.value),
                  renderizarTela())
                
                }
                />
            </div>

      <User
      login={login}
      id={id}
      bio={bio}
      avatar={avatar}
      followers={followers}
      following={following}
      location={location}


      />
      <button
      onClick={renderizarTela}
      >Mostar</button>
    </div>
  )
}

export default App;
{/* <h1>Teste Da Api</h1>
      <h2>Nome:{login}</h2>
      <h2>Id:{id}</h2>
      <h2>bio:{bio}</h2>
      <h2>following:{following}</h2>
      <h2>followers:{followers}</h2> */}