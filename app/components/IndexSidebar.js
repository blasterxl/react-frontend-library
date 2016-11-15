import React from 'react';

const IndexSidebar = ({isFetching, selectedGenre, genres=[], onGenreChange}) => {
  let template;
  if (isFetching) {
    template = (
      <div>Loading...</div>
    );
  } else {
    template = (
      <ul>
        <li
          data-genre="all"
          onClick={e => onGenreChange(e.target.dataset.genre)}>
          Show all
        </li>
        {genres.map((category, index) => (
          <li
            data-genre={category}
            key={index}
            onClick={e => onGenreChange(e.target.dataset.genre)}>
            {category}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Genres</h2>
      {template}
    </div>
  );
};

IndexSidebar.propTypes = {
  selectedGenre: React.PropTypes.string.isRequired,
  genres: React.PropTypes.array.isRequired,
  onGenreChange: React.PropTypes.func.isRequired
};

export default IndexSidebar;
