import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/rate.css';

export default function Rate({ rating }) {
  const NumberOfStars = [1, 2, 3, 4, 5];
  return (
    <div className="rate">
      {NumberOfStars.map((stars) =>
        rating >= stars ? (
          <p className="full-star"><FontAwesomeIcon icon={faStar} /></p>
        ) : (
          <p className="empty-star"><FontAwesomeIcon icon={faStar} /></p>
        )
      )}
    </div>
  );
}