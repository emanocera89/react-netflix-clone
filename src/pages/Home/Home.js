import Content from "../../components/Content/Content";
import MainView from "../../components/MainView/MainView";

function Home(props) {
    return (
        <main>
            <MainView />
            <Content titles={props.titles} genres={props.genres} />
        </main>
    )
}

export default Home