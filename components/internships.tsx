import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Link from "next/link";

const Internships = ({
  interns,
}: {
  interns: any;
}) => {

  return (
    <div>
      <div id="interns" className="section lb">
        <div className="container">
          <div className="section-title text-center">
            <h3>Interns</h3>
            <p>
              {" "}
              We were interested in finding out more about our interns, so we
              interviewed a bunch and asked the other half to blog about their
              experience. Find out what they said…
            </p>
          </div>
          <div className="row">
            {interns.map((intern :any , idx :any) => (
              <Link href={`/interns/${intern.id.current}`} key={idx}>
                <div className="col-md-4 col-sm-6 col-lg- cursor-pointer">
                  <div className="post-box">
                    <div
                      className="post-thumb h-96 bg-cover bg-center"
                      style={{ backgroundImage: `url(${intern.image})` }}
                    ></div>
                    <div className="post-info">
                      <h4>{intern.name}</h4>

                      <h6 className="text-gray-500">
                        {intern.department} intern
                      </h6>

                      <p>
                        {intern.story[0].children[0].text.length <= 25
                          ? intern.story[0].children[0].text
                          : `${intern.story[0].children[0].text.slice(
                              0,
                              75
                            )}...`}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
