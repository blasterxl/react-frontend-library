import React from 'react';
import { Grid } from 'semantic-ui-react';

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
      <div></div>
    );
  } else {
    template = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <form className="ui form">
              <div className="field">
                <label>Year</label>
                <select
                  defaultValue={selectedYear}
                  onChange={e => onYearChange(e.target.value)}
                  >
                  <option value="all">All</option>
                  {years.map((year, index) =>
                    <option key={index} value={year}>{year}</option>
                  )}
                </select>
              </div>
            </form>
          </Grid.Column>
          <Grid.Column width={3}>
            <form className="ui form">
              <div className="field">
                <label>Rating</label>
                <select
                  defaultValue={selectedRating}
                  onChange={e => onRatingChange(e.target.value)}
                  >
                  <option value="all">All</option>
                  {ratings.map((rating, index) =>
                    <option key={index} value={rating}>{rating}</option>
                  )}
                </select>
              </div>
            </form>
          </Grid.Column>
          <Grid.Column width={3}>
            <form className="ui form">
              <div className="field">
                <label>Sorting</label>
                <select
                  defaultValue={sorting}
                  onChange={e => onSortingChange(e.target.value)}
                  >
                  <option value="featured">Featured</option>
                  <option value="alphabetically">Alphabetically</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
