var React = require('react');

class App extends React.Component {
    render() {
        var myStyle = {
            color: '#FF0000'
        }

        return (
            <div>
                <Header/>
                <Content/>
                <p>{1 + 1}</p>
            </div>
        );

    }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}


export default App;