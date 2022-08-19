import "./App.scss";
import Image from "../../public/images/image-header-desktop.jpg";
import Info from "../components/info/info";

function App() {
    return (
        <div className="App">
            <main className="App__main">
                <h1 className="main__title">
                    Get <span className="main__title--color">insights </span>
                    that help your business grow.
                </h1>
                <p className="main__desc">
                    Discover the benefits of data analytics and make better
                    decisions regarding revenue, customer experience, and
                    overall efficiency.
                </p>

                <div className="main__info">
                    <Info name="companies" value="10k+"></Info>
                    <Info name="templates" value="314"></Info>
                    <Info name="queries" value="12M+"></Info>
                </div>
            </main>
            <div className="App__container">
                <img src={Image} alt="Image" className="container__img" />
            </div>
        </div>
    );
}

export default App;
