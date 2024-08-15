import React, { Component } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

export class Contacts extends Component {
  render() {
    return (


      <section className='contacts'>
        <article className='contacts-title'>
            <p>Contacts</p>
        </article>
        <article className='contacts-body'>
            <div className='contacts-body-fieds'>
                <div className='contacts-body-fieds__name'>
                    <p>Name</p>
                    <input type='text' pattern ='name' required></input>
                </div>
                <div className='contacts-body-fieds__email'>
                    <p>Email</p>
                    <input type='email' pattern=".+@example\.com" required></input>
                </div>
                <div className='contacts-body-fieds__pnone'>
                    <p>Phone</p>
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                </div>
                <div className='contacts-body-fieds__message'>
                    <p>Message</p>
                    <input type='text'></input>
                </div>
                <div className='contacts-body-fieds__file'>
                    <p>Attach file</p>
                    <input type="file" name="avatar" accept="image/png, image/jpeg"></input>
                </div>
            </div>

            <div className='contacts-body-textContact'>
                <div className='contacts-body-textContact__title'>
                    <p>Let’s make something that matters.</p>
                </div>
                <div className='contacts-body-textContact__street'>
                    <p>Rivne, A. Melnyk str.1, 33016</p>
                </div>
                <div className='contacts-body-textContact__phone'>
                    <a href="tel:+79998887766">+7 999 888 77 66</a>
                    <a href="tel:+79998887765">+7 999 888 77 65</a>
                </div> 
                <ul className='contacts-body-textContact__icons'>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="nofollow" className='Fac'></a>
                        <FaFacebookF />
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="nofollow" className='Fac1'></a>
                        <FaInstagram/>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="nofollow" className='Fac2'></a>
                        <FaTwitter/>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="nofollow" className='Fac3'></a>
                        <SlSocialVkontakte/>
                    </li>
                </ul>
            </div>
        </article>
        <button className='contacts-button'>Send Message</button>
      </section>
    )
  }
}

export default Contacts