import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// <Main />
type MyProps = {

};

type MyState = {
  timer: string;
};
class App extends React.Component<MyProps, MyState> {



  constructor(props: MyProps | Readonly<MyProps>, myState: MyState) {
    super(props);
    this.state = {
      timer: "timer",
    };
  }

  componentDidMount() {
  }




  render() {
    return (
      <div className='wrapper' >
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>

    );
  }

}



export default App;
