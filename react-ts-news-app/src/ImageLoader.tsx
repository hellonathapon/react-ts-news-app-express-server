import React from 'react'
import { useImage } from 'react-image'
import ImgPlaceholderPath from './img-placeholder.png'

interface IImg {
    url: string
}
const Img = ({url}: IImg) => {
    const {src, error} = useImage({
        srcList: url,
        useSuspense: true,
    })
    console.log('image loaded = ' + src)
    if (error) {
        return <img src={ImgPlaceholderPath} />
    }else {
        return <img src={src} />
    }
}

export default Img