# Blog Backend API

Un backend para sistema de blog desarrollado con Node.js, Express y Sequelize.

## Requisitos

- Node.js 16+
- npm

## Instalación

1. Clonar repositorio:
```bash
git clone https://github.com/obocanegra-dev/simple-blog-api
cd simple-blog-api
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor:
```bash
npm start
```

## Uso

El servidor se ejecuta en `http://localhost:3000`

### Endpoints Principales

**Posts:**
- `POST /posts`: Crear nuevo post
  ```json
  {
    "title": "Mi primer post",
    "content": "Contenido del post"
  }
  ```

- `GET /posts`: Obtener todos los posts
- `GET /posts/:id`: Obtener post con comentarios
- `PUT /posts/:id`: Actualizar post
- `DELETE /posts/:id`: Eliminar post

**Comentarios:**
- `POST /posts/:postId/comments`: Añadir comentario
  ```json
  {
    "author": "Juan",
    "content": "Excelente post!"
  }
  ```

- `DELETE /comments/:commentId`: Eliminar comentario

## Estructuras de Datos

**Post:**
```json
{
  "id": 1,
  "title": "Título del post",
  "content": "Contenido completo...",
  "createdAt": "2023-08-01T12:00:00.000Z",
  "updatedAt": "2023-08-01T12:00:00.000Z",
  "Comments": []
}
```

**Comment:**
```json
{
  "id": 1,
  "author": "Ana",
  "content": "Muy útil!",
  "PostId": 1,
  "createdAt": "2023-08-01T12:05:00.000Z",
  "updatedAt": "2023-08-01T12:05:00.000Z"
}
```

## Posibles Mejoras
- Autenticación de usuarios
- Sistema de tags/categorías
- Búsqueda de posts
- Paginación en GET /posts
