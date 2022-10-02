import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/contactUs";
import Internships from "../components/internships";
import Jobs from "../components/jobs";
import Services from "../components/services";
import Slider from "../components/slider";
import Team from "../components/team";
import styles from "../styles/Home.module.css";
import client from "../client";


const Home: NextPage = ({ interns, jobs }) => {
  return (
    <div>
      <Slider />
      <Services jobs={jobs} />
      <Team />
      <Internships interns={interns} />
      <Jobs />
      <ContactUs />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const interns = await client.fetch(`*[_type == "interns"]{..., "image": image.asset->url}| order(_createdAt desc) [0...3]`)
  
  const jobs = await client.fetch(
    `*[_type == "job"] | order(_createdAt desc) [0...5]`
  );
  return {
    props: {
      interns,
      jobs,
    },
  };
}
