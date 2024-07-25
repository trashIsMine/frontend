import React from 'react';
import styles from './style/reviewBanner.module.scss';
import review1 from '../../images/review1.png'; // 예시 이미지 경로, 실제 이미지로 대체하세요
import review2 from '../../images/review2.png'; // 예시 이미지 경로, 실제 이미지로 대체하세요

const reviews = [
    {
        id: 1,
        text: "플로깅을 처음 시작한 지 3개월이 되어갑니다. 처음에는 단순히 운동을 하면서 환경도 지키자는 마음으로 시작했는데, 이제는 일상의 일부가 되었습니다. 플로깅은 공원이나 강가를 뛰면서 동시에 쓰레기를 줍는 활동으로, 체력도 기르고 환경도 소중히 하는 것은 물론, 지역 사회의 환경 개선에도 큰 도움이 됩니다.",
        name: "Minhyuk Cho",
        role: "Youtuber",
        rating: 4.5,
        imgSrc: review1
    },
    {
        id: 2,
        text: "플로깅은 제가 요즘 가장 즐기는 활동 중 하나입니다. 자연 속에서 운동을 하며 스트레스를 해소하고, 함께 하는 친구들과 더욱 친밀해질 수 있어요. 플로깅을 통해 환경도 지키고, 더욱 건강해질 수 있습니다.",
        name: "Seesung Park",
        role: "Photographer",
        rating: 4.7,
        imgSrc: review2
    }
];

const ReviewBanner = () => {
    return (
        <div className={styles.reviewBanner}>
            <h2>참여자들의 리뷰를 확인해보세요.</h2>
            <div className={styles.reviews}>
                {reviews.map(review => (
                    <div key={review.id} className={styles.review}>
                        <p className={styles.reviewText}>{review.text}</p>
                        <div className={styles.reviewInfo}>
                            <img src={review.imgSrc} alt={review.name} className={styles.reviewImg} />
                            <div className={styles.reviewDetails}>
                                <p className={styles.reviewName}>{review.name}</p>
                                <p className={styles.reviewRole}>{review.role}</p>
                            </div>
                            <p className={styles.reviewRating}>⭐ {review.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewBanner;
