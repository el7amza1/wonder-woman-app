import client from "../../client";
import ApplyForm from "../../components/ApplyForm";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { useState } from "react";
import { Job } from "../../types";
//@ts-ignore
import PortableText from "@sanity/block-content-to-react";

const Job = ({ job }: { job: Job }): JSX.Element => {
  return job ? (
    <div>
      <div className="relative bg-indigo-800 ">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
          <div
            className="absolute inset-0 bg-[#643A71] mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {job.title}
          </h1>
          <span className="mt-6 max-w-3xl text-xl">{job.department}</span>
          {" | "}
          <span className="mt-6 max-w-3xl text-xl">{job.type}</span>
          {" | "}
          <span className="mt-6 max-w-3xl text-xl">{job.location}</span>
        </div>
      </div>
      <ApplyForm job={job.title}>
        <div className="relative mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Job Description
          </h1>
          <div>
            <div className="text-white">
              <h2 className="text-xl font-bold text-white">Who we are: </h2>
              <p>
                At Wunderman Thompson we exist to inspire growth for ambitious
                brands. Part creative agency, part consultancy and part
                technology company, our experts provide end-to-end capabilities
                at a global scale to deliver inspiration across the entire brand
                and customer experience. We are 20,000 strong in 90 markets
                around the world; our people bring together creative
                storytelling, diverse perspectives, inclusive thinking, and
                highly specialized vertical capabilities to drive growth for our
                clients. We offer deep expertise across the entire customer
                journey, including communications, commerce, consultancy, CRM,
                CX, data, production, and technology.
              </p>
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold text-white">
                What we will need:{" "}
              </h2>
              {<PortableText blocks={job.description} />}
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold text-white">What you'll do: </h2>
              {<PortableText blocks={job.responsibilities} />}
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold text-white">Who you are: </h2>
              {<PortableText blocks={job.skills} />}
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold text-white">
                What You'll Need:{" "}
              </h2>
              {<PortableText blocks={job.requirements} />}
            </div>
            <div className="text-white">
              <p className="text-white">
                At Wunderman Thompson, we are committed to actively building a
                diverse, equitable and inclusive workplace where everyone feels
                welcomed, valued and heard, and is treated with dignity and
                respect. As leaders and creative partners across industries, it
                is our responsibility to cultivate an environment reflective of
                our greatest asset; our people. We believe that this commitment
                inspires growth and delivers equitable outcomes for everyone as
                well as the clients and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </ApplyForm>
    </div>
  ) : (
    <></>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`*[_type == "job"]`;
  const jobs = await client.fetch(query);
  const paths = jobs.map((job: Job) => {
    return {
      params: {
        slug: job._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = groq`*[_type == "job" && _id == "${params!.slug}"]`;
  const job = await client.fetch(query);
  return {
    props: {
      job: job[0],
    },
  };
};

export default Job;
