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
## Exemplo

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

