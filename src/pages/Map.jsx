import MapboxGl from 'mapbox-gl'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAddressesMap, getRouteMap } from '../modules/map';
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


import { Button, Select, InputLabel, MenuItem } from '@material-ui/core';
import '../styles/mapbox-gl.css';

const createMap = container => {
  MapboxGl.accessToken =
  'pk.eyJ1IjoicGlsdW0wOCIsImEiOiJja3hsdjR6MjYwdTJpMnFvYjA5NjRkZ29zIn0.4Pgbxqu9nM0pJioKycXZrQ'

  const map = new MapboxGl.Map({
    container: container,
    style: 'mapbox://styles/mapbox/light-v10',
    center: [30.315868, 59.939095],
    zoom: 12
  });

  return map;
};

const showRoute = (map, route) => {
  map.flyTo({
    center: route[0],
    zoom: 15
  });

  const layer = map.getLayer('route');

  if (layer) {
    map.getSource('route').setData({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    });
  } else {
    map.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      }
    });

    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#ffc617',
        'line-width': 8
      }
    });
  }
};

const Map = (props) => {
    const mapContainer = useRef(null);
    const dispatch = useDispatch();
  
    const addresses = useSelector(state => state.map.addresses);
    const route = useSelector(state => state.map.route);
    const error = useSelector(state => state.map.mapError);
    const loading = useSelector(state => state.map.mapLoading);
    const hasCard = useSelector(
      state => state.user.card.id !== undefined && state.user.card.id !== ''
    );
  
    const [map, setMap] = useState(null);
    const [routeShown, setRouteShown] = useState(false);
    const [routeSent, setRouteSent] = useState(false);
  
    useEffect(() => {
      dispatch(loadAddressesMap());
  
      const mapGL = createMap(mapContainer.current);
  
      mapGL.on('load', () => {
        setMap(mapGL);
      });
    }, []);
  
    useEffect(() => {
      if (map && route.length > 0) {
        showRoute(map, route);
      }
  
      if (routeSent) setRouteShown(true);
    }, [map, route]);
  
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [addressError, setAddressError] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
  
      if (!address1 || !address2) {
        setAddressError('Укажите обе точки маршрута');
      } else if (address1 === address2) {
        setAddressError('Точки маршрута не должны совпадать');
      } else {
        setAddressError('');
        setRouteSent(true);
        dispatch(getRouteMap({ address1, address2 }));
      }
    };
  
    const handleChange = e => {
      switch (e.target.name) {
        case 'address1':
          setAddress1(e.target.value);
          break;
        case 'address2':
          setAddress2(e.target.value);
          break;
        default:
      }
    };
  
    return props.isLoggedIn ? (
      <>
        <div className="tx-map-container">
          <div ref={mapContainer}></div>
        </div>
        <div className="tx-route-editor tx-box">
          {hasCard ? (
            routeShown ? (
              <p>
                Такси едет к вам.{' '}
                <span onClick={() => setRouteShown(false)} className="tx-link">
                  Повторить заказ
                </span>
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="tx-form">
                <div className="tx-line">
                  <InputLabel id="route-from-label">Откуда:</InputLabel>
                  <Select
                    name="address1"
                    value={address1}
                    onChange={handleChange}
                    labelId="route-from-label"
                  >
                    {addresses
                      .filter(address => address !== address2)
                      .map((address, i) => (
                        <MenuItem key={i} value={address}>
                          {address}
                        </MenuItem>
                      ))}
                  </Select>
                </div>
                <div className="tx-line">
                  <InputLabel id="route-to-label">Куда:</InputLabel>
                  <Select
                    name="address2"
                    value={address2}
                    onChange={handleChange}
                    labelId="route-to-label"
                  >
                    {addresses
                      .filter(address => address !== address1)
                      .map((address, i) => (
                        <MenuItem key={i} value={address}>
                          {address}
                        </MenuItem>
                      ))}
                  </Select>
                </div>
                <div className="tx-line">
                  <Button type="submit">
                    <span>Вызвать такси{loading}</span>
                    {loading ? <span className="tx-loader"></span> : null}
                  </Button>
                </div>
                <div className="tx-line">
                  <span className="tx-error">{addressError || error}</span>
                </div>
              </form>
            )
          ) : (
            <p>
              Для заказа такси необходимо заполнить{' '}
              <Link to="/profile" className="tx-link">
                Платежные данные
              </Link>
            </p>
          )}
        </div>
      </>
    ) : <Navigate replace to='/'/>
  };
  
  export default connect(
    (state) => ({isLoggedIn: state.user.isLoggedIn}),
  )(Map);