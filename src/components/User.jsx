
 const User=(props)=>{
    return(
        <div>
            <div>
            <h1>my github</h1> 

            </div>
            <div>
                <h2>Username: {props.login}</h2>
             
                  <img 
                  style={{
                    border:"3px solid #000",
                    borderRadius:"15px",
                }}
                  src={props.avatar} alt="" sizes={20} />
            
                <p>id: {props.id}</p>
                <p>Bio: {props.bio}</p>
                <h2>Followers: {props.followers}</h2>
                <h2>Following: {props.following}</h2>
                <h2>Location : {props.location}</h2>
            </div>

        </div>
    )
}

export default User;

{/* <h1>Teste Da Api</h1>
      <h2>Nome:{login}</h2>
      <h2>Id:{id}</h2>
      <h2>bio:{bio}</h2>
      <h2>following:{following}</h2>
      <h2>followers:{followers}</h2> */}