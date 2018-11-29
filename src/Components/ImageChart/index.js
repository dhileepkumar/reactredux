import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Config from '../../Config'
class ImageChart extends Component{
  render() {
    return <div className="no_of_files"><Link to={this.props.link}>
              <div className="bgimg"> 
                <img src={Config.assetspath+this.props.imagename} alt="dashbaord chart" /> 
                  <div className="txt">
                      <p>{this.props.count}</p>
                  </div>
              </div>
              <p>{this.props.text}</p>
            </Link> 
          </div>
  }
}
export default ImageChart
