import styles from "./style/topbanner.module.scss";
import plantImage from "../../images/plant.png";

function TopBanner() {
    return (
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h1>Save Our World By Plogging</h1>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h2>50+</h2>
                <p>활동 지역</p>
              </div>
              <div className={styles.stat}>
                <h2>100+</h2>
                <p>플로거 수</p>
              </div>
            </div>
          </div>
          <div className={styles.bannerImage}>
            <img src={plantImage} alt="Plant" />
          </div>
        </div>
    );
}

export default TopBanner;