import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class SteamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <StreamForm onSubmit={this.onSubmit} label='Create a Stream' />
      </div>
    );
  }
}

export default connect(null, {
  createStream,
})(SteamCreate);
