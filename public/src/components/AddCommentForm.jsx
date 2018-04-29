import React from 'react';
import { Checkbox, MenuItem, Grid, Row, Col, Clearfix, Panel} from 'react-bootstrap'

class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      formStatus: false,
      showDiv: false,
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
    const { showDiv } = this.state;
    return (
      <div>
        <form onSubmit={this.submit}>
          <img id="userPic" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c0.0.342.342/10401990_10202284489580545_4866479589637870884_n.jpg?_nc_cat=0&oh=1447b3389d760e727197876f958f604f&oe=5B5D1B2A" alt=""></img>
            <textarea className="addComment" placeholder="Add a comment..." 
                      onChange={this.updateText} 
                      value={this.state.comment} 
                      onClick={() => {this.setState({ showDiv: true }); {this.toggleForm()}}}
                      style={{height: this.state.formStatus ? 75 : 55 }}
            />
           {showDiv && (
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