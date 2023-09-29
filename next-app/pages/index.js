import { gql } from "@apollo/client";
import client from "client";
import {cleanAndTransformBlocks} from "utils/cleanAndTransformBlocks";
import {BlockRenderer} from "components/BlockRenderer";
 
export default function Home(props) {
  console.log(props.blocks)
  return <BlockRenderer blocks={props.blocks}/>;
}


export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
    query NewQuery {
    nodeByUri(uri: "/") {
      ... on Page {
        id
        blocks
      }
    }
  }
  `
  })
  return {
    props : {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks)
    }
  }
}