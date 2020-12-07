import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onSubmitForm = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  // this undefined hatası çözümü
  // JSX kısmında onsubmit arrow function yapılmazsa
  // onSubmitForm = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onSubmitForm}>
          <div className='field'>
            <label>Image Search</label>
            {/* Eğer () koyarsak render olduğunda hemen çalışacaktır. O yüzden () koymuyoruz.. */}
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
