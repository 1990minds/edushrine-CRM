const  keyUri = {

    // BACKEND_URI:'http://localhost:5000/api'

    // test server
    // BACKEND_URI:'https://edushrine-server-uwhrw.ondigitalocean.app/api'

    //live server
    BACKEND_URI:'https://sea-turtle-app-xdwuq.ondigitalocean.app/api'




    

}


let token = localStorage.getItem('token')

const config = {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
    }
  };
  
  
export  {keyUri, config }

