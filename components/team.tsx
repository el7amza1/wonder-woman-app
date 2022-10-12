import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Team = ({ team }: any) => {
  return (
    <div id="team" className="bg-g1 wb pt-12 ">
      <div className="  ">
        <div className="section-title text-center mt-10">
          <h3>Our Team</h3>
          <p>
          Meet women who have chosen to make a career at Wunderman Thompson
          </p>
        </div>
        <Carousel
          className="overflow-hidden"
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={true}
          useKeyboardArrows={true}
        >
          {team.map((member: any) => (
            <div style={{ backgroundImage: `url(${member.image})`, backgroundSize: "cover", backdropFilter: "blur(15px )"}} >
              <div style={{ backgroundColor: "#000000b5" , backdropFilter: "blur(10px )"}}>
                <div
                  key={member._id}
                  style={{ backgroundImage: `url(${member.image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",height:"550px" }}
                  className="w-full h-screen    "
                ></div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Team;
