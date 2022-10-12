import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { GetStaticPaths } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../../client";
import { AppProps, Department, Job } from "../../types";

const Department = ({ jobs }: AppProps) => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [sorted, setSorted] = useState(false);
  const router = useRouter();
  const { department } = router.query;
  useEffect(() => {
    setAllJobs(jobs);
  }, []);

  const sortAscending = () => {
    const sortedJobs = jobs.sort(
      (a: Job, b: Job) => +new Date(a.closeDate) - +new Date(b.closeDate)
    );
    setAllJobs(sortedJobs);
    setSorted(false);
  };

  const sortDescending = () => {
    const sortedJobs = jobs.sort(
      (a: Job, b: Job) => +new Date(b.closeDate) - +new Date(a.closeDate)
    );
    setAllJobs(sortedJobs);
    setSorted(true);
  };

  const sortJobs = () => {
    sorted ? sortAscending() : sortDescending();
  };

  return (
    <div className="mt-16 flex flex-col h-auto min-h-screen pt-10">
      <h2 className="px-3 mt-">{department} Jobs</h2>
      {allJobs.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                <div className="group inline-flex">
                  Closing Date
                  <span
                    className="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-300"
                    onClick={() => sortJobs()}
                  >
                    {sorted ? (
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {allJobs.map((job: Job) => (
              <Link href={`/job/${job._id}`} key={job._id}>
                <tr className="cursor-pointer hover:bg-[#AF3B6E] text-gray-500 hover:text-white">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6">
                    {job.title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {job.location}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {job.closeDate}
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h2>There are no jobs available right now!</h2>
          <img
            width={500}
            src="https://static.vecteezy.com/system/resources/previews/002/076/417/original/data-search-not-found-illustration-concept-vector.jpg"
          />
        </div>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`*[_type == "department"]`;
  const departments = await client.fetch(query);
  const paths = departments.map((department: Department) => {
    return {
      params: {
        department: department.title,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { department: Department };
}) => {
  const query = groq`*[_type == "job" && department == "${params.department}"]`;
  const jobs = await client.fetch(query);
  return {
    props: {
      jobs: jobs,
    },
  };
};

export default Department;
