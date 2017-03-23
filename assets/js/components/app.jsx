
import React   from 'react';
import Axios   from 'axios';
import Profile from './profile.jsx';
import Loading from './loading.jsx';
import Input   from './input.jsx';
import Button  from './button.jsx';
import Empty   from './empty.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paramBusca: '',
      dados: '',
      status: false,
      empty: false
    };

    // Métodos
    this.atualizarParametro = this.atualizarParametro.bind(this);
    this.realizarBusca = this.realizarBusca.bind(this);
    this.sucesso = this.sucesso.bind(this);
    this.erro = this.erro.bind(this);
  }

  atualizarParametro( e ){
    this.setState({paramBusca: e.target.value});
  }

  realizarBusca( e ){
    e.preventDefault();
    this.setState({dados : ''});
    let _param = this.state.paramBusca.trim();
    this.componentDidMount(_param);
  }

  componentDidMount( userLogin ) {
    if (userLogin !== "" && userLogin !== undefined) {
      const _REQ = {url : "https://api.github.com/users/"};

      this.setState({status : true});
      this.setState({empty : false});

      Axios.get(_REQ.url += userLogin)
      .then( this.sucesso, this.erro );
    }
  }

  sucesso( obj ){
    this.setState({status : false});
    this.setState({dados: obj.data});
  }

  erro( err , xhr ){
    this.setState({status : false});
    this.setState({empty  : true});
  }

  enviar(e){
    e.preventDefault();
  }

  render() {
    return (
      <div className="content limit">
        <form action="" className="search" onSubmit={this.enviar.bind(this)}>
          <Input args={this.state.paramBusca} method={this.atualizarParametro} />
          <Button method={this.realizarBusca} />
        </form>

        {this.state.status ? (<Loading></Loading>) : null}
        {this.state.empty  ? (<Empty></Empty>) : null}
        {this.state.dados === "" || this.state.dados === undefined ? "" : <Profile obj={ this.state.dados }></Profile>}

      </div>
    );
  }
}

export default App;

