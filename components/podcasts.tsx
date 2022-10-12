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
          <div className="section-title text-center">
            <h3>Podcasts</h3>
            <p>
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus.
            </p>
          </div>

        

          <div className="gallery-list row">
            {podcasts.map((podcast:any) => 
            <Link href={`/podcasts/${podcast._id}`}>
            <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_b ">
              <div className="gallery-single fix" style={{backgroundImage:`url(${podcast.image})`, backgroundSize:"cover" ,    height: "229px"}}>
                
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
