import React from 'react';
import user from '../asset/icon/User_Icon.svg';
import award from '../asset/icon/Award_Icon.svg';

const MatchCard = ({item, setBackgroundCard}) => {
    const {nama, status, jumlah, harga, tanggal, lokasi} = item

    return (
        <div className="match__card">
            <img src={setBackgroundCard(nama)} alt={nama} className='match__img' loading='lazy' />
            <div className="match__detail">
                <h1 className='match__title'>{nama}</h1>
                <div className="match__detail-box">
                    <p><img src={award} />{status}</p>
                    <p><img src={user} />{jumlah} Orang</p>
                </div>
                <p className='match__date'>{tanggal}</p>
                <p className='match__location'>{lokasi}</p>
                <p className='match__price'>Rp{harga}</p>
            </div>
            <button type='button'>Lihat detail</button>
        </div>
    )
}

export default MatchCard