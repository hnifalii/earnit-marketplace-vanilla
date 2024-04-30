class JSXDemo extends React.Component {
    handleOnClick = () => {
      console.log("clicked");
    };
    render() {
      return (
        <button id="btn" onClick={this.handleOnClick}>
          Click Here
        </button>
      );
    }
  }
  
  ReactDOM.render(<JSXDemo />, document.getElementById("root"));













































  
//   bukan hanif yg bikin