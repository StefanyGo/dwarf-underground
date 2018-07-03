import React, {Component} from 'react';
import Foot from './Foot'
import Ad from './Ad'
import Posts from './Posts'

class Main extends Component {
    render() {
        return (
        <main className="expanded row">
            <Posts />
            <Ad />
            <Foot />
        </main>
        )
    }
}

export default Main