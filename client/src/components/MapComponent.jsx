import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    FeatureGroup,
    useMap
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import 'leaflet-draw';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function DrawControl({ featureGroupRef }) {
    const map = useMap();

    useEffect(() => {
        const drawnItems = featureGroupRef.current;

        const drawControl = new L.Control.Draw({
            position: 'topright',
            draw: {
                polygon: true,
                rectangle: true,
                circle: true,
                polyline: false,
                marker: false
            },
            edit: {
                featureGroup: drawnItems
            }
        });

        map.addControl(drawControl);

        map.on(L.Draw.Event.CREATED, function (event) {
            const layer = event.layer;
            drawnItems.addLayer(layer);
        });

        return () => {
            map.removeControl(drawControl);
        };
    }, [map, featureGroupRef]);

    return null;
}

export default function MapComponent() {
    const [markers, setMarkers] = useState([]);
    const featureGroupRef = useRef(new L.FeatureGroup());

    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(res => res.json())
            .then(data => {
                const validMarkers = data.filter(item =>
                    item.Latitude && item.Longitude
                );
                setMarkers(validMarkers);
            });
    }, []);

    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Map View</h2>

            <MapContainer
                center={[31.9686, -99.9018]}
                zoom={6}
                scrollWheelZoom={true}
                className="w-full h-[500px] rounded shadow z-10"
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FeatureGroup ref={featureGroupRef} />
                <DrawControl featureGroupRef={featureGroupRef} />

                {markers.map((item, i) => {
                    const lat = parseFloat(item.Latitude);
                    const lng = parseFloat(item.Longitude);

                    // Skip invalid data
                    if (isNaN(lat) || isNaN(lng)) return null;

                    return (
                        <Marker
                            key={i}
                            position={[lat, lng]}
                        >
                            <Popup>
                                <strong>{item.Brand || 'N/A'}</strong><br />
                                {item.City}, {item.State}<br />
                                Price: ${Number(item.Price).toLocaleString()}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
