import styles from "../components/landingpagecomponent/style/topbanner.module.scss"
import TopBanner from "../components/landingpagecomponent/TopBanner";
import PlaceRecommend from "../components/landingpagecomponent/PlaceRecommend";
import Aboutpage from "../components/landingpagecomponent/Aboutpage";

function LandingPage() {
    return (
        <>
            <TopBanner/>
            <PlaceRecommend/>
            <Aboutpage/>
        </>
    );
}

export default LandingPage;