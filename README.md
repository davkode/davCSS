**👋🏾 Hola, ..**

<div align="right">

# <img width="120" height="auto"  src="assets/img/logo/davCode.svg" alt="Logo_DavisQuintero" >

</div>

<div align="center">
  <p>
    <b>💾 davCSS</b> es un mini framework para maquetación basados en la filosofia Resposive, Adaptative y Fluid Desing de sitios web fasíl y rapido.
  </p>
  <p>
    <b>🚀Arquitectura Frotend</b> (HTML, CSS y JavaScript).
  </p>
  <p>
    <b>👨🏾‍💻 Codigo con ❤️ nativo puro</b>...
  </p>
</div>

<br>

<p align="center">Diseño Minimalista.</p>

---

\
En este Repositorio encontraras:

1.  Estrustura de archivos (📃) y carpetas (🗂️) listas para el diseño de un sitio web.

2.  Archivo (📃) _**index.html**_ con una estructura inicial de etiquetas.

3.  Ingrado el proyecto _[Material Design Iconic Font
    ](http://zavoloklom.github.io/material-design-iconic-font/icons.html#person)_, por su estilo sencillo y minimalista 😜.

4.  Ingrado la fuente (🖋️) _**zurchlc**_, por su estilo sencillo y minimalista 😜.

5.  Hojas de estilos _**(dav-style.css)**_ que contiene toda la magia de la maquetacion:

    - La fuente (🖋️) _**zurchlc**_.

      ```css
      /* * _FONT_ */
      @font-face {
        font-family: "zurchlc";
        src: url("../../fonts/zurchlc/zurchlc.eot");
        src: url("../../fonts/zurchlc/zurchlc.eot#?iefix") format("embedded-opentype"),
          url("../../fonts/zurchlc/zurchlc.ttf") format("truetype"),
          url("../../fonts/zurchlc/zurchlc.svg") format("svg"), url("../../fonts/zurchlc/zurchlc.woff")
            format("woff");
      }
      ```

    - Paleta de colores _(azul, rojo, verde, negro, gris y gradianes)_.

      ```css
      /* ! _Colores - Site_ */
      --cl-white: #edf2f7;
      --cl-black: #373435;
      --cl-black-dark: #1b2831;
      --cl-grey: #adb9c5;
      --cl-grey-dark: #584b4f;
      --cl-blue: #2962ff;
      --cl-red: #f50f06;
      --cl-green: #a8cf45;
      --cl-blue-rgba: #4481eba9;
      --cl-rgba: rgba(0, 0, 0, 0.5);
      --shadow: 0 0 0.5rem var(--cl-grey-dark);
      --bg-radial: radial-gradient(circle at 90% 10%, #4481eb 30%, #0c66a6 70%);
      --bg-gradient: radial-gradient(
        circle at 100% 50%,
        transparent 40%,
        #0c66a6 50%
      );
      ```

    - Por medio de clases se resetean las etiquetas de los archivos HTML ; llevando a sus atributos como _border, margin, padding, height, width, font-size y font-family, box-sizing, word-wrap, background y color_; tengan un estado inical en común.

    - Para los tamaños de las cajas _contenedodras(padre e hijo)_, _imagenes_ y _fuentes_; se utiliza _**Fluid Design**_, basados en la filosofia de _[UTOPIA Fluid Responsive Design
      ](https://utopia.fyi/type/calculator/)_.

      ```css
      /* ! _@link https://utopia.fyi/type/calculator?c=320,17,1.125,1920,20,1.333,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l_ */
      --step--2: clamp(0.7rem, calc(0.87rem + -0.14vw), 0.84rem);
      --step--1: clamp(0.94rem, calc(0.95rem + -0.01vw), 0.94rem);
      --step-0: clamp(1.06rem, calc(1.03rem + 0.19vw), 1.25rem);
      --step-1: clamp(1.2rem, calc(1.1rem + 0.47vw), 1.67rem);
      --step-2: clamp(1.35rem, calc(1.17rem + 0.88vw), 2.22rem);
      --step-3: clamp(1.51rem, calc(1.22rem + 1.45vw), 2.96rem);
      --step-4: clamp(1.7rem, calc(1.25rem + 2.25vw), 3.95rem);
      --step-5: clamp(1.91rem, calc(1.25rem + 3.35vw), 5.26rem);
      --step-6: clamp(2.15rem, calc(1.18rem + 4.86vw), 7.01rem);
      ```

    - Conjunto de clases que integran los todos los atributos de _FlexboxCSS_ para un _Adaptative Design_.

    - Conjunto de clases que integran los todos los atributos de _GridCSS_ que forman una _reticula_ de _12 Columnas_ y _12 Filas_ para un _Fluid Design_.

<br>

---

Visita mis redes sociales:

- <a href="https://www.linkedin.com/in/davisquintero/" target="_blank"> _**Linkedin**_ </a>
- <a href="https://github.com/davkintero" target="_blank"> _**GitHub**_ </a>
- <a href="https://www.instagram.com/davkintero1/" target="_blank"> _**Instagran**_ </a>
