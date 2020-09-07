import React from 'react';
import profile_picture from '../../Images/profile.jpg';
import './Styles/Resumen.css';
import { Link } from 'react-router-dom';

export default function Resumen() {
  return (
    <section id="resumen" name="resumen" className="hero is-info ">
      <div className="hero-body">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-narrow">
            <figure className="image">
              <img className="profile_picture" src={profile_picture} alt="pp" />
            </figure>
          </div>
          <div className="column is-8-desktop is-12-mobile text-md-left ">
            <p className="subtitle is-5">Hola, mi nombre es</p>
            <p className="title is-mobile-2">Alberto López</p>
            <div className="bio mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod facilisis turpis, at convallis ligula rhoncus eget. Aenean mollis, orci vel condimentum ullamcorper, neque nisl lacinia ipsum, et ultricies elit mauris id turpis. Duis varius dui sed laoreet congue. Vivamus imperdiet elit vitae eros iaculis, in aliquet ligula finibus. Nam porttitor aliquet ante, vitae bibendum nunc lobortis vel. Phasellus hendrerit interdum tortor, iaculis laoreet orci vehicula a.
            </div>
            <Link class="button is-primary">Contrátame</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
