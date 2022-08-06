import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MapPicker from 'react-google-map-picker';

const DefaultLocation = { lat: -6.2146, lng: 106.8451 }
const DefaultZoom = 16

const Map = ({popUp, handleLocation, handlePopIn}) => {
    const [location, setLocation] = useState(DefaultLocation)
    const [zoom, setZoom] = useState(DefaultZoom)
    const [valueSearch, setValueSearch] = useState('')
    const [resultLocation, setResultLocation] = useState('')
    const [city, setCity] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleChangeLocation = (lat, lng) => {
        setLocation({lat, lng});
    }
    
    const handleChangeZoom =  newZoom => {
        setZoom(newZoom);
    }

    const handleChangeSearch = (e) => {
        setValueSearch(e.target.value)
    }

    const saveLocation = () => {
        handleLocation(city, resultLocation)
        handlePopIn(false)
        setValueSearch('')
        setResultLocation('')
        setLocation(DefaultLocation)
    }

    const cancelLocation = () => {
        handlePopIn(false)
        // handleLocation('', '')
        setValueSearch('')
        setResultLocation('')
        setLocation(DefaultLocation)
    }

    const convertAddress = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await fetch(`https://us1.locationiq.com/v1/search.php?key=005b5f421ee408&q=${valueSearch}&limit=1&addressdetails=1&accept-language=id&countrycodes=id&format=json`)
            .then(res => {
                return res.json()
            })
            .then(response => {
                const {lat, lon: lng, display_name} = response[0]
                const {city} = response[0].address
                handleChangeLocation(+lat, +lng)
                setResultLocation(display_name)
                setCity(city)
            })
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }

    return (
        <div className={`map ${popUp && 'mapPopUp'}`}>
            <div className="map__box">
                <MapPicker 
                    defaultLocation={location}
                    zoom={zoom}
                    mapTypeId="roadmap"
                    style={{width: '500px', height:'100%'}}
                    onChangeLocation={handleChangeLocation} 
                    onChangeZoom={handleChangeZoom}
                    apiKey={'AIzaSyB7jKxFNxidOzKuYVVH_APaCyVw2rcfoiw'}
                />
            </div>
            <div className="map__search-box">
                <form action="" onSubmit={convertAddress}>
                    <div className="map__input-group">
                        <label htmlFor="mapSearch">Lokasi Pertandingan</label>
                        <input type="text" name='search' value={valueSearch} id='mapSearch' placeholder='Cari Lokasi Pertandingan' onChange={handleChangeSearch} required autoComplete='off'/>
                        <button type='button'>Cari</button>
                    </div>
                </form>
                <div className="map__search-result">
                    {isLoading ? <SkeletonTheme color="#858585" highlightColor="#fdfeff"><Skeleton width={'100%'} height={60} /></SkeletonTheme> :
                    <h2 className={`${!resultLocation && 'hideResultLocation'}`}>{resultLocation}</h2>}
                    {resultLocation && <div className="map__btn">
                        <button className="map__btn-submit" type='button' name='save' onClick={saveLocation}>Simpan</button>
                        <button className="map__btn-cancel" name='cancel' onClick={cancelLocation}>Cancel</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Map