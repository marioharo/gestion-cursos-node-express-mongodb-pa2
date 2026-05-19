# Gestión de Cursos e Inscripciones

API REST desarrollada con Node.js, Express y MongoDB para la gestión de usuarios, cursos e inscripciones.

---

# Descripción del proyecto

Este proyecto consiste en una API REST segura que permite administrar usuarios, cursos e inscripciones académicas.

La aplicación incluye autenticación mediante JWT, manejo de roles y persistencia de datos utilizando MongoDB y Mongoose.

---

# Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- cors
- nodemon

---

# Instalación del proyecto

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Ingresar a la carpeta del proyecto

```bash
cd nombre-del-proyecto
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Crear archivo .env

Crear un archivo llamado `.env` en la raíz del proyecto y agregar:

```env
PORT=3000
MONGO_URI=TU_URI_DE_MONGODB
JWT_SECRET=mi_secreto_jwt
```

---

# Ejecutar el proyecto

## Modo desarrollo

```bash
npm run dev
```

## Modo normal

```bash
npm start
```

---

# Endpoints principales

## Autenticación

| Método | Endpoint           | Descripción      |
| ------- | ------------------ | ----------------- |
| POST    | /api/auth/register | Registrar usuario |
| POST    | /api/auth/login    | Iniciar sesión   |

---

## Cursos

| Método | Endpoint         | Descripción   |
| ------- | ---------------- | -------------- |
| GET     | /api/courses     | Listar cursos  |
| POST    | /api/courses     | Crear curso    |
| PUT     | /api/courses/:id | Editar curso   |
| DELETE  | /api/courses/:id | Eliminar curso |

---

## Inscripciones

| Método | Endpoint         | Descripción           |
| ------- | ---------------- | ---------------------- |
| GET     | /api/enrollments | Listar inscripciones   |
| POST    | /api/enrollments | Registrar inscripción |

---

# Seguridad implementada

- Autenticación mediante JWT
- Protección de rutas privadas
- Middleware de autorización por roles
- Encriptación de contraseñas con bcryptjs
- Validación básica de datos
- Configuración de CORS

---

# Estructura del proyecto

```bash
src/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── middlewares/
│   ├── auth.middleware.js
│   └── role.middleware.js
│
├── models/
│   ├── user.model.js
│   ├── course.model.js
│   └── enrollment.model.js
│
├── routes/
│
├── services/
│
├── utils/
│
└── app.js
```

---

# Modelos principales

## User

Representa los usuarios del sistema:

- administrador
- docente
- estudiante

## Course

Representa los cursos disponibles.

## Enrollment

Representa las inscripciones de estudiantes en cursos.

---

# Funcionalidades implementadas

- Registro de usuarios
- Inicio de sesión
- CRUD completo de cursos
- Registro de inscripciones
- Protección de rutas privadas
- Manejo de roles
- Persistencia de datos con MongoDB

---

# Pruebas realizadas

Las pruebas de endpoints fueron realizadas utilizando:

- Postman

Se validaron:

- rutas públicas
- rutas privadas
- autenticación JWT
- respuestas HTTP
- validación de datos

---

# Integrantes del grupo

- Mario Yonatan Haro Agreda
- Karlo Andre Vergara Caballero
- Alexis Chagua Cueva
- Erick Borda Roman

---

# Recomendaciones

- Utilizar MongoDB Atlas para la base de datos.
- No subir la carpeta node_modules al repositorio.
- Mantener las variables sensibles dentro del archivo `.env`.

---

# Autor

Proyecto desarrollado para el curso de Programación Web Avanzada.
