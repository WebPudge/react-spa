import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';


import Home from './home/home.component.jsx';
import Comment from  './comment/comment.component.jsx';
import Navigation from './navigation/navigation.component.jsx';
import Personal from './personal/personal.component.jsx';
import ShoppingMall from './shopping-mall/shopping-mall.component.jsx';

class Routing extends Component {
    
    
    render() {
        return(
            <HashRouter>
                <div>
                    
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/shoppingmall"  component={ShoppingMall}/>
                        <Route path="/comment" component={Comment} />
                        <Route path="/personal"  component={Personal} />
                    </main>
                    <Navigation />
                </div>
            
            </HashRouter>
        )
    }
}
export default Routing