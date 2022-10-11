import { useState } from "react";
import Link from "next/link"

const Podcast = ({podcasts}) => {
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
            {podcasts.map((podcast) => 
            <Link href={`/podcasts/${podcast._id}`}>
            <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_b">
              <div className="gallery-single fix">
                <img
                  src={podcast.image}
                  className="img-fluid cursor-pointer"
                  alt="Image"
                />
                <div className="title-s">{podcast.title}</div>
                <div className="name-s">{podcast.subtitle}</div>
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
