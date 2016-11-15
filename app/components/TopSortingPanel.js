import React from 'react';

const TopSortingPanel = ({
  isFetching,
  selectedYear,
  selectedRating,
  years=[],
  ratings=[],
  sorting,
  onYearChange,
  onRatingChange,
  onSortingChange }) => {

  let template;
  if (isFetching) {
    template = (
      <div>Loading...</div>
    );
  } else {
    template = (
      <div>
        <div>
          Filters:
          <div>
            Year:
            <select
              defaultValue={selectedYear}
              onChange={e => onYearChange(e.target.value)}
            >
              <option value="all" >All</option>
              {years.map((year, index) =>
                <option key={index} value={year}>{year}</option>
              )}
            </select>
            Rating:
            <select
              defaultValue={selectedRating}
              onChange={e => onRatingChange(e.target.value)}
            >
              <option value="all" >All</option>
              {ratings.map((rating, index) =>
                <option key={index} value={rating}>{rating}</option>
              )}
            </select>
          </div>
        </div>
        <div>
          Select sorting:
          <select
            defaultValue={sorting}
            onChange={e => onSortingChange(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="alphabetically">Alphabetically</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <div>
      {template}
    </div>
  );
};

TopSortingPanel.propTypes = {
  selectedYear: React.PropTypes.string.isRequired,
  years: React.PropTypes.array.isRequired,
  sorting: React.PropTypes.string.isRequired,
  onYearChange: React.PropTypes.func.isRequired,
  onSortingChange: React.PropTypes.func.isRequired
};

export default TopSortingPanel;
