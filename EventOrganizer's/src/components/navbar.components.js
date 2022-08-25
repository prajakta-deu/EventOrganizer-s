
const Navbar=()=>{
  return(<>
  <nav class="navbar navbar-expand-lg navbar-secondary ">
  <div class="container">
  <a class="navbar-brand text-dark  fs-4 me-2" href="#">
     <img src="\logo.jpg" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
           Dream Organizer's
  </a>
   </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Team</a>
        </li>
        <button type="button" class="btn btn-secondary me-2">Register</button>
        <button type="button" class="btn btn-secondary">Login</button>
       
      </ul>
      
    </div>
  
</nav>
  </>
 )
}
export default Navbar;