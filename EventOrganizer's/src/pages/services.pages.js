import { Link } from "react-router-dom";
const Services=()=>{
    return(
        <>
    <div class="container-fluid">
        <h1 class="text-center mt-5 display-3 fw-bold">Our <span class="theme-text">Services</span></h1>
        <hr class="mx-auto mb-5 w-25"></hr>
        <div class="row mb-5">
            <div class="col-12 col-sm-6 col-md-3 m-auto">
               
                <div class="card shadow">
                    <img src="images/web.svg" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Birthday Party</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/bday">Know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
             
            </div>
          
            <div class="col-12 col-sm-6 col-md-3 m-auto">
             
                <div class="card shadow">
                    <img src="images/app.svg" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Wedding Anniversary </h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/anniversary">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
              
            </div>
   
            <div class="col-12 col-sm-6 col-md-3 m-auto">
               
                <div class="card shadow">
                    <img src="images/dm.svg" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Product Launch</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/know">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
              
            </div>
         
          
         
        </div>
    </div>

   
        
        <div class="row mb-5">
            <div class="col-12 col-sm-6 col-md-3 m-auto">
               
                <div class="card shadow">
                    <img src="images/web.svg" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Award Ceremony</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/know">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
             
            </div>
          
            <div class="col-12 col-sm-6 col-md-3 m-auto">
             
                <div class="card shadow">
                    <img src="images/app.svg" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Holi</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/know">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
              
            </div>
   
           
          
         
        </div>
   
     
        </>
    )
}
export default Services;