// ============================================================
// 02-logica_negocio.js — 20 Katas del Mundo Real
// Implementa cada clase para que los tests pasen.
// Ejecuta: npm test
// ============================================================

// ─────────────────────────────────────────────
// GESTIÓN DE USUARIOS (Katas 21-25)
// ─────────────────────────────────────────────

// Kata 21: Usuario
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email; 
    this.activo = true;
  }
}

// Kata 22: Admin
class Admin extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
    this.rol = "admin";
  }

  banearUsuario(usuario) {
    usuario.activo = false;
  }
}

// Kata 23: Suscripcion
class Suscripcion {
  #plan;
  #vencimiento;

  constructor(plan, vencimiento) {
    this.#plan = plan;
    this.#vencimiento = new Date(vencimiento);
  }

  renovar(diasExtra) {
    this.#vencimiento.setDate(this.#vencimiento.getDate() + diasExtra);
  }

  get plan() {
    return this.#plan;
  }

  get vencimiento() {
    return this.#vencimiento;
  }
}

// Kata 24: Perfil
class Perfil {
  constructor(datos) {
    this.edad = datos.edad;
    this.ciudad = datos.ciudad;
    this.nombre = datos.nombre;
  }

  actualizarDatos(nuevosDatos) {
    this.edad = nuevosDatos.edad;
    this.ciudad = nuevosDatos.ciudad;
    this.nombre = nuevosDatos.nombre;
  }
}

// Kata 25: Auth
class Auth {
  #usuarios;

  constructor() {
    this.#usuarios = [];
    this.nombre = "";
    this.email = "";
    this.password = "";
  }

  registrar(nombre, email, password) {
    const nuevoUsuario = { nombre, email, password };
    this.#usuarios.push(nuevoUsuario);
    console.log(`Usuario ${nombre} registrado exitosamente.`);
  }

  login(email, password) {
    const usuario = this.#usuarios.find(usu => usu.email === email && usu.password === password);
    if (usuario) {
      this.nombre = usuario.nombre;
      this.email = usuario.email;
      console.log(`Bienvenido, ${usuario.nombre}!`);
      return { nombre: usuario.nombre, email: usuario.email };
    } else {
      console.log("Sin autorización.");
      return null;
    }
  }
}

// ─────────────────────────────────────────────
// EL VIDEOJUEGO RPG (Katas 26-30)
// ─────────────────────────────────────────────

// Kata 26 y 28: Personaje
class Personaje {
  constructor(nombre, hp, ataque) {
    this.nombre = nombre;
    this.hp = hp;
    this.ataque = ataque;
  }

  atacar(objetivo) {
    objetivo.hp -= this.ataque;
    if (objetivo.hp < 0) {
      objetivo.hp = 0;
    }
  }
}

// Kata 27: Enemigo
class Enemigo {
  #loot;

  constructor(nombre, hp, ataque, loot) {
    this.nombre = nombre;
    this.hp = hp;
    this.ataque = ataque;
    this.#loot = loot;
  }

  atacar(objetivo) {
    objetivo.hp -= this.ataque;
    if (objetivo.hp < 0) {
      objetivo.hp = 0;
    }
  }

  morir() {
    if (this.hp <= 0) {
      return this.#loot;
    } else {
      return null;
    }
  }
}

// Kata 29: Inventario
class Inventario {
  constructor() {
    this.items = [];
  }

  agarrarItem(item) {
    this.items.push(item);
  }

  usarItem(nombre, personaje) {
    const index = this.items.findIndex(item => item.nombre === nombre);
    if (index > -1) {
      this.items.splice(index, 1); // Eliminar item del inventario
    } else {
      console.log("Item no encontrado en el inventario.");
    }
  }
}

// Kata 30: Pocion
class Pocion {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  usar(personaje) {
    personaje.hp += this.cantidad;
  }
}

// ─────────────────────────────────────────────
// EL E-COMMERCE (Katas 31-35)
// ─────────────────────────────────────────────

// Kata 31 y 32: Producto
class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  vender(cantidad) {
    if (cantidad <= this.stock) {
      this.stock -= cantidad;
    } else {
      console.log("Stock insuficiente para la venta de" + cantidad + " unidades de " + this.nombre);
    }
  }
}

// Katas 33-35: Carrito
class Carrito {
  #productos;
  #descuento;

  constructor() {
    this.#productos = [];
    this.#descuento = 0;
  }

  agregar(producto, cantidad = 1) {
    this.#productos.push({ producto, cantidad });
  }

  calcularTotal() {
    const subtotal = this.#productos.reduce((total, item) => {
      return total + item.producto.precio * item.cantidad;
    }, 0);

    const montoDescuento = (subtotal * this.#descuento) / 100;
    return subtotal - montoDescuento;
  }

  aplicarCupon(codigo) {
    if (codigo === "COD10") {
      this.#descuento = 10;
    } else if (codigo === "COD15") {
      this.#descuento = 15;
    } else if (codigo === "COD20") {
      this.#descuento = 20; 
    } else {console.log("Código de cupón inválido.");
    }
  }
  get productos() {
    return this.#productos;
  }
}

// ─────────────────────────────────────────────
// EL RESTAURANTE (Katas 36-40)
// ─────────────────────────────────────────────

// Kata 36: Mesa
class Mesa {
  constructor(numero, capacidad) {
    this.numero = numero;
    this.capacidad = capacidad;
    this.ocupada = false;
  }
}

// Katas 37 y 38: Pedido
class Pedido {
  #platos;

  constructor(mesa) {
    this.mesa = mesa;
    this.#platos = [];
  }

  agregarPlato(nombre, precio) {
    this.#platos.push({ nombre, precio });
  }

  cerrarMesa() {
    this.mesa.ocupada = false;
    const subtotal = this.#platos.reduce((total, plato) => {
      return total + plato.precio;
    }, 0);
  }

  get platos() {
    return this.#platos;
  }
}

// Katas 39 y 40: Restaurante
class Restaurante {
  constructor() {
    this.mesas = [];
    this.pedidos = [];
    this.recaudacion = 0;
  }

  agregarMesa(mesa) {
    this.mesas.push(mesa);
  }

  buscarMesaLibre(comensales) {
    return this.mesas.find(mesa => !mesa.ocupada && mesa.capacidad >= comensales) || null;
  }

  cerrarCuenta(total) {
    this.recaudacion += total;
  }

  recaudacionDelDia() {
    return this.recaudacion;
  }
}

module.exports = {
  Usuario,
  Admin,
  Suscripcion,
  Perfil,
  Auth,
  Personaje,
  Enemigo,
  Inventario,
  Pocion,
  Producto,
  Carrito,
  Mesa,
  Pedido,
  Restaurante,
};
