import React from 'react';

const Review = ({ byline, headline, summary_short }) => {
    return (
        <div className="review">
            <li>
            <h3>{headline}</h3>
            <h4>By: {byline}</h4>
            <p>{summary_short}</p>
            </li>
        </div>
    )
}

const MovieReviews = ({ reviews }) => {
    let i = 0;
    // if (reviews.length === 0) throw 'WTF?'
    return (
        <div className="review-list">
            <ul>
            {reviews.map(review => 
                <div className="review">
                    <li>
                    <h3>{review.headline}</h3>
                    <h4>By: {review.byline}</h4>
                    <p>{review.summary_short}</p>
                    </li>
                </div>
                // <Review 
                // key={i++}
                // headline={review.headline} 
                // byline={review.byline}
                // summary_short={review.summary_short}
                //  />
        )
            }
            </ul>
        </div>
    )
};

MovieReviews.defaultProps = {
    reviews: []
}
  
  export default MovieReviews;