import React, { useEffect, useState } from 'react';
import styles from './BeerCard.scss';
import APIService from '../../service/Api';

const BeerCard = props => {

	return (
		<div style={{display:'flex'}}>
			<div>
				<img src={props.imagefile.image} className="beer-image"></img>
			</div>

			<div>
				<p className="prod-name">{props.item.name}</p>
				<br />
				<span>{props.item.style} Style</span><br />
				<span>{props.item.ounces} Ounces</span><br />
				<span>{props.item.abv} ABV</span>
				{
					props.item.ibu && (
						<span>{props.item.ibu} IBU</span>
					)
				}
			</div>
		</div>
	)
}

export default BeerCard;
