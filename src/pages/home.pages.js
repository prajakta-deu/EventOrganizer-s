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
    <div className="col" >
      <div className="sim">    
    <Lottie animationData={anim1} loop={true}style={{height:"500px"}}  />
    </div>
    </div>
    <div className="col mt-5">
    <h1 ><b>
    Communication with customer
        </b>
    </h1>
    <h4>
    Our intension to build a healthy relationship between customer, communication is the key to understand customer thoughts.
    Good communication is vital tool for any business owenr,it helps in sealing a deal. Communication is at the heart of everything we do, enabling us to form relationships, carry out work and achieve our goals. It is also at the heart of successful event marketing.
    To plan a successful event, organizers need to listen to their audiences, understand their needs and plan an event that envisions these desires. 
    Only by effective communication from the organizer can marketers communicate the right messaging and marketing promotions to attract the intended audiences.
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
   Organized well plan event and proper arrangement of event as well as proper time management,
   we maintain cleanliness because cleanliness is next to godliness..!!!
 We follow the following stages for event arrangement:
 Research and Goal Setting,Design the Event,Brand the Event,Coordination and Day-Of Planning,Evaluate the Event. Successful Event Planning.
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
    If customer have any doubts or quiries our organization try to solve it.
     You does not need to go anywhere you can just visit our website..We answer your quries within 24 hours you post them. Please also provide us with your valuable feedback about our services we provide and your worthy experience.
    You can also suggest us with your piece of advice.
    </h4>
    </div>
    
  </div>
  </div>
  
        </>
    )
}

export default Home;