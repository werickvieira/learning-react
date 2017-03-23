# Learning React

## Por que usá-lo?
   * Virtual DOM
   * Componentes reutilizáveis
   * SEO / Servidor
   
## Dependências necessárias
 
  * npm install --save-dev babel-core
  * npm install --save-dev babel-cli
  * npm install --save-dev babel-preset-env
  * npm install --save-dev babelify
  * npm install --save-dev browserify
  * npm install --save-dev vinyl-source-stream 
  * npm install --save react react-dom
  * npm install --save-dev babel-preset-react
  * npm install --save-dev babel-preset-e
  * npm install --save-dev babel-polyfill
  
  * npm install --save-dev babel-register
  * npm install --save-dev babel-plugin-transform-react-jsx
  * npm install --save-dev eslint-plugin-react 

## Sintaxe
jsx
```jsx
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, mountNode)
```

vanilla
```js
class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), mountNode);
```
## Demonstração

public/index.html

```html
  <main role="main">
    <section id="main">
    </section><!-- /#main -->
  </main><!--/main -->
```

public/js/main.js

```js
import React    from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

```
public/js/components/app.jsx

```jsx
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
      parametro: ''
    };

    // Métodos
    this.atualizarParametro = this.atualizarParametro.bind(this);
  }

  atualizarParametro( e ){
    this.setState({paramBusca: e.target.value});
  }

  render() {
    return (
      <div className="content limit">
        <form action="" className="search">
          <Input args={this.state.paramBusca} method={this.atualizarParametro} />
          <Button />
        </form>

        {this.state.status ? (<Loading></Loading>) : null}
        {this.state.empty  ? (<Empty></Empty>) : null}
        {this.state.dados === "" || this.state.dados === undefined ? "" : <Profile obj={ this.state.dados }></Profile>}

      </div>
    );
  }
}

export default App;
```


