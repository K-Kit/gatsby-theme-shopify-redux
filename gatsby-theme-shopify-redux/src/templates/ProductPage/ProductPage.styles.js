/** @jsx jsx */
import { keyframes } from '@emotion/core'
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {Component} from "react";
// export const Test = styled.div`
//  display: flex;
// `;
//

const THUMBNAIL_SIZE = '44px';
export const change = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ProductImageLink = (props) =>  <a {...props} sx={{
    display: 'block',
    position: 'relative',
    "&.change": {
    animation: `${change} ${IMAGE_CHANGE_ANIM_DURATION}ms ease-out forwards` },
    cursor: {lg: `zoom-in`},
    width: '100%'
}} />

export const ZoomHelper = (props) => <span {...props} sx={{
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 3,
    left: 1,
    padding: 1,
    position: 'absolute',
    top: 1,

    "svg": {
    fill: 'primary',
    height: '24px',
    width: '24px',
},
    display: {sm: 'flex', lg: 'none'},
}} />

export const StyledImage = (props) => <Img {...props} sx={{
    borderRadius: 3,
    boxShadow: `0 1px 10px rgba(0, 0, 0, 0.15)`,

}} />

export const ThumbNail = (props) => <Img {...props} sx={{

    border: `1px solid primary`,
    borderRadius: 1,
    height: THUMBNAIL_SIZE,
    marginRight: 2,
    width: THUMBNAIL_SIZE,
}} />


export const ProductThumbnailsContent = (props) => <div {...props} sx={{
    display: 'flex',
    height: '100%',
    pl: 2,
    justifyContent: [null, null, 'center'],
    minWidth: {lg: '100%'},
    padding: {lg: '3 0 0'},
}} />;

export const ProductThumbnailsRoot = (props) => <div {...props} sx={{
    height: THUMBNAIL_SIZE,
    // overFlowScroll: 'touch',
    // overflowX: 'scroll',
    width: '100%',
    my: [1,1,2]
}} />

export const ProductImagesDesktopRoot = (props) => <div {...props} sx={{
    mr: 3,
    width: '100%',
    "-webkit-overflow-scrolling": 'touch',

}} />
export const Thumbnails = (props) => <div {...props} sx={{
    mr: 3,
    width: '100%',

}} />

export const Thumbnail = (props) => <div {...props} sx={{
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,

}} />


export const ProductThumbnails = (props) => {
    const handleClick = (image, callback) => event => {
        event.preventDefault();
        callback(image);
    };
    const { images, className = '' } = props;

    return (
        <ProductThumbnailsRoot className={className}>
            <ProductThumbnailsContent>
                {images.map((image, idx) => {
                    const {
                        id,
                        localFile: {
                            childImageSharp: { fluid }
                        }
                    } = image;
                    return (
                        <Thumbnail
                            key={id}
                            onClick={handleClick(image, props.setFeaturedImage)}
                            href={fluid.src}
                        >
                            {typeof fluid !== 'undefined'&&  <Img fluid={fluid} />}
                        </Thumbnail>
                    );
                })}
            </ProductThumbnailsContent>
        </ProductThumbnailsRoot>
    )
}


const IMAGE_CHANGE_ANIM_DURATION = 2
class ProductImage extends Component {
    imageLink;

    componentDidUpdate = prevProps => {
        if (prevProps.image.id !== this.props.image.id) {
            // this.imageLink.classList.add('change');
            //
            // setTimeout(
            //     () => this.imageLink.classList.remove('change'),
            //     IMAGE_CHANGE_ANIM_DURATION
            // );
        }
    };

    handleClick = callback => event => {
        event.preventDefault();

        callback(this.props.image);
    };

    render() {
        const {
            image: {
                localFile: {
                    childImageSharp: { fluid }
                }
            },
            onClick,
            imageFeatured = null
        } = this.props;

        return (
            <ProductImageLink
                ref={el => {
                    this.imageLink = el;
                }}
                href={fluid.src}
                onClick={this.handleClick(onClick)}
            >
                <StyledImage fluid={imageFeatured ? imageFeatured : fluid} alt="" sx={{width: ['75vw','75vw','100%']}} />
                {/*<ZoomHelper>*/}
                {/*    <MdZoomIn />*/}
                {/*</ZoomHelper>*/}
            </ProductImageLink>
        );
    }
}


export const ProductImagesDesktop = ({ images, imageFeatured, imageOnClick }) => {
    const image = images[0];
    return (
        <ProductImagesDesktopRoot>
            <ProductImage
                image={imageFeatured ? imageFeatured : image}
                onClick={imageOnClick}
            />
            <ProductThumbnails images={images} setFeaturedImage={imageOnClick} />
        </ProductImagesDesktopRoot>
    );
};


const ProductImagesMobileRoot = (props) => <div {...props} sx={{
    '-webkit-overflow-scrolling': 'touch',
    overflowX: 'scroll',
    padding: 2,
    pb: 1,
    width: '100%',

}} />

const ProductImagesMobileContent = (props) => <div {...props} sx={{
    display: 'inline-flex',
    overflowX: 'scroll',

}} />


export const ProductImagesMobile = ({ images, imageOnClick }) => (
    <ProductImagesMobileRoot>
        <ProductImagesMobileContent>
            {images.map((image, idx) => (
                <ProductImage key={idx} image={image} onClick={imageOnClick} sx={{
                    flexShrink: 0,
                    mr: 2,

                }} />
            ))}
        </ProductImagesMobileContent>
    </ProductImagesMobileRoot>
);