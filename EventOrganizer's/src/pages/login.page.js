const Login=()=>
{
    return(
        <>
        {/* <div className="login">
        <div className="virat">
            <div className="row">
                <div className="col">

                </div>
                <div className="abd" style="margin-top:auto; margin-bottom:auto">
                    <form className="form-group">
                        <p className="t1">Login Form </p>
                        <div className="form-floating mb-3 mt-4">
                             <input type="name" className="form-control" id="floatingInput" placeholder="xyz"/>
                             <label className="form-label" htmlFor="floatingInput">Username</label>
                         </div>
                    </form>

                </div>

            </div>

        </div>
        </div> */}
        <div className="login-page mb-3">
    
    

    <div  className="container login mb-3 align-middle" >
        <p className="h2 text-center white mb-3">Login Here</p>
        <div className="form-floating mb-3 mt-4">
            <input type="name" className="form-control" id="floatingInput" placeholder="xyz"/>
            <label htmlFor="floatingInput">Username</label>
        </div>
        
        <div className="form-floating mb-3 mt-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
        </div>
        
        <button className="btn btn-primary mb-3 mt-3" >login</button>
 
 
    </div>
     </div>
         
        </>
    )
}
export default Login;