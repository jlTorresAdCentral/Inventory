import { reviewCard, reviewHeader, reviewRateDate } from "../../assets/styles/review.component.css";
import avatarImg from "../../assets/images/avatar.jpeg";

interface ReviewComponentProps {
    reviewer: string
    starRate: number
    reviewDate: string
    comment: string
}

const ReviewComponent = (props: ReviewComponentProps) => {
    return (
        <div className={reviewCard}>
            <div className={reviewHeader}>
                <img
                    src={avatarImg}
                    alt="Avatar image"
                />
                <p>
                    {props.reviewer}
                </p>
            </div>

            <div className={reviewRateDate}>
                <p>
                    {props.starRate}
                </p>
                <p>
                    {props.reviewDate}
                </p>
            </div>

            <p>
                {props.comment}
            </p>
        </div>
    )
}

export default ReviewComponent;