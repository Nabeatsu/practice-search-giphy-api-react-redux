import React from "react";
import getUrls from "../actions/getUrls";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    const { buttonText } = this.props;
    return (
      <div>
        <h2>Find Your GIF</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    const { getUrls } = this.props;
    event.preventDefault();
    // 受け取ったメソッドを実行し、app の state を変更している
    getUrls(this.state.title);
  };
}
export default Search;
