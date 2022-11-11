'use client'

import React from 'react';
import { Dialog } from './../../components/Dialog';

export function SupportForm() {
    return (
        <Dialog title="Kontakt z Administracją" button={<button>Open dialog</button>} >
            <div className='flex'>
                <fieldset>
                    <label htmlFor="imie">Imie</label><br />
                    <input type="text" name="imie" placeholder='Imię' className='rounded py-1 px-1'/>
                </fieldset>
                <fieldset className='ml-3'>
                    <label htmlFor="nazwisko">Nazwisko</label><br />
                    <input type="text" name="nazwisko" placeholder='Nazwisko' className='rounded py-1 px-1'/>
                </fieldset>
            </div>
            <fieldset className='mt-2'>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" placeholder='Email' className='rounded py-1 px-1'/>
            </fieldset>
            <fieldset className='mt-2'>
                <label htmlFor="text">Treść zgłoszenia</label><br />
                <textarea name="text" cols={30} rows={10} placeholder="Treść zgłoszenia" className='mt-2 rounded py-1 px-1'></textarea><br />
            </fieldset>
            <button type="submit" className='mt-2 bg-green-500 rounded-2xl px-3 py-1'>
                Wyślij
            </button>
        </Dialog>
    )
}