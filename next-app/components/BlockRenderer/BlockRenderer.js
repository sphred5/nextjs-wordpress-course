import { Cover } from '../Cover/Cover'
import { Heading } from '../Heading/Heading'
import { Paragraph } from '../Paragraph/Paragraph'
import { theme } from 'theme'

export const BlockRenderer = ({blocks}) => {
  return blocks.map(block => {
    switch(block.name) {
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
          console.log(block)
            return <Cover key={block.id} background={block.attributes.url}>
                      <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
        }
        default: 
            return null
    
    }
  })
}
