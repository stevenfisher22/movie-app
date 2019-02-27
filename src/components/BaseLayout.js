import React from 'react';
import NavBar from './NavBar';

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}

export default BaseLayout
