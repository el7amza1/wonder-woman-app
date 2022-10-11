import React from 'react'
import client from "../../client";

const PodcastPage = ({podcast}:any) => {
  return (
    <div style={{ backgroundImage: 'url(../images/bc-1.jpg)', backgroundSize: 'cover' }}>
      <div className="h-screen	bg-cover w-full  items-center parallaxie h-full  grid grid-cols-12	 justify-center "  >
        <div className='col-span-4 h-80 overflow-hidden	'>
          <div className="w-full ">
            <div className="gallery-single fix border-0">
              <img src="../images/podcasts-image.jpg" alt="" />
              <div className="title-s">title</div>
              <div className="name-s">podcast name</div>
            </div>
          </div>
        </div>
        <div className='col-span-8 	pod-s align-center flex flex-col items-center justify-centerg' >
          
          <h2>title</h2>
          <p>description</p>
          <audio controls >
            <source src="/html5/audio.ogg" type="audio/ogg" />
          </audio>
          {/* <button className="w-30 get_btn hvr-bounce-to-top" style={{    width: "150px"}}>Get started</button> */}

        </div>
      </div>
      <div className="gallery-list row">
        <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_b">
          <div className="gallery-single fix">
            <img src="../uploads/gallery_img-01.jpg" className="img-fluid" alt="Image" />
            <div className="title-s">title</div>
            <div className="name-s">podcast name</div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 gallery-grid gal_c gal_b">
          <div className="gallery-single fix">
            <img src="../uploads/gallery_img-02.jpg" className="img-fluid" alt="Image" />
            <div className="title-s">title</div>
            <div className="name-s">podcast name</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const episodes = await client.fetch(`*[_type == "episode"]`);
  const paths = episodes.map((episode:any) => {
    return {
      params: { id: episode._id },
    };
  });
  console.log("paths" , paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params } :any) {
  const id = params.id;
  const episode = await client.fetch(`*[_type == "episode" && _id == $id]{..., "image": coverArt.asset->url}[0]`, { id });
  return {
    props: {
      episode,
    },
  };
}
export default PodcastPage
