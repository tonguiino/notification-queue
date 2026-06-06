# Notification Queue Manager

Prueba técnica desarrollada con **Next.js 14**, **React 18**, **TypeScript**, **Formik**, **Yup** y **Tailwind CSS**.

## Funcionalidades implementadas

### Gestión de notificaciones

* Crear notificaciones.
* Eliminar notificaciones.
* Enviar notificaciones individualmente.
* Enviar todas las notificaciones pendientes.
* Cancelar envíos mediante `AbortController`.
* Reintentar notificaciones fallidas.

### Simulación de envío

* Duración aleatoria entre 1 y 8 segundos.
* Actualización de progreso en tiempo real.
* Probabilidad de fallo del 20%.
* Estados soportados:

  * Queued
  * Sending
  * Sent
  * Failed

### Validaciones

* Formulario construido con Formik + Yup.
* Títulos obligatorios.
* Títulos únicos.
* Máximo 5 notificaciones pendientes.

### Extras

* Filtros por estado:

  * All
  * Queued
  * Sending
  * Sent
  * Failed

---

## Tecnologías utilizadas

* Next.js 14
* React 18
* TypeScript
* Tailwind CSS
* Formik
* Yup

---

## Instalación

```bash
git clone https://github.com/tonguiino/notification-queue.git

cd notification-queue

npm install

npm run dev
```

La aplicación estará disponible y desplegada en:

```bash
https://notification-queue.vercel.app/
```

---

## Estructura del proyecto

```text
app/
components/
types/
utils/
```

---

## Autor

Santiago Tonguino
