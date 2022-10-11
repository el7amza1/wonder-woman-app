import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { ImQuotesLeft } from "react-icons/im";

const builder: any = imageUrlBuilder(client);

function urlFor(imageLink: string) {
  return builder.image(imageLink);
}

const InternsPage = ({ intern }: { intern: any }) => {
  console.log(intern);
  return (
    <div>
      {/* <div className="relative bg-indigo-800">
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
            {intern.name}
          </h1>
          <span className="mt-6 max-w-3xl text-xl">{intern.department}</span>
        </div>
      </div> */}
      <div className="flex justify-center my-5 py-5 ">
        <div>
          <div
            style={{ backgroundImage: `url(${urlFor(intern.image)})` }}
            className="w-64 h-96 bg-cover bg-center"
          />
          <h2>{intern.name}</h2>
          <div>
            <p>Department: {intern.department}</p>
            <div className="text-4xl flex justify-around py-3">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
          </div>
        </div>
        <div className="w-1/2 ms-5 ps-5 border-solid border-l-2 border-black ">
          {intern.story.map((item :any) => (
            <>
              <ImQuotesLeft />
              <p className="text-black">{item.children[0].text}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const interns = await client.fetch(`*[_type == "interns"]`);
  const paths = interns.map((intern :any) => {
    return {
      params: { id: intern.id.current },
    };
  });
  // console.log("paths" , paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }:any) {
  const id = params.id;
  const intern = await client.fetch(
    `
  *[_type == "interns" && id.current == $id][0]
`,
    { id }
  );
  return {
    props: {
      intern,
    },
  };
}

export default InternsPage;
