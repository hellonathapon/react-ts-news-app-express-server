import React from 'react';
import useFetch from '../useFetch';
import Layout from '../components/Layout';
import { Breaking, Trending, News } from '../components/home'
import { INews } from '.././interfaces/interfaces';

const Home = (): JSX.Element => {

    // custom hook
    const data = useFetch<INews>('http://localhost:5000/news');
    console.log(data)


    return (
        <Layout>
            <div className="home-grid">
                { !data.error ? (
                    <>
                        <Breaking 
                            IBreaking={data.response ? data.response[0] : null}
                        />
                        <Trending TNews={data.response ? data.response : null}/>
                        <News data={data.response ? data.response : null}/>
                    </>
                ): 
                <div className="error-msg">
                    <i className="fa fa-times-circle"></i>
                    :( Unable to fetch data! check you internet connection and try again
                </div>
                }
            </div>
        </Layout>
    )
}

export default Home;