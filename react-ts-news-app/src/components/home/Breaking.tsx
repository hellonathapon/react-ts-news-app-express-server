import React from 'react';
import { INews } from '../../interfaces/interfaces';
import ContentLoader from 'react-content-loader'

interface BreakingProp {
    IBreaking: INews | null

}
const Breaking:React.FC<BreakingProp> = ({IBreaking}): JSX.Element => {
    return (
        <div className="home-grid-item home-grid-item-1 breaking">
            { IBreaking ? (
                <a href={IBreaking.url} target="_blank" className="card">
                    <img className="card-image" src={IBreaking.urlToImage} alt="image"/>
                    <div className="overlay"></div>
                    <article>
                        <h2>{IBreaking.title.slice(0, IBreaking.title.indexOf('-'))}</h2>
                    </article>
                    <div className="source">
                        <small>{new Date(IBreaking.publishedAt).toDateString()}</small>
                        <b><p>{IBreaking.title.slice(IBreaking.title.indexOf('-'))}</p></b>
                    </div>
                </a>
            ): <ContentLoader/> }
        </div>
    )
}

export default Breaking;