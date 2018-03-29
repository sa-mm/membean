import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { callApi } from "./store/rootReducer";
import "./App.css";
import Logos from "./components/Logos";

const mapStateToProps = ({ apiResponse }) => ({ apiResponse });
const mapDispatchToProps = { callApi };

export class App extends Component {
  componentWillMount() {
    this.props.callApi();
  }

  render() {
    const { apiResponse } = this.props;

    return (
      <div className="App">
        <div className="logos">
          {apiResponse &&
            apiResponse.images && <Logos images={apiResponse.images} />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  callApi: PropTypes.func.isRequired,
  apiResponse: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
