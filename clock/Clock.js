class Clock extends React.Component {
	constructor() {
		super();
		let d= new Date()
		this.state = {color: "red"};
		this.state.date =d;
	}
  render() {
    return <div>
		  <input type="number" defaultValue={ this.state.date.getHours() }  max="23" />
		  <input type="number" defaultValue={ this.state.date.getMinutes() }  />
		  <input type="number" max="23" />
	</div>
  }
}
