import React, { useState } from 'react';
import Form from './UI/Form';

const ForgotPass = () => {
    return (
        <Form className='forgotPass'>
            <div className="forgotPass__form">
                <h1 className="forgotPass__form-title">Forgot Password</h1>
                <p className='forgotPass__form-paraph'>Masukkan alamat email yang Anda gunakan saat bergabung dan kami akan mengirimkan instruksi untuk menyetel ulang sandi Anda.</p>
                <form action="" className="">
                    <div className='input-group'>
                        <input type="email" name='email' id='email' required autoComplete='off' autoFocus='on' placeholder='Masukkan email anda' />
                        <label htmlFor="email">Email</label> 
                    </div>
                    <button type='submit'>Send Reset</button>
                </form>
            </div>
        </Form>
    )
}

export default ForgotPass