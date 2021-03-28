// import React from 'react'
import { useImage } from 'react-image'
// import ImgPlaceholderPath from './img-placeholder.png'

interface IImg {
    url: string
}
const ImageLoader = ({url}: IImg) => {
    const {src} = useImage({
        srcList: url,
    })
    return <img src={src} alt="thumbnail"/>
}

export default ImageLoader