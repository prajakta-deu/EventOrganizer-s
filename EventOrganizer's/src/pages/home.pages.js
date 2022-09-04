import Lottie from "lottie-react";
import anim1 from "../Animations/communication.json";
import anim2 from "../Animations/systematic.json";
import anim3 from "../Animations/enquiry.json";
import Navbar from "../components/navbar.components";
import Header from "../components/header.components";
const Home=()=>{
    return(
        <>
         {/*<Navbar/>*/}
         <Header/>
         <div className="hm1">
        
        <div className="container ">
          
  <div className="row">
    <div className="col mt-4">
    <Lottie animationData={anim1} loop={true}  />
    </div>
    <div className="col mt-5">
    <h1 ><b>
    Communication with customer
        </b>
    </h1>
    <h4>
    Our intension to build a healthy relationship between customer, communication is the key to understand customer thoughts.Good communication is vital tool for any business owenr,it helps in sealing a deal.
    </h4>
    </div>
    
  </div>
  </div>
  
  </div>



  <div className="row">
    <div className="col">
      <div className="hm2" >

    
    <h1 ><b>
    Systematic arrangement
        </b>
    </h1>
    <h4>
   Organized well plan event and proper arrangement of event as well as proper time management,we maintain cleanliness because cleanliness is next to godliness..!!! 
   </h4>
    </div>
    </div>
    <div className="col">
    <Lottie animationData={anim2} loop={true} style={{height:"650px" ,width:"600px"}} />
    </div>
    
  </div>


 
  
  <div className="row">
    <div className="col">
    <Lottie animationData={anim3} loop={true} />;
   
    </div>
    <div className="col">
      <div className="hm3">
    <h1 ><b>
        Online enquiries
        </b>
    </h1>
    
    <h4>
    If customer have any doubts or quiries our organization try to solve it. You does not need to go anywhere you can just visit our website.
    </h4>
    </div>
    
  </div>
  </div>
  
        </>
    )
}

export default Home;