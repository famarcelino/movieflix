import React from 'react';
import { Review } from 'core/types/Movie';
import { ReactComponent as Star } from '../../../../core/assets/images/star.svg';
import './styles.scss';

type Props = {
    reviews: Review;
}

const CommentCard = ({reviews}: Props) => {
    
    return (
        <div className="comment-container">
            <p className="comment-user">
                <span className="comment-star"><Star /></span>
                {reviews.userId}
            </p>
            <div className="comment-text">
                <p>
                    {reviews?.text}
                </p>
            </div>
        </div>
    );
};

export default CommentCard;