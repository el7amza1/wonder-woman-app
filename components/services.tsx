import Link from "next/link";
import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { Job } from "../types";
const Services = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div>
      <div id="careers" className="section lb">
        <div className="container">
          <div className="section-title text-center">
            <h3>Careers</h3>
            <p>
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus.
            </p>
          </div>

          <div className="row">
            {jobs.map((job) => (
              <Link href={`/job/${job._id}`} key={job._id}>
                <div className="col-md-4 cursor-pointer">
                  <div className="services-inner-box">
                    <div className="ser-icon">
                      <i className="flaticon-seo"></i>
                    </div>
                    <h2>{job.title}</h2>
                    <p>{job.department}</p>
                    <span className="icon-p">
                      <BiPlusMedical />
                    </span>
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

export default Services;
