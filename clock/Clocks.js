class Clocks extends React.Component {
	constructor() {
		super();
		let d= new Date()
		this.state = {color: "red"};
		this.state.date =d;
	}
  render() {
    return <div>
		  <Clock/>
		  <UTCClock/>

	</div>
  }
}
