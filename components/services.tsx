import Link from "next/link";
import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { AppProps, Job } from "../types";
const Services = ({ departments }: AppProps) => {
  return (
    <div>
      <div id="services" className="section lb">
        <div className="container">
          <div className="section-title text-center">
            <h3>Careers</h3>
            <p>
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus.
            </p>
          </div>

          <div className="row">
            {departments.map((department) => (
              <Link
                href={`/department/${department.title}`}
                key={department._id}
              >
                <div className="col-md-4 cursor-pointer">
                  <div className="services-inner-box">
                    <div className="ser-icon">
                      <i className="flaticon-seo"></i>
                    </div>
                    <h2>{department.title}</h2>
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
