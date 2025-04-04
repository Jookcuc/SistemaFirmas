export const StringsProfile = {
  "StringsProfile": {
    "title": {
      "pageTitle": "Configuración de Usuario",
      "sectionTitle": "Información personal y firma"
    },
    "buttons": {
      "sign": "Repetir Firma",
      "confirm": "Confirmar"
    },
    "inputs": {
      "name": "Nombre",
      "lastName": "Apellido",
      "email": "Correo",
      "password": "Contraseña",
      "confirmPassword": "Confirmar Contraseña"
    },
    "required":{
      "name": "El nombre es obligatorio",
      "lastName": "El apellido es obligatorio",
      "email": "El correo electrónico es obligatorio",
      "password": "La contraseña es obligatoria",
      "confirmPassword": "Debes de confirmar tu contraseña",
      "sign": "La firma es necesaria"
    },
    "rules":{
      "name":{
        "minLength": "El nombre debe tener más de 2 caracteres"
      },
      "lastName": {
        "minLength": "El apellido debe tener más de 2 caracteres"
      },
      "email":{
        "validEmail": "Por favor, ingrese un email valido"
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
  },
  en: {
    translation: {
      "StringsProfile": {
        "title": {
          "pageTitle": "User config",
          "sectionTitle": "Sign and personal information"
        },
        "buttons": {
          "sign": "Resign",
          "confirm": "Confirm"
        },
        "inputs": {
          "name": "Name",
          "lastName": "Last Name",
          "email": "Email",
          "password": "Password",
          "confirmPassword": "Confirm Password"
        }
      }
    }
  }
}