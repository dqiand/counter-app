import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["t1", "t2", "t3"],
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1 //,
      //tags: this.state.tags.push("uu")
    });

    this.state.tags.push("uu");
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn=sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
