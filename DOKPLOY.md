# Guía de Despliegue en Dokploy – El Chaltén Transfers

Esta guía te ayudará a desplegar la web de **El Chaltén Transfers** (Angular con SSR) en Dokploy.

## Prerrequisitos

1. Tener una cuenta en Dokploy configurada
2. Tener el repositorio en GitHub (por ejemplo: `AdrianCabello/el-chalten-transfers`)

## Pasos para el Despliegue

### 1. Crear la Aplicación en Dokploy

1. Inicia sesión en tu panel de Dokploy
2. Haz clic en **"Create"** o **"Nueva Aplicación"**
3. Asigna un nombre (ej: **el-chalten-transfers** o **El Chaltén Transfers**)
4. Selecciona el servidor donde quieres desplegar
5. Haz clic en **"Create"**

### 2. Configurar el Repositorio

1. En la configuración de la aplicación, ve a la sección **"Source"**
2. Conecta tu repositorio de Git (GitHub)
3. Selecciona la rama a desplegar (por ejemplo `main`)
4. Configura el build:
   - **Build Type**: **Dockerfile**
   - **Dockerfile Path**: `Dockerfile` (o en blanco si está en la raíz)
   - **Docker Context**: `.` (raíz del proyecto)

### 3. Variables de Entorno

En **"Environment Variables"** puedes definir (opcional):

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT`  | Puerto interno del servidor Node (por defecto 4000) | `4000` |

Para esta aplicación no son necesarias variables de entorno adicionales (no usa base de datos ni APIs externas en el build).

### 4. Configurar el Puerto

En la configuración de la aplicación en Dokploy:

- **Port**: `4000` (debe coincidir con el que expone el contenedor)
- **Health Check Path**: `/` (opcional; la raíz responde con la app)

### 5. Desplegar

1. Guarda todos los cambios
2. Haz clic en **"Deploy"** o **"Redeploy"**
3. Dokploy construirá la imagen con el Dockerfile y desplegará la aplicación
4. Revisa los logs para confirmar que el servidor SSR arranca correctamente

## Verificación Post-Despliegue

Comprueba que:

1. La aplicación está en estado **"Running"**
2. Los logs muestran algo como: `Node Express server listening on http://localhost:4000`
3. Puedes abrir la URL asignada por Dokploy y ver la landing de El Chaltén Transfers

## Comandos Útiles

- **Ver logs**: En Dokploy, sección **"Logs"** de la aplicación
- **Reiniciar**: Botón **"Restart"** en el panel

## Estructura del Dockerfile

- **Stage 1 (builder)**: Instala dependencias, copia el código y ejecuta `npm run build:ssr` (Angular con SSR).
- **Stage 2 (runner)**: Solo copia el resultado del build (`dist/el-chalten-transfers-app`) y las dependencias de producción; arranca con `node dist/el-chalten-transfers-app/server/server.mjs`.

## Troubleshooting

### Error: "Cannot find module" al iniciar

- Asegúrate de que el build se haya completado sin errores (`npm run build` o `npm run build:ssr` en local).
- Revisa que en el runner se copie `dist/el-chalten-transfers-app` y que existan las carpetas `server` y `browser`.

### Error: "Port already in use"

- Cambia el puerto en Dokploy o define `PORT` en las variables de entorno del contenedor.

### La página no carga o tarda mucho

- Revisa los logs del contenedor.
- Comprueba que el **Port** configurado en Dokploy (ej. 4000) coincida con el que expone la aplicación.

### Error: "Your connection is not private" / NET::ERR_CERT_AUTHORITY_INVALID

Este error indica que el certificado SSL no es válido o no está confiado por un CA (Let's Encrypt). Causas habituales:

1. **DNS apuntó después de añadir el dominio**  
   El dominio debe apuntar al IP del servidor **antes** de añadirlo en Dokploy. Si lo añadiste antes, Let's Encrypt no pudo verificar el dominio y el certificado no se generó.

   **Solución:**  
   - Elimina el dominio en Dokploy  
   - Revisa que `elchaltentransfers.com` apunte al IP del servidor (registro A o CNAME)  
   - Espera un poco a que se propague el DNS  
   - Añade de nuevo el dominio en Dokploy  
   - Revisa los logs de Traefik para ver si Let's Encrypt genera el certificado

2. **HTTPS desactivado o sin certificado**  
   En la configuración del dominio en Dokploy, verifica que:
   - El toggle **HTTPS** esté activado  
   - El proveedor de certificado sea **Let's Encrypt** (o el que uses)  
   - No uses `Ports` en Advanced Settings si no es necesario

3. **Certificado expirado o mal generado**  
   - Elimina el dominio y vuelve a crearlo  
   - Reinicia Traefik desde el panel de Dokploy  
   - Revisa los logs de Traefik para errores de ACME/Let's Encrypt

4. **HSTS**  
   Si el sitio ya usó HSTS antes, Chrome recordará que debe usarse HTTPS. Si el certificado falla, no permitirá bypass. Hay que corregir el certificado en el servidor.
