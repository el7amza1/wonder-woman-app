import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Team = ({ team }:any) => {
  return (
    <div  id="team"className="bg-g1 wb pt-6 ">
      <div  className="  ">
      <div className="section-title text-center">
            <h3>Our Team</h3>
            <p>
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus.
            </p>
          </div>
        <Carousel
          className="overflow-hidden"
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={true}
          useKeyboardArrows={true}
        >
          {team.map((member:any) => (
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
