import React, {Suspense} from 'react';
import { INews } from '../../interfaces/interfaces';
import Img from '../../ImageLoader'
import {ErrorBoundary} from 'react-error-boundary'
import ImgPlaceholderPath from '../../img-placeholder.png'

interface NewsProp {
    data: INews[] | null
}

function ErrorFallback({error, resetErrorBoundary}: {error: any, resetErrorBoundary: any}) {
    return (
      <img src={ImgPlaceholderPath} alt="thumbnail"/>
    )
}

const News:React.FC<NewsProp> = ({data}) => {

    

    return (
        <div className="home-grid-item home-grid-item-3 news">
            { data ? data.slice(6).map((n,i) => (
                <a href={n.url} target="_blank" rel="noreferrer" key={i} className="news-card">
                    <figure>
                        {/* For handling component error on rendering */}
                        <ErrorBoundary
                            FallbackComponent={ErrorFallback}
                            onReset={() => {
                            // reset the state of your app so the error doesn't happen again
                            }}
                        >
                            <Suspense fallback={<div>Loading...</div>}>
                                <Img url={n.urlToImage}/>
                            </Suspense>
                        </ErrorBoundary>
                    </figure>
                    <article>
                        <p>{n.title}</p>
                    </article>
                </a>
            )): null }
        </div>
    )
}

export default News;