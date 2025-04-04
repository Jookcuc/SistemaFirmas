export const StringsRegister = {
  "StringsRegister":{
    "title": {
      "createAccount": "Creación de Cuenta",
    },
    "steps": {
      "personalData": "Datos Personales",
      "accessData": "Datos de Acceso"
    },
    "buttons": {
      "sign": "Firmar",
      "next": "Siguiente",
      "registerButton": "Registrarse"
    },
    "inputs": {
      "name": "Nombre",
      "lastName": "Apellido",
      "productKey": "Clave de Producto",
      "email": "Correo",
      "password": "Contraseña",
      "confirmPassword": "Confirmar Contraseña",
    },
    "required": {
      "name": "El nombre es obligatorio",
      "lastName": "El apellido es obligatorio",
      "productKey": "La clave del producto es obligatoria",
      "sign": "La firma es obligatoria",
      "email": "El correo electrónico es obligatorio",
      "password": "La contraseña es obligatoria",
      "confirmPassword": "El campo Confirmar Contraseña es obligatorio"
    },
    "rules":{
      "name":{
        "minLength": "El nombre debe tener más de 2 caracteres"
      },
      "lastName": {
        "minLength": "El apellido debe tener más de 2 caracteres"
      },
      "productKey": {
        "isValid": "Ingrese una clave de producto valida",
      },
      "email":{
        "isValid": "Por favor, ingrese un email valido"
      },
      "password":{
        "minLength": "La contraseña debe tener al menos 8 caracteres",
        "maxLength": "La contraseña debe tener como maximo 127 caracteres",
        "number": "La contraseña debe de contener al menos un número",
        "symbol": "La contraseña debe tener al menos un simbolo"
      },
      "confirmPassword":{
        "equals": "Las contraseñas son distintas"
      }
    }
  }
}