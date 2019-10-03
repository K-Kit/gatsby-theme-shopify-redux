/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Card, Link} from 'rebass'
import {Text, Box, Heading} from 'rebass'
import Img from 'gatsby-image'
import {navigate} from 'gatsby'
import {CompareAtPrice} from './CompareAtPrice'

export const ProductCard = ({ product }) => {
    return (
        <Card
            className="card-product card-plain"
            onClick={() => navigate(`/products/${product.handle}`)}
        >


            <Link to={`/products/${product.handle}`}>
                <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
            </Link>
            <Box p={2}>
                <Flex w={1}>
                    <Link to={`/products/${product.handle}`} sx={{ mx: 'auto', height: '2em', textAlign: 'center', fontSize:2 }}>
                        <Heading sx={{ mx: 'auto', height: '2em', textAlign: 'center', fontSize: 2 }}>
                            {product.title}
                        </Heading>
                    </Link>
                </Flex>
            </Box>
                <div sx={{ mr: 2, textAlign: 'right', my: 0 }}>
                    <CompareAtPrice variant={product.variants[0]} />
                </div>
        </Card>
    )
}
