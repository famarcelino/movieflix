import React from 'react';
import { ReactComponent as Star } from '../../../../core/assets/images/star.svg';
import './styles.scss';

const CommentCard = () => {
    return (
        <div className="comment-container">
            <p className="comment-user"><span className="comment-star"><Star /></span>Maria Silva</p>
            <div className="comment-text">
                <p>
                    Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
                </p>
            </div>
        </div>
    );
};

export default CommentCard;