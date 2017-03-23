

import React from 'react';

class Empty extends React.Component{
    render(){
        return (
            <div className="empty">
                <i className="fa fa-3x fa-meh-o"></i><br />
                <span className="empty__user">Nenhum usuário encontrado.</span>
            </div>
        );
    }
}

export default Empty;


