document.addEventListener('DOMContentLoaded', function () {
  // === SUSCRIPCIÓN CON ALERTA ===
  const subscriptionForm = document.getElementById('subscriptionForm');
  const alertContainer = document.getElementById('alertContainer');

  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', function (e) {
      e.preventDefault();

      alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
          ¡Gracias por suscribirte! Te mantendremos informado.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>`;

      subscriptionForm.reset();

      setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(document.querySelector('.alert'));
        alert.close();
      }, 3000);
    });
  }

  // === CONTACTO CON ALERTA ===
  const contactForm = document.getElementById('contactForm');
  const contactAlertContainer = document.getElementById('contactAlertContainer');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      contactAlertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
          ¡Gracias por tu mensaje! Te responderemos pronto.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>`;

      contactForm.reset();

      setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(document.querySelector('.alert'));
        alert.close();
      }, 3000);
    });
  }
// ANIMACIÓN FADE RÁPIDA EN EL BODY
  document.body.classList.add('fade-in');

  // === ANIMACIÓN FADE EN MAIN ===
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('fade-in');
  }

  // === CARGA Y PAGINACIÓN DE PRODUCTOS ===
  const productosGrid = document.getElementById('productosGrid');
  const pagina1Btn = document.getElementById('pagina1');
  const pagina2Btn = document.getElementById('pagina2');

  if (productosGrid) {
    let productosData = [];

    function cargarProductos(pagina) {
      productosGrid.innerHTML = '';
      const inicio = (pagina === 1) ? 0 : 9;
      const fin = (pagina === 1) ? 9 : 12;
      const productosMostrar = productosData.slice(inicio, fin);

      productosMostrar.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        card.innerHTML = `
          <div class="card h-100">
            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.desc}</p>
              <a href="#" class="btn btn-primary mt-auto">Comprar</a>
            </div>
          </div>
        `;

        productosGrid.appendChild(card);
      });
    }

    fetch('src/data/productos.json')
      .then(response => response.json())
      .then(data => {
        productosData = data;
        cargarProductos(1); // Mostrar los primeros 9 productos al cargar
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        productosGrid.innerHTML = `<p class="text-danger">No se pudieron cargar los productos. Inténtalo nuevamente más tarde.</p>`;
      });

    if (pagina1Btn && pagina2Btn) {
      pagina1Btn.addEventListener('click', () => {
        cargarProductos(1);
        pagina1Btn.classList.add('active');
        pagina2Btn.classList.remove('active');
      });

      pagina2Btn.addEventListener('click', () => {
        cargarProductos(2);
        pagina2Btn.classList.add('active');
        pagina1Btn.classList.remove('active');
      });
    }
  }
});
