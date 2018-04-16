import React from 'react';

class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
    };
    this.updateName = this.updateName.bind(this);
    this.updateText = this.updateText.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  updateText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    const { name, quantity } = this.state;
    this.props.addComment({ name, quantity });
    this.setState({ name: '', quantity: '' });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input placeholder="Add Name" onChange={this.updateName} value={this.state.name} required />
        <input placeholder="Add Comment" onChange={this.updateText} value={this.state.text} required />
        <button type="submit">Post</button>
      </form >
    );
  }
}

export default AddCommentForm;