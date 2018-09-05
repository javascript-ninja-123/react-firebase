import React, {PureComponent,Fragment} from 'react';
import PropTypes from 'prop-types';


class Map extends PureComponent{
  render(){
    const {data,fn} = this.props;
    if(data.length <=0) return 'rendering..'
    return(
      <Fragment>
        {
          data.reduce((acc,val,i) => {
            const newVal = fn(val,i)
            acc[i] = newVal;
            return acc;
          },new Array(data.length))
        }
      </Fragment>
    )
  }
}

Map.propTypes = {
  data:PropTypes.array.isRequired
}

export default Map;
