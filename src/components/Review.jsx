import React, { useState } from 'react';
import { testimoni } from './data';

const Review = () => {
    return (
        <section className="review">
            <h1 className="review__title">Komentar lainnya</h1>
            <div className="review__box">
                {testimoni.map((item, i) => {
                    const {nama, profil, profesi, pesan} = item
                    return (
                        <div className="review__profile" key={i}>
                            <div className="review__header">
                                <img src={profil} alt="profil user" />
                                <div className="review__desc">
                                    <h1>{nama}</h1>
                                    <h2>{profesi}</h2>
                                </div>
                            </div>
                            <p className="review__testimoni">{pesan}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Review