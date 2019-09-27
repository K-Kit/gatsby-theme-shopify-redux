import {tailwind, base, system} from '@theme-ui/presets'
import rebass from '@rebass/preset'
export const theme = {
    ...system,
    ...rebass,
    styles: {
        ...base.styles,
        ...system.styles,
        Layout: {
            color: 'gray.2',
            fontFamily: 'body',
            fontSize: 1,
            maxWidth: '100vw',
            width: '100%'
        } ,
        // Header: {
        //     display: 'grid',
        //     gridGap: 3,
        //     gridTemplateColumns: 'repeat(3, 1fr)',
        //     px: 3,
        //     py: 4,
        //     alignItems: 'center',
        // },
        Main: {
            margin: '0 auto',
            width: '100%',
            maxWidth: '100vw'
        },
        Container: {
            p: 3
        }

    }
}