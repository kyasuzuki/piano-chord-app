import React from "react";
import Dimensions from "react-dimensions";
import {
  Box,
  Button,
  Text,
  ResponsiveContext,
  Grommet,
  grommet
} from "grommet";

class DimensionsProvider extends React.Component {
  render() {
    return (
      <Box>
        {this.props.children({
          containerWidth: this.props.containerWidth,
          containerHeight: this.props.containerHeight
        })}
      </Box>
    );
  }
}

export default Dimensions()(DimensionsProvider);
