'use client';

import React from 'react';
import styles from './demo-booking-form.module.scss';
import { useState, useEffect } from 'react';

const DemoBookingForm = ({data}) => {

    if (data.book.active !== true) {
        return ('');
    }

    const [formData, setFormData] = useState({
        email: ""
    });
    const [formSuccess, setFormSuccess] = useState(false)
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })
        data.append('action', 'add_new_book');
        // POST the data to the URL of the form
        fetch('https://app.haiqu.ai/wp-admin/admin-ajax.php', {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then((response) => response.json())
            .then((data) => {
                setFormData({
                    email: ""
                })

                setFormSuccess(true)
            })
    }


    return (
    <section className={styles.container} id="form-section">
        <video
            width="100%"
            height="100%"
            loop
            muted
            autoPlay
            webkit-playsinline="true"
            playsInline
        >
            <source
                src="/videos/footer-video.mp4"
                type="video/mp4"
            />
        </video>
        <p className={styles.container__title}>{data.book.title}</p>
        {formSuccess ?
            <p className={styles.container__title}>Thank You! We will contact you shortly</p>
            :
            <p></p>
        }
            <form className={styles.container__form} method="POST" onSubmit={submitForm}>
                <input name="email" placeholder="EMAIL*" onChange={handleInput} value={formData.email} />
                <button type="submit" className={styles.container__button}>submit</button>
            </form>

        <p className={styles.container__info} dangerouslySetInnerHTML={{ __html: data.book.text }}>

        </p>
    </section>
    );
};

export default DemoBookingForm;
