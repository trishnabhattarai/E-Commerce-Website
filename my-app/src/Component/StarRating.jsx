import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRating({ rating }) {
  // Round to nearest half for half stars
  const roundedRating = Math.round(rating * 2) / 2;

  // Build an array of stars
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold' }} />);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} style={{ color: 'gold' }} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={emptyStar} style={{ color: 'lightgray' }} />);
    }
  }

  return <div>{stars}</div>;
}
