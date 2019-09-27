/** @jsx jsx */
import { jsx } from 'theme-ui'


export const CompareAtPrice = ({variant}) => {
    const {price, compareAtPrice} = variant
    return (
        <div sx={{display: 'flex', justifyContent: 'flex-end'}}>
            {compareAtPrice && <p sx={{color: 'danger', mr: 3, fontSize:[2]}}><strike>${compareAtPrice}</strike> </p>}
            <p sx={{color: 'success', fontSize:[2]}}><strong>${price}</strong></p>
        </div>
    )
}