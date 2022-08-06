import React, { useState } from 'react';
import Review from './Review';
import section1 from '../asset/Image/Section_Image_1.jpg';
import section2 from '../asset/Image/Section_Image_2.jpg';
import section3 from '../asset/Image/Section_Image_3.jpg';
import rarr from '../asset/icon/bx-chevron-right.svg';
import Footer from './Footer';


const Content = () => {
    return (
        <main className="content">
            <section className="content__section content__section--top">
                <div className="content__desc">
                    <h1 className="title">Temukan lawan di sekitarmu dengan mudah</h1>
                    <p className="paraph">Disini kamu dapat dengan mudah mencari rekan atau lawan di sekitar tempat kamu atau kota kamu untuk melakukan olahraga favorit bersamamu dan menciptakan pertemanan dengan orang baru</p>
                    <a href="#" className="link">Cari Lawan Sekarang <img src={rarr} alt="" /></a>
                </div>
                <img src={section1} alt="person with sport rope" />
            </section>
            <section className="content__section content__section--middle">
                <img src={section2} alt="person playing tennis court" />
                <div className="content__desc">
                    <h1 className="title">Cari lawan bertanding dengan tiga langkah</h1>
                    <p className="paraph">Kini kamu tidak perlu hawatir dan bingung mencari lawan untuk bertanding, disini kamu bisa memilih lawan untuk bertanding dengan mudah</p>
                    <table className="step">
                        <tr>
                            <td>1</td>
                            <td>Pilih lawan untuk bertanding</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Buat kesepakatan pertandingan</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bertanding dengan lawan pilihanmu</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="content__section content__section--bottom">
                <div className="content__desc">
                    <h1 className="title">Berbagai pilihan cabang olahraga untuk kamu</h1>
                    <p className="paraph">Kamu tidak perlu khawatir untuk mencari cabang olahraga yang kamu minati, disini kami menyediakan berbagai cabang olahraga untuk kamu dan pertandinganmu</p>
                    <a href="#" className="link">Cari Olahraga Favoritmu <img src={rarr} alt="" /></a>
                </div>
                <img src={section3} alt="tennis racket" />
            </section>
            <Review />
            <Footer />
        </main>
    )
}

export default Content