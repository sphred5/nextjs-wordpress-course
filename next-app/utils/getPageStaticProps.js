import client from "client";
import { gql } from "@apollo/client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  
  const { data } = await client.query({
    query: gql`
    query PageQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        blocks
      }
      ... on Property {
        id
        blocks
      }
    }
      acfOptionsMainMenu {
            mainMenu {
              callToActionButton {
            label
            destination {
              ... on Page {
                uri
              }
            }
          }
          menuItems {
            menuItem {
              destination {
                ... on Page {
                  uri
                }
              }
              label
            }
            items {
              destination {
                ... on Page {
                  uri
                }
              }
              label
            }
          }
        }
    }
  }
  `,
    variables: {
      uri
    }
  })
  return {
    props: {
      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks)
    }
  }
}