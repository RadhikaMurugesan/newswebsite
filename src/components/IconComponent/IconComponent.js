import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import { Categories } from '../../config/Constants';



const IconComponent = (props) => (

  (props.icon == 'category') ?
    <div className="category">
      {Categories.map((object) => (object.name == props.category) ? <FontAwesomeIcon icon={object.icon} /> : null)}
      <span className="categoryName">{props.category[0].toUpperCase() + props.category.slice(1)}</span>
    </div>
    :
    <div className="url">
      <FontAwesomeIcon icon={faGlobe} />
      <span className="urlName urlName-left">{props.url}</span>
    </div>

)

export default IconComponent