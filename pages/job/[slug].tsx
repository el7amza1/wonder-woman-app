import client from "../../client";
import ApplyForm from "../../components/ApplyForm";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { useState } from "react";
import { Job } from "../../types";

const Job = ({ job }: { job: Job }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(job);
  return job ? (
    <div>
      <div className="relative bg-indigo-800">
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
      <div className="relative mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-black">
          Job Description
        </h1>
        <p className="text-black">{job.description}</p>
      </div>
      <ApplyForm job={job.title} />
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
    revalidate: 86400,
  };
};

export default Job;
