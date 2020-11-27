import React, { useEffect, useState ,useRef} from 'react';
import styles from './BeerList.scss';
import APIService from '../../service/Api';
import BeerCard from '../BeerCard/BeerCard';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const BeerList = props => {
	const [items, setItems] = useState();
	const [beerImages, setBeerImages] = useState();
	const [startIndex, setStartIndex] = useState(0);
	const textInput = useRef()
	useEffect(() => {
		APIService.RetrieveItems().then(data => {
			setItems(data);
		}).catch(err => {
			console.log(err)
		})
	}, ['beerList'])
	useEffect(() => {
		APIService.RetrieveImageData().then(data => {
			setBeerImages(data)
		}).catch(err => {
			console.log(err)
		})
	}, ['beerImages'])

	const PrevPage = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 1)
			items.slice([startIndex * 20], [(startIndex * 20) + 20]).map((item, index) => (
				<div className="productListView">
					<BeerCard item={item} imagefile={beerImages[index % 5]}></BeerCard>
				</div>
			))
		}

	}
	const NextPage = () => {
		debugger;
		if (startIndex < (items.length/20)) {
			setStartIndex(startIndex + 1)
			items.slice([startIndex * 20], [(startIndex * 20) + 20]).map((item, index) => (
				<div className="productListView">
					<BeerCard item={item} imagefile={beerImages[index % 5]}></BeerCard>
				</div>
			))
		}

	}
	const searchText = ()=>{
		items.slice([startIndex * 20], [(startIndex * 20) + 20]).map((item, index) => {
			if(item.name.includes(textInput.current.value)){
				(
					<div className="productListView">
							<BeerCard item={item} imagefile={beerImages[index % 5]}></BeerCard>
						</div>
				)
			}
		})
	}
	return (
		<div>
			<div className="search-item">
				<input placeholder="Enter name to search" ref={textInput} type='text' id="search-text"></input>
				<button className="search-btn" onClick={searchText}>Search</button>
			</div>
			<div className="list-items">
				{items && beerImages &&
					items.slice([startIndex * 20], [(startIndex * 20) + 20]).map((item, index) => (
						<div className="productListView">
							<BeerCard item={item} imagefile={beerImages[index % 5]}></BeerCard>
						</div>
					))

				}
			</div>
			<div className="pagination">
				<div className="prev">
					<NavigateBeforeIcon onClick={PrevPage}></NavigateBeforeIcon>
				</div>
				<div className="next">
					<NavigateNextIcon onClick={NextPage}></NavigateNextIcon>
				</div>
			</div>
		</div>

	)
}

export default BeerList;
