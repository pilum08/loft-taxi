import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import { Header } from '../components/Header'

export class Map extends Component {
    map=null
    mapContainer= React.createRef()
    componentDidMount(){
        mapboxgl.accessToken='pk.eyJ1IjoicGlsdW0wOCIsImEiOiJja3hsdjR6MjYwdTJpMnFvYjA5NjRkZ29zIn0.4Pgbxqu9nM0pJioKycXZrQ'
        this.map= new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [60.610511 ,56.831424],
            zoom:12
        })
    }
    componentWillUnmount(){
        this.map.remove()
    }
    render(){
        return (
            <>
            <Header/>
             <div className='map'>
           <div data-testid='map' className="map__container" ref={this.mapContainer}/>
        </div>
            </>
           
        ) 
    }
}