
import React from 'react';

class Button extends React.Component{
    render(){
        return (
            <button onClick={ this.props.method } className="btn search__button" type="button">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        );
    }
}

export default Button;


