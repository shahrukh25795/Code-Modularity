export const StarRating = (rating) => {
    let ratingStar = ''
    for (let i = 0; i < rating; i++) {
        ratingStar = `${ratingStar} <img src="/images/star2.svg" />`
    }
    let unFillStar = 5 - rating;
    if (unFillStar > 0) {
        for (let i = 0; i < unFillStar; i++) {
            ratingStar = `${ratingStar} <img src="/images/without_fill_star.svg" />`
        }
    }
    return ratingStar;
}