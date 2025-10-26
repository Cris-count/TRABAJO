class Estudiante {
    constructor(nombre, nota) {
      this.nombre = nombre; // atributo público
      this.nota = nota;     // atributo público
    }
  
    mostrarInfo() {
      console.log(`Nombre: ${this.nombre}, Nota: ${this.nota}`);
    }
  
    aprobo() {
      console.log(this.nota >= 3.0 ? `${this.nombre} aprobó ✅` : `${this.nombre} no aprobó ❌`);
    }
  }
  
  // Prueba
  const e1 = new Estudiante("Ana", 4.5);
  e1.mostrarInfo();
  e1.aprobo();  