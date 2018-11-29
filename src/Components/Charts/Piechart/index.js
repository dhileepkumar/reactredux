import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';


export default class Dashbaord extends Component{
  componentDidMount(){
  
  }
  
  render() {
    return <Doughnut data={this.props.data} width={this.props.width} height={this.props.height} options={this.props.option}/>
  }
}
