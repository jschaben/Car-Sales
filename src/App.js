import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import {
  addFeature,
  addFeaturePrice,
  removeFeature,
  removeFeaturePrice
} from "./actions/featureActions";

// STEP 1: create the redux store

const App = props => {
  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carOnProps} />
        <AddedFeatures
          car={props.carOnProps}
          additionalFeatures={props.additionalFeaturesOnProps}
          removeItem={removeItem}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeaturesOnProps}
          buyItem={buyItem}
        />
        <Total
          buyItem={buyItem}
          car={props.carOnProps}
          additionalPrice={props.additionalPriceOnProps}
          additionalFeatures={props.additionalFeaturesOnProps}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  additionalPriceOnProps: state.additionalPrice,
  carOnProps: state.car,
  additionalFeaturesOnProps: state.additionalFeatures
});

export default connect(mapStateToProps, {
  addFeature,
  addFeaturePrice,
  removeFeature,
  removeFeaturePrice
})(App);