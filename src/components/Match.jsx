import React from 'react';
import SearchMatch from './SearchMatch';
import MatchCard from './MatchCard';
import futsal from '../asset/Image/futsal.jpg';
import golf from '../asset/Image/golf.jpg';
import sepakbola from '../asset/Image/football.jpg';
import badminton from '../asset/Image/badminton.jpg';
import basket from '../asset/Image/basket.jpg';
import volley from '../asset/Image/volley.jpg';
import pingpong from '../asset/Image/pingpong.jpg';
import tennis from '../asset/Image/tennis.jpg';
import date from '../asset/icon/Date_Icon.svg';
import location from '../asset/icon/Location_Icon.svg';
import Footer from './Footer';

const Match = () => {
    const data = [{
        nama: 'Sepakbola',
        status: 'Amatir',
        jumlah: 11,
        harga: '900.000',
        tanggal: '23 Maret 2022',
        lokasi: 'Bandung'
    },
    {
        nama: 'Futsal',
        status: 'Amatir',
        jumlah: 5,
        harga: '150.000',
        tanggal: '23 Januari 2022',
        lokasi: 'Jakarta'
    },
    {
        nama: 'Basketball',
        status: 'Amatir',
        jumlah: 5,
        harga: '45.000',
        tanggal: '23 Juni 2022',
        lokasi: 'Bekasi'
    },
    {
        nama: 'Volleyball',
        status: 'Profesional',
        jumlah: 6,
        harga: '45.000',
        tanggal: '23 Maret 2022',
        lokasi: 'Bandung'
    },
    {
        nama: 'Golf',
        status: 'Profesional',
        jumlah: 2,
        harga: '500.000',
        tanggal: '23 April 2022',
        lokasi: 'Depok'
    },
    {
        nama: 'Ping-Pong',
        status: 'Komunitas',
        jumlah: 2,
        harga: '50.000',
        tanggal: '23 Mei 2022',
        lokasi: 'Semarang'
    },
    {
        nama: 'Futsal',
        status: 'Komunitas',
        jumlah: 6,
        harga: '45.000',
        tanggal: '23 Maret 2022',
        lokasi: 'Bandung'
    },
    {
        nama: 'Basketball',
        status: 'Komunitas',
        jumlah: 6,
        harga: '45.000',
        tanggal: '23 Agustus 2022',
        lokasi: 'Medan'
    },
    {
        nama: 'Tennis',
        status: 'Komunitas',
        jumlah: 6,
        harga: '45.000',
        tanggal: '23 Agustus 2022',
        lokasi: 'Medan'
    },
    {
        nama: 'Badminton',
        status: 'Amatir',
        jumlah: 2,
        harga: '50.000',
        tanggal: '23 November 2022',
        lokasi: 'Jambi'
    }
]

    const setBackgroundCard = (nama) => {
        if(nama === 'Sepakbola') {
            return sepakbola
        } else if (nama === 'Futsal') {
            return futsal
        } else if (nama === 'Golf') {
            return golf
        } else if (nama === 'Volleyball') {
            return volley
        } else if (nama === 'Basketball') {
            return basket
        } else if (nama === 'Ping-Pong') {
            return pingpong
        } else if (nama === 'Tennis') {
            return tennis
        } else if (nama === 'Badminton') {
            return badminton
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submitted');
    }

    return (
        <div className="match">
            <SearchMatch handleSubmit={handleSubmit} className={'match__form'} selectClassName={'match__input-group'} />
            <div className="match__container">
                {data.map(item => {
                    return <MatchCard item={item} setBackgroundCard={setBackgroundCard} />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Match