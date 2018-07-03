import React, {Component} from 'react'
import HeaderLinks from './HeaderLinks'
import HeaderHeadlines from './HeaderHeadlines';
import HeaderLogo from './HeaderLogo';

class Header extends Component{
    render() {
        return (
            <div className="expanded row header">
                <div className="clearfix">
                    <HeaderLogo />
                    <HeaderLinks />
                </div>
                <HeaderHeadlines />
            </div>
        )
    }
}

export default Header