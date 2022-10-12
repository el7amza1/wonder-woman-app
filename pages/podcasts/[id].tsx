import React, { useState } from "react";
import client from "../../client";
import Link from "next/link";
import { useRouter } from "next/router";
import Audio from "../../components/Audio";

const PodcastPage = ({ episodes }: any) => {
  const router = useRouter();
  let { id } = router.query;
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]|| []);

  function selectEpisode(episode: any) {
    setSelectedEpisode(episode);
  }
  return (
    <div>
      <div
        id="podcast"
        style={{
          backgroundImage: "url(../images/podcast1.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen	bg-cover w-full  items-center parallaxie h-full grid grid-cols-12	 justify-center ">
          <div className="col-span-4 h-80 overflow-hidden	">
            <div className="w-full ">
              <div className="gallery-single fix border-0">
                <img src={selectedEpisode?.image} alt="" />
                {/* <div className="title-s">{episode.title}</div>
                  <div className="name-s">{episode.name}</div> */}
              </div>
            </div>
          </div>

          <div className="col-span-8	 pod-s align-center flex flex-col  items-center justify-center">
            <h2>{selectedEpisode?.title}</h2>
            <p className="px-5">{selectedEpisode?.description}</p>
            <audio controls>
              <source src={selectedEpisode?.audio} type="audio/ogg" />
            </audio>
            <div>
              <Audio />
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-list row" style={{ background: "#212322" }}>
        {episodes?.map((episode: any, index: number) => {
          if (episode._id !== selectedEpisode?._id) {
            return (
              <div
                key={index}
                className="col-md-4 col-sm-6 gallery-grid gal_a gal_b"
                onClick={() => selectEpisode(episode)}
              >
                <div className="gallery-single fix">
                  <Link href="#podcast">
                    <img
                      src={episode?.image}
                      style={{height:"350px"}}
                      className="img-fluid cursor-pointer"
                      
                      alt="Image"
                    />
                  </Link>
                  <div className="p-p">
                  <div className="title-s">{episode?.title}</div>
                  <div className="name-s">{episode?.subtitle}</div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const podcasts = await client.fetch(`*[_type == "podcast"]`);
  const paths = podcasts.map((podcast: any) => {
    return {
      params: { id: podcast._id },
    };
  });
  console.log("paths", paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const id = params.id;
  const episodes = await client.fetch(
    `*[_type == "episode" && podcast[0]._ref == $id]{..., "audio": file.asset->url,"image": coverArt.asset->url}`,
    { id }
  );
  console.log(episodes);
  return {
    props: {
      episodes,
    },
  };
}
export default PodcastPage;
