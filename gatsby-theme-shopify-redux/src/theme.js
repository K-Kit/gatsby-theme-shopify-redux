import {tailwind, base, system} from '@theme-ui/presets'
import rebass from '@rebass/preset'
export const theme = {
    ...system,
    ...rebass,
    styles: {
        ...system.styles,
        ...rebass,
        Layout: {
            color: 'gray.2',
            fontFamily: 'body',
            fontSize: 1,
            maxWidth: '100vw',
            width: '100%'
        } ,
        Header: {
            backgroundColor: 'secondary',
            color: 'background',
            padding: 3,
            maxWidth: 'max',
            width: 'default',
            margin: '0 auto',
        },
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