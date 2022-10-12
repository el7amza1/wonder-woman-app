import { useState } from "react";
import Link from "next/link"

const Podcast = ({podcasts}:any) => {
 console.log("in", podcasts);
  return (
    <div>
         <div className='bg-t' style={{backgroundImage:"url(./images/bg-1.png)"}}>

</div>
      <div id="podcasts" className="section lb">
        <div className="container">
          <div className="section-title text-center mt-10">
            <h3>Podcasts</h3>
            <p>
            Welcome to the Wunderman Thompson Podcast, created to inspire brands and marketers through expert advice.


            </p>
          </div>

        

          <div className="gallery-list row">
            {podcasts.map((podcast:any,inx:any) => 
            <Link key={inx} href={`/podcasts/${podcast._id} `}>
            <div  className="col-md-4 col-sm-6 gallery-grid gal_a gal_b ">
              <div className="gallery-single fix cursor-pointer" style={{backgroundImage:`url(${podcast.image})`, backgroundSize:"cover" ,    height: "229px"}}>
                
                <div className="p-p">
                <div className="title-s"><span>{podcast?.title}</span></div>
                <div className="name-s">{podcast?.subtitle}</div>
                </div>
              </div>
            </div>
            </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
