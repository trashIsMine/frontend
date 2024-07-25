import TopBanner from "../components/landingpagecomponent/TopBanner";
import PlaceRecommend from "../components/landingpagecomponent/PlaceRecommend";
import Aboutpage from "../components/landingpagecomponent/Aboutpage";
import ReviewBanner from "../components/landingpagecomponent/ReviewBanner";
import styles from "../styles/landigngpage.module.scss"
import BottomBanner from "../components/BottomBanner";

function LandingPage() {
    return (
        <div className={styles.landingPage}>
            <TopBanner/>
            <PlaceRecommend/>
            <Aboutpage/>
            <ReviewBanner/>
            <BottomBanner/>
        </div>
    );
}

export default LandingPage;