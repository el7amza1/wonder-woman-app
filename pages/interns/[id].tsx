import React from 'react'
import client from '../../client'

const InternsPage = ({intern}: {intern: any}) => {
  console.log(intern);
  return (
    <div>  
        <h1>Show more details</h1>
    </div>
  )
}

export async function getStaticPaths() {
  const interns = await client.fetch(`*[_type == "interns"]`)
  const paths = interns.map(intern => {
    return {
      params: { id: intern.id.current }
    }
  })
  // console.log("paths" , paths);
  return {
    paths,
    fallback: true,
  }
}


export async function getStaticProps({params}) {
 
  const id = params.id;
  const intern = await client.fetch(`
  *[_type == "interns" && id.current == $id][0]
`, { id })
  return {
    props: {
      intern
    }
  }
}

export default InternsPage