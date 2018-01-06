var AngryBirds = React.createClass({
  prev() {
    this.setState({hinh: this.state.hinh ===1?1:this.state.hinh -1})
  },
  next() {
    this.setState({hinh: this.state.hinh ===6?6:this.state.hinh +1})
  },
  getInitialState: function() {
    return {
      hinh: 1
    };


  },
  render: function() {
    return(
      <div className = 'div-angrybird'>
        <img src={'images/' + this.state.hinh + '.png'}/>
        <hr/>
        <button onClick={this.prev}>Previous</button>
        <button onClick={this.next}>Next</button>
      </div>
    )
  }
});
ReactDOM.render(<AngryBirds />, document.getElementById('root'));
