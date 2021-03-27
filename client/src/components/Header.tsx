import logo from '../logo.svg';
import tsLogo from '../ts-logo-128.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-brand">
                <div className="images">
                    <img src={tsLogo} className="ts-logo" alt="ts logo" />
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <article>
                    <a href="https://github.com/hellonathapon/react-ts-news-app" target="_blank" rel="noreferrer">Source Code</a>
                </article>
            </div>
        </div>
    )
}

export default Header