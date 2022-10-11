import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Team = ({ team }) => {
  return (
    <div className="pt-3 bg-g1">
      <div id="team" className="bg-g1 wb">
        <Carousel
          className="overflow-hidden"
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={true}
          useKeyboardArrows={true}
        >
          {team.map((member) => (
            <div
              key={member._id}
              style={{ backgroundImage: `url(${member.image})` }}
              className="w-full h-screen bg-cover   "
            ></div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Team;
