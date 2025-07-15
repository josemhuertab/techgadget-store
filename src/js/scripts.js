// Suscripción con alerta de éxito y autocierre
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('subscriptionForm');
  const emailInput = document.getElementById('subscriptionEmail');
  const alertContainer = document.getElementById('alertContainer');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          ¡Gracias por suscribirte, te mantendremos informado con nuestras mejores ofertas!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>`;

      form.reset();

      setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(document.querySelector('.alert'));
        alert.close();
      }, 3000);
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Productos de ejemplo
  const productos = [
    { img: 'src/img/productos/producto-1.jpg', nombre: 'Auriculares Bluetooth', desc: 'Alta calidad de sonido.' },
    { img: 'src/img/productos/producto-2.jpg', nombre: 'Smartwatch', desc: 'Controla tu día a día.' },
    { img: 'src/img/productos/producto-3.jpg', nombre: 'Cámara de Seguridad', desc: 'Vigila tu hogar.' },
    { img: 'src/img/productos/producto-4.jpg', nombre: 'Teclado Mecánico', desc: 'Ideal para trabajo y gaming.' },
    { img: 'src/img/productos/producto-5.jpg', nombre: 'Cargador Inalámbrico', desc: 'Carga rápida y cómoda.' },
    { img: 'src/img/productos/producto-6.jpg', nombre: 'Drone Compacto', desc: 'Fotografía aérea fácil.' },
    { img: 'src/img/productos/producto-7.jpg', nombre: 'Altavoz Inteligente', desc: 'Asistente virtual en casa.' },
    { img: 'src/img/productos/producto-8.jpg', nombre: 'Monitor LED', desc: 'Imágenes nítidas y claras.' },
    { img: 'src/img/productos/producto-9.jpg', nombre: 'Mouse Inalámbrico', desc: 'Preciso y cómodo.' },
    { img: 'src/img/productos/producto-10.jpg', nombre: 'Tablet 10"', desc: 'Ideal para estudio y ocio.' },
    { img: 'src/img/productos/producto-11.jpg', nombre: 'Auriculares Gaming', desc: 'Sumérgete en tus juegos.' },
    { img: 'src/img/productos/producto-12.jpg', nombre: 'Cámara Web HD', desc: 'Videollamadas de calidad.' }
  ];

  const grid = document.getElementById('productosGrid');
  const pagina1 = document.getElementById('pagina1');
  const pagina2 = document.getElementById('pagina2');

  function mostrarPagina(num) {
    grid.innerHTML = '';
    const inicio = (num - 1) * 6;
    const fin = inicio + 6;
    productos.slice(inicio, fin).forEach(p => {
      grid.innerHTML += `
        <div class="productos__card">
          <img src="${p.img}" alt="${p.nombre}">
          <h5>${p.nombre}</h5>
          <p>${p.desc}</p>
          <button class="btn btn-primary">Agregar al carrito</button>
        </div>`;
    });
  }

  // Inicializa en página 1
  mostrarPagina(1);

  pagina1.addEventListener('click', () => mostrarPagina(1));
  pagina2.addEventListener('click', () => mostrarPagina(2));
});
