import React, { Component } from 'react';
import Config from '../.././../Config';

class Basket extends Component {
    constructor(props){
        super(props);
        this.showBasketProducts = this.showBasketProducts.bind(this);
        this.listAllProducts = this.listAllProducts.bind(this);
        this.state = {
            basketcount : this.props.basketcount,
            show_basket_products : 0
        }
    }
    static getDerivedStateFromProps(props, state){
        if(state.show_basket_products === 1 && props.basketcount !== state.basketcount){
            props.filterProducts();
        }
        return {
            basketcount : props.basketcount
        }
    }

    showBasketProducts(){
        this.setState({show_basket_products : 1},()=>{
            document.getElementById("product-browser").reset();
            this.props.filterProducts();
        });
    }

    listAllProducts(){
        this.setState({show_basket_products : 0},()=>{ 
            document.getElementById("product-browser").reset();
            this.props.filterProducts(); 
        });
    }

    render(){
        return <div className="dwnbtn_group"> <input type="hidden" id="basket_products" value={this.state.show_basket_products} name="basket_products"/> 
        {(this.props.usertype === Config.userTypes.Retailer) ? 
            ((this.state.basketcount) ?
            <div>
                <button onClick={this.showBasketProducts} className="btn btn-primary basket_retailer" type="button"><i className="fa fa-shopping-cart"></i>   <span>Basket {(this.state.basketcount)  ? '('+this.state.basketcount+')' : ''}</span></button>
                <button onClick={this.props.export} className="btn btn-primary" type="button"><i className="fa fa-download"></i><span> Export to Excel</span></button>
                {(this.state.show_basket_products) ? <button onClick={this.listAllProducts} className="btn btn-primary" type="button"><i className="fa fa-arrow-left"></i><span> Back to Product List</span></button> : ''}
            </div>
            : 
            <div>
            <button className="btn btn-primary basket_retailer" type="button"><i className="fa fa-shopping-cart"></i>   <span>Basket</span></button>
            {(this.state.show_basket_products) ? <button onClick={this.listAllProducts} className="btn btn-primary" type="button"><i className="fa fa-arrow-left"></i><span> Back to Product List</span></button> : ''}
            </div>
            )
        : '' 
        } </div>

        
        
    }
}

export default Basket;

