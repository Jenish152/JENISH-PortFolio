import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/jenish-shiroya-505a76213'><FaLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/Jenish152'><FaGithub /></a>
    </div>
    <div>
      <a href='https://twitter.com/JenishShiroya1'><BsTwitter /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/jenish_shiroya1507/'><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;