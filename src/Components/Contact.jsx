import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


export default function Contact() {
    return (
        <div id='Contact'>
<div class="contact-form"   >
       <h1>Contact Me</h1>
       <div class="container">
       <div class="main">
       <div class="content">
       <h2>Contact Us</h2>
       <form action="#" method="post">
       <input type="text" name="name" placeholder="Enter Your Name"></input>
       <input type="email" name="name" placeholder="Enter Your Email"></input>
       <textarea name="message" placeholder="Your Message"></textarea>                   
       <button type="submit" class="btn">Send <i class="fas fa-paper-plane"></i></button>
       </form>
       </div>
       <div class="form-img">
                  <img src="../public/project-1.png" alt="" />
                </div>
       </div>
       </div>
      </div>
      </div>
    )
}
