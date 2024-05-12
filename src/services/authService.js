export async function login(authDetail){
    const requestOptions = {
        method: "POST",
        headers: {"content-Type" : "application/json"},
        body: JSON.stringify(authDetail)
      }
      
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions)
      const data = await response.json()
      
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cdid", JSON.stringify(data.user.id))
      }
      return data
}

export async function register(authDetail){

    const requestOptions = {
        method: "POST",
        headers: {"content-Type" : "application/json"},
        body: JSON.stringify(authDetail)
      }
  
      const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions)
      const data = await response.json()
      
  
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cdid", JSON.stringify(data.user.id))
      }
      return data
}

export async function logout(){

    sessionStorage.removeItem("token")
    sessionStorage.removeItem("cdid")
}