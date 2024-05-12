function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"))
    const cdid = JSON.parse(sessionStorage.getItem("cdid"))
    return {token: token , id: cdid}
}   

export async function getUser(){
const browserData = getSession()
const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization : `Bearer ${browserData.token}`}}
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.id}`, requestOptions)
    if(!response.ok){
        throw new Error(response.statusText);  
        
        
      }

    const data = await response.json()

    return data
}

export async function getUserOrders(){
    const browserData = getSession()
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.id}`, requestOptions );
        if(!response.ok){
            throw new Error(response.statusText);  
          }
        const data = await response.json();

        return data

    
}


export async function createOrder(cartList, total, user){

    const browserData = getSession()

    const order = {
        cartList : cartList,
        amount_paid : total,
        quantity : cartList.length,
        user : {
            name : user.name,
            email: user.email ,
            id: user.id
        }
    }
    const requestOptions = {
        method : "POST",
        headers: {"Content-Type": "application/json", Authorization : `Bearer ${browserData.token}`},
        // contains info about orders 
        body : JSON.stringify(order)
        }

        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions)
        if(!response.ok){
            throw new Error(response.statusText);  
                      }
        const  data = await response.json()

        return data
}