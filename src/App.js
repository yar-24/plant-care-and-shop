
import React from "react";
import Navigation from "./Navigation";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { LocaleProvider } from './contexts/LocaleContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,

      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale
              }
            }
          });
        }
      }
    };
  }

  render() {
  return (
    <LocaleProvider value={this.state.localeContext}>
    <Provider store={store}>
      <Router>
        <Navigation />
      </Router>
    </Provider>
    </LocaleProvider>
  );
  }
}

export default App;
