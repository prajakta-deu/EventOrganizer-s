import { Link } from "react-router-dom";

const Anniversary=()=>{
    return(
        <>
             <div class="about-section">
        <div class="inner-container">
            <h1> Wedding Anniversary</h1>
            <p class="text ">
            Wedding anniversary events celebrate important milestones in a couple's life together, and provide an opportunity for friends and relatives to join in celebrating that milestone. While most anniversary events occur at milestone intervals such as 10 years, 25 years, or 50 years, any anniversary can be a celebration.

For many couples, the anniversary celebration includes a renewal of vows. This may be quite similar to an actual Wedding, with all the same detailed facets to coordinate Flowers, Décor, Music, and Photography, as well as details of the reception.

Almost all wedding anniversary events include a reception. They are commonly held in an "open house" format where guests come and go during the specified time frame usually a weekend mid-afternoon. A small event may be located at the couple's home; if many guests are expected, another Venue may be chosen, such as a church fellowship hall, community center, or commercial venue, such as a Hotel.

Once again, Refreshments and Food are a central aspect of the festivities. Food may be provided by the family, friends, an outside caterer, or the catering staff of the venue.
           <br/>            </p>
           <div className="skills">

           
            <div className="nav-item">
        <Link className="btn btn-secondary me-2"  aria-current="page" to="/know">Book Now</Link>
        </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Anniversary;