import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";
import {getTextAlign} from "../../utils/fonts";

export const Paragraph = ({textAlign = "left", content, textColor}) => {
  return (
    <p 
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      dangerouslySetInnerHTML={{__html: relativeToAbsoluteUrls(content)}}
      style={{color: textColor}}
    />
  )
}
