function calcularPerfilRiesgo(persona) {
    var puntajes = {
      "Panamá": 100,
      "Otros países": 200,
      "Abogado": 100,
      "Ingeniero": 200,
      "Médico": 300,
      "Contador": 400,
      "Otras": 500,
      "Menos de 25": 100,
      "Entre 25 y 55": 200,
      "Mayor de 55": 300,
      "Menos de 20K": 100,
      "Entre 20K y 75K": 200,
      "Mayor de 75K": 300,
      "No": 100,
      "Sí": 200
    };
  
    var riesgo = 0;
  
    // Calcular puntaje según país de nacimiento
    if (persona.paisNacimiento === "Panamá") {
      riesgo += puntajes["Panamá"] * persona.peso;
    } else {
      riesgo += puntajes["Otros países"] * persona.peso;
    }
  
    // Calcular puntaje según país de residencia
    if (persona.paisResidencia === "Panamá") {
      riesgo += puntajes["Panamá"] * persona.peso;
    } else {
      riesgo += puntajes["Otros países"] * persona.peso;
    }
  
    // Calcular puntaje según profesión
    riesgo += puntajes[persona.profesion] * persona.peso;
  
    // Calcular puntaje según edad
    if (persona.edad < 25) {
      riesgo += puntajes["Menos de 25"] * persona.peso;
    } else if (persona.edad <= 55) {
      riesgo += puntajes["Entre 25 y 55"] * persona.peso;
    } else {
      riesgo += puntajes["Mayor de 55"] * persona.peso;
    }
  
    // Calcular puntaje según nivel de ingresos
    if (persona.ingresos < 20000) {
      riesgo += puntajes["Menos de 20K"] * persona.peso;
    } else if (persona.ingresos <= 75000) {
      riesgo += puntajes["Entre 20K y 75K"] * persona.peso;
    } else {
      riesgo += puntajes["Mayor de 75K"] * persona.peso;
    }
  
    // Calcular puntaje según PEP
    if (persona.pep === "Sí") {
      riesgo += puntajes["Sí"] * persona.peso;
    } else {
      riesgo += puntajes["No"] * persona.peso;
    }
  
    // Determinar nivel de riesgo
    var nivelRiesgo;
    if (persona.pep === "Sí") {
      nivelRiesgo = "Alto";
    } else if (riesgo < 1200) {
      nivelRiesgo = "Bajo";
    } else if (riesgo >= 1201 && riesgo <= 1400) {
      nivelRiesgo = "Medio";
    } else {
      nivelRiesgo = "Alto";
    }
  
    return {
      riesgo: riesgo,
      nivelRiesgo: nivelRiesgo
    };
  }
  
  // Ejemplo de uso
  var persona = {
    peso: 0.1,
    paisNacimiento: "Panamá",
    paisResidencia: "Panamá",
    profesion: "Médico",
    edad: 35,
    ingresos: 50000,
    pep: "No"
  };
  
  var perfilRiesgo = calcularPerfilRiesgo(persona);
  console.log(perfilRiesgo);