class UTCClock extends React.Component {
	constructor() {
		super();
		//let d= new Date()
		let d=new Date(new Date().toUTCString().slice(0, -3))
		this.state = {color: "red"};
		this.state.date =d;
	}
  render() {
    return <div>
UTC Time		  <input type="number" defaultValue={ this.state.date.getHours() }  max="23" />
		  <input type="number" defaultValue={ this.state.date.getMinutes() }  />
		  <input type="number" max="23" />
	</div>
  }
}
