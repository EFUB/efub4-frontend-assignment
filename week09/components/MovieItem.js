import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MovieItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 5px;
  #img {
    width: 150px;
    height: 250px;
  }
  h3 {
    font-size: 10px;
  }
`;

const MovieItem = ({ movie }) => {
  const { id, medium_cover_image, title } = movie;
  return (
    <MovieItemBlock>
      <Link to={`/detail/${id}`}>
        <img id="img" src={medium_cover_image} alt={title}></img>
      </Link>
      <h3>{title}</h3>
    </MovieItemBlock>
  );
};
MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};
export default MovieItem;
