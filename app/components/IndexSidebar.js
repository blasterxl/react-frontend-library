import React from 'react';
import { Menu, Header, Image } from 'semantic-ui-react';

const IndexSidebar = ({isFetching, selectedGenre, genres=[], onGenreChange}) => {
  let template;
  if (isFetching) {
    template = (
      <div>Loading...</div>
    );
  } else {
    template = (
      <Menu className='index-sidebar' vertical>
        <Menu.Item
         data-genre="all"
         onClick={e => onGenreChange(e.target.dataset.genre)}>
         Show all
        </Menu.Item>
        {genres.map((category, index) => (
          <Menu.Item
            data-genre={category}
            key={index}
            onClick={e => onGenreChange(e.target.dataset.genre)}>
            {category}
          </Menu.Item>
        ))}
      </Menu>
    );
  }

  return (
    <div>
      <Header className='category-header' as='h3' icon='tags' content='Category' />
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
