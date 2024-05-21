import { Component } from 'react';
import { FontLoader } from './src/helpers/FontLoader'
import AppNavigation from './src/components/ui/navigation/AppNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  async componentDidMount() {
    await FontLoader(); // Вызываем функцию загрузки шрифтов
    this.setState({ fontsLoaded: true });
  }
  
  render() {
    if (this.state.fontsLoaded) {
      return (
        <AppNavigation/>
      );
    } else {
      return null;
    }
  }
};

export default App;