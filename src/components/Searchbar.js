import React, { Component } from 'react'

export default class Searchbar extends Component {
  state = { term: '' }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label forname='search'>Search Videos</label>
            <input
              id='search'
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}></input>
          </div>
        </form>
      </div>
    )
  }
}
