import { v4 as uuidv4 } from 'uuid';
import profil1 from '../asset/Image/testimoni/profil1.png'
import profil2 from '../asset/Image/testimoni/profil2.png'
import profil3 from '../asset/Image/testimoni/profil3.png'

const opsiOlahraga = [
    { value: 'semua', label: 'Semua', idInput: uuidv4()},
    { value: 'badminton', label: 'Badminton', idInput: uuidv4()},
    { value: 'ping-pong', label: 'Ping-Pong' , idInput: uuidv4()},
    { value: 'basketball', label: 'Basketball', idInput: uuidv4()},
    { value: 'sepakbola', label: 'Sepakbola' , idInput: uuidv4()},
    { value: 'volley', label: 'Volley', idInput: uuidv4()},
    { value: 'tennis', label: 'Tennis' , idInput: uuidv4()},
    { value: 'futsal', label: 'Futsal' , idInput: uuidv4()},
    { value: 'golf', label: 'Golf' , idInput: uuidv4()},
];

const opsiStatus = [
    { value: 'semua', label: 'Semua', idInput: uuidv4()},
    { value: 'profesional', label: 'Profesional' , idInput: uuidv4()},
    { value: 'amatir', label: 'Amatir' , idInput: uuidv4()},
];

const testimoni = [
    { nama: 'Ahmad Nasution', profil: profil1, profesi: 'Wiraswasta', pesan: '"Platform ini sangat memudahkan saya untuk mencari tempat dan menemukan lawan tanding yang sesuai."'},
    { nama: 'Budi Raharjo', profil: profil2, profesi: 'Mahasiswa', pesan: '"Platform ini sangat memudahkan saya untuk mencari tempat dan menemukan lawan tanding yang sesuai."'},
    { nama: 'Ilham Laksono', profil: profil3, profesi: 'Pegawai Swasta', pesan: '"Platform ini sangat memudahkan saya untuk mencari tempat dan menemukan lawan tanding yang sesuai."'}
]

export {opsiOlahraga, opsiStatus, testimoni}