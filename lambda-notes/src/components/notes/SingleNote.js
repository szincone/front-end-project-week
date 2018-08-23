import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/singlenote.css";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    let ID = parseInt(this.props.match.params.id, 10);
    this.state = {
      allNotes: this.props.notes,
      id: parseInt(this.props.match.params.id, 10),
      note: this.props.notes.filter(note => {
        return note.id === ID;
      })
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
      this.setState({ allNotes: this.props.notes });
    }
  }

  render() {
    // if statement to show modal
    if (!this.props.show) {
      return (
        <div className="singleNoteDiv">
          <div className="buttonsSingleNoteDiv">
            <Link to={`/edit-note/${this.state.id}`} key={this.state.id}>
              <button className="editButton">Edit</button>
            </Link>
            <button onClick={this.props.toggleModal}>Delete</button>
          </div>
          <div className="singleNoteTextDiv">
            <h2>{this.state.note[0].title}</h2>
            <h4>{this.state.note[0].description}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="singleNoteDiv">
          <div className="buttonsSingleNoteDiv">
            <Link to={`/edit-note/${this.state.id}`} key={this.state.id}>
              <button className="editButton">Edit</button>
            </Link>
            <button onClick={this.props.toggleModal}>Delete</button>
          </div>

          <div className="backdrop">
            <div className="modal">
              {this.props.children}
              <div>
                <button
                  deletenotenumber={this.state.id}
                  onClick={this.props.deleteNoteHandler}
                >
                  Deleteinside
                </button>
                <button onClick={this.props.toggleModal}>Cancel</button>
              </div>
            </div>
          </div>

          <div className="singleNoteTextDiv">
            <h2>{this.state.note[0].title}</h2>
            <h4>{this.state.note[0].description}</h4>
          </div>
        </div>
      );
    }
  }
}

export default SingleNote;
