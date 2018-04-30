import React from 'react';
import { Checkbox, MenuItem, Grid, Row, Col, Clearfix, Panel} from 'react-bootstrap'

class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      formStatus: false,
      showForm: false,
    };
    this.updateText = this.updateText.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(e) {
    this.setState({
      formStatus: true
    })
  }

  updateText(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    const { comment } = this.state;
    this.props.postComment({ comment });
    this.setState({ comment: '' });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <form onSubmit={this.submit}>
          <img id="userPic" src="https://avatars3.githubusercontent.com/u/33105110?s=400&u=473e3ba3a54d0fbef2b048a54d7810b5629356ea&v=4" alt=""></img>
            <textarea className="addComment" placeholder="Add a comment..." 
                      onChange={this.updateText} 
                      value={this.state.comment} 
                      onClick={() => {this.setState({ showForm: true }); {this.toggleForm()}}}
                      style={{ height: this.state.formStatus ? 75 : 55, marginBottom: this.state.formStatus ? 0 : 24}}
            />
           {showForm && (
            <Panel className='postForm'>
              <span className='checkbox'><Panel.Body><Checkbox/></Panel.Body></span>
              <span className='postOnFb'> Also post on Facebook </span>
              <button className='postButton' 
                    disabled={!this.state.comment} 
                    style={{ backgroundColor: !this.state.comment ? 365899 : '#4267b2' }}
                    type="submit">Post</button>
            </Panel>)}
        </form >
      </div> 
    );
  }
}

export default AddCommentForm;