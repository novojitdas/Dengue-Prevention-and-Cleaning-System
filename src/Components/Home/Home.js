import React from "react";
import './Home.css'
import SearchForm from './../SearchForm/SearchForm';
import SearchFormGreen from './../SearchForm/SearchFormGreen';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import { useState } from "react";

const Home = () => {
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    }),
    greenIcons = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    });

    //  Use the state hook:
  const [icon, setIcon] = useState(blueIcon);

  return (
    <div className="App">

      <MapContainer
        style={{ height: "750px", marginLeft:"-300px" }}
        center={[40.7608, -111.891]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.7608, -111.891]} icon={icon}>
          <Popup>
            <SearchForm/>
          </Popup>
        </Marker>

        <Marker position={[40.7608, -111.900]} icon={greenIcon}>
          <Popup>
            <SearchFormGreen/>
          </Popup>
        </Marker>

        <Marker position={[40.7608, -111.800]} icon={icon}>
          <Popup>
            <SearchForm/>
          </Popup>
        </Marker>

        <Marker position={[40.7608, -111.906]} icon={icon}>
          <Popup>
            <SearchForm/>
          </Popup>
        </Marker>

        <Marker position={[40.7608, -111.920]} icon={greenIcon}>
          <Popup>
            <SearchFormGreen/>
          </Popup>
        </Marker>

        <Marker position={[40.7608, -111.940]} icon={icon}>
          <Popup>
            <SearchForm/>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Home;
