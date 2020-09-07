import React, { Component } from 'react';
import Contratame from '../components/Index/Contratame';
import Contacto from '../components/Index/Contacto';
import Habilidades from '../components/Index/Habilidades';
import Proyectos from '../components/Index/Proyectos';
import Publicaciones from '../components/Index/Publicaciones';
import Resumen from '../components/Index/Resumen';
export default class Index extends Component {
  render() {
    return (
      <>
        <Resumen />
        <Habilidades />
        <Proyectos />
        <Publicaciones />
        <Contacto />
        <Contratame />
      </>
    );
  }
}
