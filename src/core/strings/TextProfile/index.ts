export const StringsProfile = {
  "StringsProfile": {
    "title": {
      "pageTitle": "Configuración de Usuario",
      "sectionTitle": "Información personal y firma"
    },
    "steps":{
      "personalIfno": "Información Personal",
      "userData": "Datos de Usuario"
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
        "symbol": "La contraseña debe tener al menos un simbolo",
        "lower": "La contraseña debe contener al menos una letra minúscula",
        "upper": "La contraseña debe contener al menos una letra mayúscula"
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
        },
        "required":{
          "name": "The name is requiered",
          "lastName": "The last name is required",
          "email": "The email is required",
          "password": "The password is required",
          "confirmPassword": "You need to confirm your password",
          "sign": "The sign is required"
        },
        "rules":{
          "name":{
            "minLength": "The name must have at least 2 characters"
          },
          "lastName": {
            "minLength": "The last name must have at least 2 characters"
          },
          "email":{
            "validEmail": "Please enter a valid email address"
          },
          "password":{
            "minLength": "The password must have at least 8 characters",
            "maxLength": "The password only supports 127 characters",
            "number": "The password must have at least a number",
            "symbol": "The password must have at least a simbol",
            "lower": "The password must have at least a lowercase letter",
            "upper": "The password must have at least a uppercase letter"
          },
          "confirmPassword":{
            "equals": "Enter the code send to your email"
          }
        }
      }
    }
  }
}