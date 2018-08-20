import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MainNav } from "./components/mainNav/MainNav";
import { Notes } from "./components/noteList/Notes";
import { IndividualNote } from "./components/noteList/IndividualNote";
import { EditNote } from "./components/modifyNote/EditNote";
import { DeleteNote } from "./components/modifyNote/DeleteNote";

import "./css_styles/app.css";
import { CreateNote } from "./components/modifyNote/CreateNote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: "Bake Bread",
          description: "Make bread for the cat"
        },
        {
          id: 1,
          title: "Bake Cookies",
          description: "Make cookies for the cat"
        },
        {
          id: 2,
          title: "Bake Lasagna",
          description: "Make lasagna for the cat"
        },
        {
          id: 3,
          title: "Bake Mac",
          description: "Make mac for the cat"
        },
        {
          id: 4,
          title: "Bake Steak",
          description: "Make steak for the cat"
        },
        {
          id: 5,
          title: "Bake Rice",
          description: "Make rice for the cat"
        },
        {
          id: 6,
          title: "Bake Salad",
          description: "Make salad for the cat"
        },
        {
          id: 7,
          title: "Bake Tea",
          description: "Make tea for the cat"
        },
        {
          id: 8,
          title: "Bake Fish",
          description: "Make fish for the cat"
        },
        {
          id: 9,
          title: "Bake Tacos",
          description: "Make tacos for the cat"
        }
      ],
      noteTitle: "",
      noteDescription: ""
    };
  }

  inputChangeHandler = event => {
    console.log("InputChangeHandler", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("noteTitle", this.state.noteTitle);
    console.log("noteDescription", this.state.noteDescription);
    return (
      <div className="mainAppDiv">
        <Route path={"/"} component={MainNav} />
        <Route
          exact
          path={"/"}
          render={props => <Notes {...props} notes={this.state.notes} />}
        />
        <Route
          path={"/notes/:id"}
          render={props => (
            <IndividualNote {...props} notes={this.state.notes} />
          )}
        />
        <Route
          path={"/create"}
          render={props => (
            <CreateNote
              {...props}
              notes={this.state.notes}
              noteTitle={this.state.noteTitle}
              noteDescription={this.state.noteDescription}
              inputChangeHandler={this.inputChangeHandler}
            />
          )}
        />
        <Route
          path={"/edit/:id"}
          render={props => <EditNote {...props} notes={this.state.notes} />}
        />
        {/* <Route
          path={"/delete/:id"}
          render={props => <DeleteNote {...props} notes={this.state.notes} />}
        /> */}
      </div>
    );
  }
}

export default App;
