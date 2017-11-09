import React ,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

export default class Navigation extends Component{
    render(){
        return(
            <nav className="navMain navbar navbar-fixed-bottom">
                    <ul className=" nav">
                            <li className="nav-item col-xs-3"><NavLink to="/"><span className="glyphicon glyphicon-home"></span>
                                <p>主页</p></NavLink></li>
                            <li className="nav-item col-xs-3"><NavLink to="/shoppingmall"><span className="glyphicon glyphicon-shopping-cart"></span>
                                <p>商城</p></NavLink></li>
                            <li  className="nav-item col-xs-3"><NavLink to="/comment"><span className="glyphicon glyphicon-comment"></span>
                                <p>点评</p></NavLink></li>
                            <li  className="nav-item col-xs-3"><NavLink to="/personal"><span className="glyphicon glyphicon-user"></span>
                                <p>我的</p></NavLink></li>
                    </ul>
            </nav>
        )
    }
}