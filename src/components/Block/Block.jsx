import React from 'react';
import PropTypes from 'prop-types';

require('./Block.css');

const Block = props => (<div className={'block'} >
	{props.piece !== '-' &&
		<div>{props.piece}</div>
    }
</div>);

Block.propTypes = {
	piece: PropTypes.string.isRequired,
};

export default Block;
