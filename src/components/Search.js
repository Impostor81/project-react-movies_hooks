import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: 'matrix',
      type: 'all',
    };

    this.searchInput = React.createRef();
  }

  handleKey = e => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  }

  handleFilter = e => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => this.props.searchMovie(this.state.search, this.state.type)
    );
  }

  componentDidMount() {
    this.props.searchMovie(this.state.search, this.state.type);
    this.searchInput.current.focus();
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='input-field'>
            <input
              type='search'
              placeholder='Movie you are looking for'
              className='validate'
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
              ref={this.searchInput}
            />
            <button
              className='btn searchBtn'
              onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
            >
              Search
            </button>
          </div>
          <div className='radioBtn'>
            <label>
              <input
                className='radio'
                name='movieType'
                type='radio'
                data-type='all'
                checked={this.state.type === 'all'}
                onChange={this.handleFilter}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className='radio'
                name='movieType'
                type='radio'
                data-type='movie'
                checked={this.state.type === 'movie'}
                onChange={this.handleFilter}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className='radio'
                name='movieType'
                type='radio'
                data-type='series'
                checked={this.state.type === 'series'}
                onChange={this.handleFilter}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
