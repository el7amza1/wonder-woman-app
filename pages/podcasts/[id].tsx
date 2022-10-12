import React, { useState } from "react";
import client from "../../client";
import Link from "next/link";
import { useRouter } from "next/router";
import Audio from "../../components/Audio";

const allEpisodes = [
  {
      "_createdAt": "2022-09-27T13:46:13Z",
      "_id": "0e6cacde-6007-455f-acd9-acf700f316bf",
      "_rev": "zHn42nmiy9nS3lQpBlNTKy",
      "_type": "episode",
      "_updatedAt": "2022-10-12T12:07:46Z",
      "audio": "https://cdn.sanity.io/files/53cc74ct/production/57a45d7cd43cd0b7c5a3cdd225d796e310c2ba89.mp3",
      "coverArt": {
          "_type": "image",
          "asset": {
              "_ref": "image-862f22953f2acdd154d3c47ae649abe3472fb620-4240x2827-jpg",
              "_type": "reference"
          }
      },
      "description": "Welcome to the Digital Marketing Podcast’s home on the web. Here you can find all of our episodes going back over 11 years. The Digital Marketing Podcast is an advert-free, weekly digital marketing podcast with listeners in over 190 countries worldwide. The podcast combines interviews with global experts and the latest news, tools, strategies, and techniques to give your digital marketing the edge. The podcast aims to be entertaining and informative for your daily commute. The show is produced and hosted by Daniel Rowles, award-winning author, speaker, and CEO of Target Internet, and digital marketing specialist and trainer, Ciaran Rogers.",
      "duration": "01:20:52",
      "file": {
          "_type": "file",
          "asset": {
              "_ref": "file-57a45d7cd43cd0b7c5a3cdd225d796e310c2ba89-mp3",
              "_type": "reference"
          }
      },
      "image": "https://cdn.sanity.io/images/53cc74ct/production/862f22953f2acdd154d3c47ae649abe3472fb620-4240x2827.jpg",
      "podcast": [
          {
              "_key": "0c6484684348",
              "_ref": "1aa16e8c-9116-4705-af87-19517bf762af",
              "_type": "reference",
              "_weak": true
          }
      ],
      "schedule": {
          "_type": "schedule",
          "publish": "2022-09-27T13:45:12.853Z",
          "unpublish": "2022-09-28T13:45:00.000Z"
      },
      "slug": {
          "_type": "slug",
          "current": "episode-1"
      },
      "sponsors": [
          {
              "_key": "8de96c2a1efb",
              "_type": "sponsorRead",
              "copy": [
                  {
                      "_key": "4f80f603f913",
                      "_type": "block",
                      "children": [
                          {
                              "_key": "11de85e25529",
                              "_type": "span",
                              "marks": [],
                              "text": "Enjoy the episode while drinking Pepsi ;)"
                          }
                      ],
                      "markDefs": [],
                      "style": "normal"
                  }
              ],
              "sponsor": {
                  "_ref": "5729077a-9f16-4579-8744-ad8adf3c4be9",
                  "_type": "reference"
              }
          }
      ],
      "subtitle": "Mobile Marketing",
      "summary": "Welcome to the first episode",
      "title": "Episode 1"
  },
  {
      "_createdAt": "2022-10-11T14:44:14Z",
      "_id": "3847626d-4e51-46ac-be9a-c5890fa0640b",
      "_rev": "zHn42nmiy9nS3lQpBlN0hE",
      "_type": "episode",
      "_updatedAt": "2022-10-12T12:05:18Z",
      "audio": "https://cdn.sanity.io/files/53cc74ct/production/57a45d7cd43cd0b7c5a3cdd225d796e310c2ba89.mp3",
      "content": [
          {
              "_key": "ccd0f69fe6a4",
              "_type": "block",
              "children": [
                  {
                      "_key": "47ecdf5a2e7b0",
                      "_type": "span",
                      "marks": [],
                      "text": "This is the content"
                  }
              ],
              "markDefs": [],
              "style": "normal"
          }
      ],
      "coverArt": {
          "_type": "image",
          "asset": {
              "_ref": "image-d7ead2fcd316d7c2060292f7fda144a43ed647d5-5760x3840-jpg",
              "_type": "reference"
          }
      },
      "description": "If you’re interested in learning how to earn money through niche affiliate websites, make Niche Pursuits your go-to podcast.\n\nIn each episode that roughly spans 60 minutes, host Spencer Haws chats with a niche site owner about their successes, failures, and tactics.",
      "file": {
          "_type": "file",
          "asset": {
              "_ref": "file-57a45d7cd43cd0b7c5a3cdd225d796e310c2ba89-mp3",
              "_type": "reference"
          }
      },
      "image": "https://cdn.sanity.io/images/53cc74ct/production/d7ead2fcd316d7c2060292f7fda144a43ed647d5-5760x3840.jpg",
      "podcast": [
          {
              "_key": "76d92a043959",
              "_ref": "1aa16e8c-9116-4705-af87-19517bf762af",
              "_type": "reference",
              "_weak": true
          }
      ],
      "schedule": {
          "_type": "schedule",
          "publish": "2022-10-11T14:45:02.636Z",
          "unpublish": "2022-10-11T14:45:08.936Z"
      },
      "slug": {
          "_type": "slug",
          "current": "episode-2"
      },
      "subtitle": "Social Media Marketing",
      "summary": "This is the summary",
      "title": "Episode 2"
  },
  {
      "_createdAt": "2022-10-11T20:23:43Z",
      "_id": "f0969291-16d3-46a5-bd21-ad5a91758baf",
      "_rev": "zHn42nmiy9nS3lQpBlNCCm",
      "_type": "episode",
      "_updatedAt": "2022-10-12T12:06:07Z",
      "audio": null,
      "coverArt": {
          "_type": "image",
          "asset": {
              "_ref": "image-92e00ced525cf8b3a8fcc7186276db2ea9354c12-3482x2611-jpg",
              "_type": "reference"
          }
      },
      "description": "Author and marketer Seth Godin is a household name. In his soothing podcast series, he invites listeners to consider the influence of culture on their lives and how they can change things.\n\nSeth is well positioned to answer these questions too, given he’s penned a slew of popular titles, including “This Is Marketing” and “Permission Marketing.”",
      "image": "https://cdn.sanity.io/images/53cc74ct/production/92e00ced525cf8b3a8fcc7186276db2ea9354c12-3482x2611.jpg",
      "podcast": [
          {
              "_key": "d7d87cb70f72",
              "_ref": "1aa16e8c-9116-4705-af87-19517bf762af",
              "_type": "reference",
              "_weak": true
          }
      ],
      "schedule": {
          "_type": "schedule",
          "publish": "2022-10-11T20:15:50.289Z",
          "unpublish": "2022-10-28T20:15:00.000Z"
      },
      "subtitle": "Email Marketing",
      "title": "Episode 3"
  }
]

const PodcastPage = ({ episodes }: any) => {
  const router = useRouter();
  let { id } = router.query;
  console.log()
  const [selectedEpisode, setSelectedEpisode] = useState<any>(allEpisodes[0]);

  function selectEpisode(episode: any) {
    setSelectedEpisode(episode!);
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
        <div className="h-screen	bg-cover w-full  items-center parallaxie h-full grid grid-cols-12	 justify-center  items-center">
          <div className="col-span-4 h-80 overflow-hidden	">
            <div className="w-full h-full pt-20 ">
              <div className="text-white text-center flex items-center justify-center ">
                {/* <img src={selectedEpisode?.image} alt="" /> */}
                {/* <div className="title-s">{episode.title}</div>
                  <div className="name-s">{episode.name}</div> */}
                  <h2 className=" text-white font-bold text-6xl">{selectedEpisode?.title}</h2>
              </div>
            </div>
          </div>

          <div className="col-span-8	 pod-s align-center flex flex-col  items-center justify-center">
            
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
        {allEpisodes?.map((episode: any, index: number) => {
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
