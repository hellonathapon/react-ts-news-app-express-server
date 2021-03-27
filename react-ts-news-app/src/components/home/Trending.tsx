import React from 'react'
import { INews } from '../../interfaces/interfaces';
import {BulletList} from 'react-content-loader'

interface TrendingNews {
    TNews: INews[] | null
}

const Trending: React.FC<TrendingNews> = ({TNews}): JSX.Element => {
    return (
        <div className="home-grid-item home-grid-item-2 trending">

            { TNews ? TNews.slice(1, 5).map((n, i) => (
                <div className="trending-card" key={i}>
                    <h3><a href={n.url} target="_blank">🔥 {n.title.slice(0, n.title.indexOf('-'))}</a></h3>
                    <small>{n.description}</small>
                </div>
            )): Array.from({length: 2}, (_,i) => (
                <BulletList key={i}/>
            )) }
        </div>
    )
}

export default Trending;