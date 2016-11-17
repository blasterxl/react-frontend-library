import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sortingActions from '../actions/sortingActions';

class SearchTextBar extends React.Component {
  render () {
  	const { searchText} = this.props;
  	const { setSearchText } = this.props.actions;
    return (
      <div>
        <input
          type="search"
          ref="searchText"
          placeholder="Search books"
          value={searchText}
          onChange={() => {
            let searchText = this.refs.searchText.value;
            setSearchText(searchText);
          }}/>
       </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    searchText: state.sorting.searchText
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(sortingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTextBar);