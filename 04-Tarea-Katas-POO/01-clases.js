// ============================================================
// 01-clases.js — 20 Katas de Estructuras y Lógica Pura
// Implementa cada clase para que los tests pasen.
// Ejecuta: npm test
// ============================================================

// ─────────────────────────────────────────────
// FUNDAMENTOS DE CLASE (Katas 1-5)
// ─────────────────────────────────────────────

// Kata 1: Contador
class Contador {
  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor ++;
  }

  decrementar() {
    this.valor--;
  }

  reset() {
    this.valor = 0;
  }
}

// Kata 2: Calculadora
class Calculadora {
  sumar(a, b) {
    return a +b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    return a / b;
  }
}

// Kata 3: Validador
class Validador {
  esEmail(valor) {
    return valor.contains("@") && valor.contains(".");
  }

  esPasswordFuerte(valor) {
    return valor.length >= 8 && 
         /[A-Z]/.test(valor) && 
         /[a-z]/.test(valor) && 
         /[0-9]/.test(valor) && 
         /[!@#$%^&*(),.?":{}|<>]/.test(valor);
  }
}

// Kata 4: Conversor
class Conversor {
  celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  kmAMillas(km) {
    return km * 0.621371;
  }
}

// Kata 5: Generador
class Generador {
  numeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }
}

// ─────────────────────────────────────────────
// ENCAPSULAMIENTO Y PRIVACIDAD (Katas 6-10)
// ─────────────────────────────────────────────

// Kata 6 y 7: CuentaBancaria
class CuentaBancaria {
  #saldo;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
  }

  retirar(cantidad) {
    this.saldo -= cantidad;
  }

  get saldo() {
    return this.#saldo;
  }
}

// Kata 8: Termostato
class Termostato {
  #temperatura;

  constructor(temperaturaInicial = 20) {
    this.#temperatura = temperaturaInicial;
  }

  get temperatura() {
    return this.#temperatura;
  }

  set temperatura(valor) {
    this.#temperatura = valor;
  }
}

// Kata 9: Reloj
class Reloj {
  #hora;
  #minuto;

  constructor(hora = 0, minuto = 0) {
      this.#hora = hora;
      this.#minuto = minuto;
  }

  avanzarMinuto() {
    this.#minuto++;
    if (this.#minuto >= 60) {
      this.#minuto = 0;
      this.#hora++;
      if (this.#hora >= 24) {
        this.#hora = 0;
      }
    }
  }

  get hora() {
    return this.#hora;
  }

  get minuto() {
    return this.#minuto;
  }
}

// Kata 10: CajaFuerte
class CajaFuerte {
  #password;
  #secreto;

  constructor(password, secreto) {
    this.#password = password;
    this.#secreto = secreto;
  }

  abrir(intento) {
    if (intento === this.#password) {
      return this.#secreto;
    } else {
      return "Acceso denegado";
    }
  }
}

// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: PILA / STACK - LIFO (Katas 11-15)
// ─────────────────────────────────────────────

// Katas 11-15: Pila
class Pila {
  #items;

  constructor() {
    this.#items = [];
  }

  apilar(elemento) {
    this.#items.push(elemento);
  }

  desapilar() {
    return this.#items.pop();
  }

  verTope() {
    return this.#items[this.#items.length - 1];
  }

  estaVacia() {
    return this.#items.length === 0;
  }
}

// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: COLA / QUEUE - FIFO (Katas 16-20)
// ─────────────────────────────────────────────

// Katas 16-20: Cola
class Cola {
  #elementos;

  constructor() {
    this.#elementos = [];
  }

  encolar(elemento) {
    this.#elementos.push(elemento);
  }

  desencolar() {
    return this.#elementos.shift();
  }

  frente() {
    return this.#elementos[0];
  }

  tamano() {
    return this.#elementos.length;
  }
}

module.exports = {
  Contador,
  Calculadora,
  Validador,
  Conversor,
  Generador,
  CuentaBancaria,
  Termostato,
  Reloj,
  CajaFuerte,
  Pila,
  Cola,
};
