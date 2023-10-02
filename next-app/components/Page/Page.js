import { MainMenu } from '../MainMenu/MainMenu'
import { BlockRenderer } from '../BlockRenderer/BlockRenderer'

export const Page = (props) => {
    return (
        <>
            <MainMenu
                items={props.mainMenuItems}
                callToActionLabel={props.callToActionLabel}
                callToActionDestination={props.callToActionDestination} />
            <BlockRenderer blocks={props.blocks} />
        </>
    )
}
