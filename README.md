# Quem está usando React

# Por que usá-lo?

# Dependências necessárias
 
  * npm install --save-dev babel-core
  * npm install --save-dev babel-cli
  * npm install --save-dev babel-preset-env
  * npm install --save-dev babelify
  * npm install --save-dev browserify
  * npm install --save-dev vinyl-source-stream 
  * npm install --save react react-dom
  * npm install --save-dev babel-preset-react
  * npm install --save-dev babel-preset-es2015
  * npm install --save-dev babel-polyfill
  * npm install --save-dev babel-register
  * npm install --save-dev babel-plugin-transform-react-jsx
  * npm install --save-dev eslint-plugin-react 


```jsx
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('container')
);
```
