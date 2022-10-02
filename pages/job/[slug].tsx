import client from "../../client";
import ApplyForm from "../../components/ApplyForm";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { useState } from "react";
import { Job } from "../../types";

const Job = ({ job }: { job: Job }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return job ? (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg py-5 px-5">
      <div className="px-4 pt-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Job Information
        </h3>
        {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
          
        </p> */}
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Job Title</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {job.title}
            </dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {job.type}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {job.location}
            </dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Department</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {job.department}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {job.description}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Apply</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setOpen(true)}
              >
                Apply Now
              </button>
            </dd>
          </div>
        </dl>
        <ApplyForm open={open} setOpen={setOpen} job={job.title} />
      </div>
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
