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
    if (error) {
        return <img src={ImgPlaceholderPath} alt="thumbnail" />
    }else {
        return <img src={src} alt="thumbnail"/>
    }
}

export default Img