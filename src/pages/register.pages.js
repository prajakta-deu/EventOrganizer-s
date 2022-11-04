import bg from "../Assets/bg.png"


const Register=()=>
{
    return(
        <>
<div className="regi-page mb-3">
    
    

   <div  className="container register mb-3" >
       <p className="h2 text-center white mb-3">Register Here</p>
       <div className="form-floating mb-3 mt-4">
           <input type="name" className="form-control" id="floatingInput" placeholder="xyz"/>
           <label htmlFor="floatingInput">Username</label>
       </div>
       <div className="form-floating mb-3 mt-3">
           <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
               <label htmlFor="floatingInput">Email address</label>
       </div>
       <div className="form-floating mb-3 mt-3">
           <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
               <label htmlFor="floatingPassword">Password</label>
       </div>
       <div className="form-floating mb-3 mt-3">
           <input type="number" className="form-control" id="floatingPassword" placeholder="Password"/>
           <label htmlFor="floatingPassword">Mobile Number</label>
       </div>
       <div className="form-floating mb-3 mt-3">
           <textarea className="form-control" placeholder="Address" id="floatingTextarea" style={{height:"100px"}}></textarea>
           <label htmlFor="floatingTextarea">Address</label>
       </div>

       <button className="btn btn-primary mb-3 mt-3" >Register</button>


   </div>
    </div>
        
        </>
    )
}
export default Register;