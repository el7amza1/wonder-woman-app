import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { ImQuotesLeft } from "react-icons/im";


const InternsPage = ({ intern }: { intern: any }) => {
  console.log(intern);
  return (
    <div>
      <div className="flex justify-center my-5 py-5 ">
        <div>
          <div
            style={{ backgroundImage: `url(${intern.image})` }}
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
  *[_type == "interns" && id.current == $id]{..., "image": image.asset->url}[0]
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
