import {tailwind, base} from '@theme-ui/presets'
export const theme = {
    ...tailwind,
    colors: {
        ...tailwind.colors,
        gray: ['efefef', '#ddd', '#333', '#111'],
        background: '#fff',
    },
    styles: {
        ...base.styles, 
        ...tailwind.styles,
        Layout: {
            color: 'gray.2',
            fontFamily: 'body',
            fontSize: 1,
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
            maxWidth: 'max',
            width: 'default',
        },
        Container: {
            p: 3
        }
    }
}