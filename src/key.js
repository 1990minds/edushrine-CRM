const  keyUri = {

    BACKEND_URI:'http://localhost:5000/api'

    // BACKEND_URI:'https://edushrine-server-uwhrw.ondigitalocean.app/api'

    

}


let token = localStorage.getItem('token')

const config = {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
    }
  };
  
  
export  {keyUri, config }

