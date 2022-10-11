import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/contactUs";
import Jobs from "../components/jobs";
import Services from "../components/services";
import Slider from "../components/slider";
import Team from "../components/team";
import styles from "../styles/Home.module.css";
import client from "../client";
import Internships from "../components/internships";


const Home: NextPage = ({ interns , jobs, team } :any) => {
  return (
    <div>
      <Slider />
      <Services jobs={jobs} />
      <Team team={team} />
      <Internships interns={interns} />
      <Jobs />
      <ContactUs />
    </div>
  );
};
export default Home;
export async function getStaticProps() {
  const interns = await client.fetch(`*[_type == "interns"]{..., "image": image.asset->url}| order(_createdAt desc) [0...3]`)
  const team = await client.fetch(`*[_type == "ourTeam"]{..., "image": image.asset->url}`)
  console.log(team);
  const jobs = await client.fetch(
    `*[_type == "job"] | order(_createdAt desc) [0...5]`
  );
  return {
    props: {
      interns,
      jobs,
      team
    }
  }
}