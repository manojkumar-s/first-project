import React, {Component} from 'react';


class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.Timer = setInterval(()=> this.changeTime(),1000);
    }

     changeTime(){
        this.setState({date : new Date()});
    }

    componentWillMount(){
        clearInterval(this.Timer);
    }

    render() {
        return(
            <div className='Clock' >
                <h2>Curent Time is { this.state.date.toLocaleTimeString() }</h2>
            </div>
        );
    }
}

export default Clock;
