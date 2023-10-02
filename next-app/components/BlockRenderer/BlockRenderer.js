import Image from 'next/image'
import { Cover } from '../Cover/Cover'
import { Heading } from '../Heading/Heading'
import { Columns } from '../Columns/Columns'
import { Column } from '../Column/Column'
import { Paragraph } from '../Paragraph/Paragraph'
import { CallToActionButton } from '../CallToActionButton/CallToActionButton'
import { theme } from 'theme'

export const BlockRenderer = ({blocks}) => {
  return blocks.map(block => {
    switch(block.name) {
        case 'acf/ctabutton': {
          return <CallToActionButton 
                    key={block.id} 
                    buttonLabel={block.attributes.data.label} 
                    destination={block.attributes.data.destination || "/"}
                    align={block.attributes.data.align}
                  />
        }
        case 'core/paragraph': {
          return <Paragraph 
                    key={block.id} 
                    textAlign={block.attributes.align}  
                    content={block.attributes.content}
                    textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                    />
        }
        case 'core/heading': {
          return <Heading 
                    key={block.id} 
                    textAlign={block.attributes.textAlign} 
                    level={block.attributes.level} 
                    content={block.attributes.content} 
                  />
        }
        case 'core/cover': {
            return <Cover key={block.id} background={block.attributes.url}>
                      <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
        }
        case 'core/columns': {
            return <Columns key={block.id} isStackedOnMobile={block.attributes.isStackedOnMobile}>
                      <BlockRenderer blocks={block.innerBlocks} />
                    </Columns>
        }
        case 'core/column': {
          return <Column key={block.id} width={block.attributes.width}>
                    <BlockRenderer blocks={block.innerBlocks} /> 
                 </Column>
        }
        case 'core/block':
        case 'core/group': {
          return <BlockRenderer key={block.id} blocks={block.innerBlocks} />
        }
        case 'core/image': {
          return <Image 
                  key={block.id} 
                  src={block.attributes.url} 
                  height={block.attributes.height} 
                  width={block.attributes.width} 
                  alt={block.attributes.alt || ""}
                  />
        }
        default: 
            console.log("UNKNOWN", block)
            return null
    
    }
  })
}
