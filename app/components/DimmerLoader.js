import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const DimmerLoader = ({active}) => {
  return (
    <div>
      <Dimmer.Dimmable dimmed={active}>
        <Dimmer active={active} page inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
      </Dimmer.Dimmable>
    </div>
  );
};

export default DimmerLoader;
