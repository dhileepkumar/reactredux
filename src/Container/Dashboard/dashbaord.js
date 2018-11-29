import React,{Component} from 'react';
import { Col,Row  } from 'react-bootstrap';
import Piechart from '../../Components/Charts/Piechart'
import ImageChart from '../../Components/ImageChart'
import Config from '../../Config';

const option1 =  {
	cutoutPercentage: 80,
	legend: {
		display: false
	},
	layout:{
		padding:40
	}, 
	elements: {
		arc: {
			roundedCornersFor: 0
		},
		center: {
			text: '67%',
		}
	}
};


const GetImageChart = (props) =>{
    let leftdetails='';
    if(props.details){
        if(props.details.length){
            leftdetails = props.details.map((list, key)=>{
                return <ImageChart key={key} link={Config.userPath[props.user_type]+'productbrowser/'+list.status_name} imagename={list.status_color_image} count={list.count} text={list.status_name}/>
            })
        }
    }
    return leftdetails;
 }
 


export default class Dashbaord extends Component{
    constructor(props){
        super(props);
        this.state ={
            rightpannel:[],
            products:0,
            leftpannel:[],
            colorcode:[],
            colorcount:[]
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.dashboard.hasOwnProperty('active_count')){
            return {
                leftpannel : props.dashboard.left_panel,
                products : props.dashboard.active_count,
                rightpannel : props.dashboard.right_panel,
                colorcode : props.dashboard.pie_chart.color_code,
                colorcount : props.dashboard.pie_chart.color_count
            }
        }
        return null
       
    }

    componentDidMount(){
        document.title = Config.name+' Dashboard ';
        var token_value={
            token:this.props.token
        }
        this.props.DashbaordListing(token_value);
        this.props.ResetStateMessage('login');
        this.props.ResetStateMessage('register');
		this.props.ResetStateMessage('reset');
		this.props.ResetStateMessage('forget');
    }


  render() {
    const chart4 = {
        labels: {display:false},
        datasets: [{
            data: this.state.colorcount,
            borderWidth:0,
            backgroundColor: this.state.colorcode,
        }],
        text: '23%'
    };
    return (
      <div className="dashboard_chart">
    <Row>
				<Col xs={12} md={3}>
						<div className="left_side">
                            <GetImageChart details = {this.state.leftpannel} user_type={this.props.user_type}/>
						</div>
				</Col>
				<Col xs={12} md={6}>
							<div className="no_files" >
									<div id="pieChart">
										<Piechart width={200} height={200}  data={chart4} option={option1} text={'8 Active'}/>
                                        <div className="chartCount">
                                            {this.state.products} <br/> Active
                                        </div>
									</div>
							</div>
				</Col>
				<Col xs={12} md={3}>
						<div className="right_side">
                        <GetImageChart details = {this.state.rightpannel} user_type={this.props.user_type}/>
						</div>
				</Col>
                </Row>
      </div>
    );
  }
}
