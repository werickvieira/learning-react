
import React from 'react';

class Input extends React.Component{
    render(){
        return (
            <input name="q" type="search" value={ this.props.args } onChange={ this.props.method } className="search__input" placeholder="Digite o login ex: paulirish" />
        );
    }
}

export default Input;


