/** @jsx jsx */
import React from 'react';
import {Styled,Container, jsx } from "theme-ui";

import {Tiles} from '@rebass/layout'
import {ProductCard} from "./ProductCard";

export const ProductGrid = ({products, ...props}) => {
    return (
        <Tiles columns={[2,2,3,4]}>
            {products && products.map(product => <ProductCard product={product} />)}
        </Tiles>
    )
}