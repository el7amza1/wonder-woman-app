import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/contactUs";
import Internships from "../components/internships";
import Podcast from "../components/podcasts"
import Services from "../components/services";
import Slider from "../components/slider";
import Team from "../components/team";
import styles from "../styles/Home.module.css";
import client from "../client";
const Home: NextPage = ({ interns, jobs, team, podcasts }) => {
  return (
    <div>
      <Slider />
      <Services jobs={jobs} />
      <Team team={team} />
      <Podcast podcasts={podcasts} />
      <Internships interns={interns} />
      <ContactUs />
    </div>
  );
};
export default Home;
export async function getStaticProps() {
  const interns = await client.fetch(`*[_type == "interns"]{..., "image": image.asset->url}| order(_createdAt desc) [0...3]`)
  const team = await client.fetch(`*[_type == "ourTeam"]{..., "image": image.asset->url}`)
  const podcasts = await client.fetch(`*[_type == "podcast"]{..., "image": coverArt.asset->url}`)
  console.log(podcasts)
  const jobs = await client.fetch(
    `*[_type == "job"] | order(_createdAt desc) [0...5]`
  );
  return {
    props: {
      interns,
      jobs,
      team,
      podcasts
    },
  };
}