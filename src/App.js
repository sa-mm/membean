import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { callApi } from "./store/rootReducer";
import "./App.css";
import Logos from "./components/Logos";
import Random1 from "./components/Random1";
import Random2 from "./components/Random2";

const mapStateToProps = ({ apiResponse }) => ({ apiResponse });
const mapDispatchToProps = { callApi };

export class App extends Component {
  componentWillMount() {
    this.props.callApi();
  }

  render() {
    const { apiResponse } = this.props;

    return (
      <div>
        <div className="App">
          <div className="logos">
            {apiResponse &&
              apiResponse.images && <Logos images={apiResponse.images} />}
          </div>
        </div>
        <Random1 />
        <Random2 />
      </div>
    );
  }
}

App.propTypes = {
  callApi: PropTypes.func.isRequired,
  apiResponse: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
