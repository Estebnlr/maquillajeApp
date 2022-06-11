import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Compañía</h4>
  	 			<ul>
  	 				<li><a href="#">Sobre nosotros</a></li>
  	 				<li><a href="#">Nuestros servicios</a></li>
  	 				<li><a href="#">política de privacidad</a></li>
  	 				<li><a href="#">programa de afiliación</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>consigue ayuda</h4>
  	 			<ul>
  	 				<li><a href="#">Preguntas más frecuentes</a></li>
  	 				<li><a href="#">Envío</a></li>
  	 				<li><a href="#">Devoluciones</a></li>
  	 				<li><a href="#">Estado del pedido</a></li>
  	 				<li><a href="#">Opciones de pago</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Tienda online</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Síganos</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;