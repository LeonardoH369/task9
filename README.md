# Task9 · Cuaderno de diseño en AdminLTE

Proyecto de Leonardo Hinojosa Castro. La Tarea 9 integra las tres secciones de [Actividad 11](https://github.com/LeonardoH369/menus) en un panel con la plantilla oficial AdminLTE 4. El panel reutiliza los contenidos del cuaderno y el catálogo real que Express lee de MySQL.

| Sección | Ruta | Contenido |
| --- | --- | --- |
| Inicio | `/` | Presentación y acceso al catálogo. |
| Proyectos | `/proyectos` | Tres ejercicios de diseño almacenados en MySQL. |
| Contacto | `/contacto` | Instrucciones para enviar comentarios al repositorio de la Actividad 11. |

El menú lateral solo contiene estas tres opciones. Next.js identifica la ruta activa y aplica el estilo de AdminLTE y `aria-current="page"`. El pie muestra el nombre del autor y la Actividad 11 en todas las vistas. La plantilla se integra desde npm y la apertura del menú móvil se controla con React.

## Investigación e implementación

La consigna pide Laravel 7 con AdminLTE 3. El flujo histórico usa [Laravel-AdminLTE](https://github.com/jeroennoten/Laravel-AdminLTE/wiki/Installation): elegir una versión 3.x compatible mediante Composer, publicar los recursos con `php artisan adminlte:install`, extender la plantilla Blade del paquete y personalizar el menú en su configuración. Consulta también la [guía de AdminLTE 3](https://adminlte.io/docs/3.2/).

Esta entrega conserva el stack elegido para la Actividad 11: Next.js y TypeScript, Node.js con Express y MySQL. Utiliza la [estructura oficial de AdminLTE 4](https://www.adminlte.io/themes/v4/docs/layout.html) en un layout compartido. El requisito literal de Laravel 7 con AdminLTE 3 queda fuera de esta adaptación.

## Ejecución local

1. Clona el repositorio, abre `task9` y ejecuta `npm ci` con Node.js 24.
2. Copia `.env.example` a `.env` y asigna contraseñas a `DB_PASSWORD` y `MYSQL_ROOT_PASSWORD`.
3. Ejecuta `docker compose up -d db` para inicializar MySQL 8.4. El volumen nuevo importa `db/init.sql`. Para un MySQL existente, configura la conexión, importa el archivo en el esquema indicado y concede al usuario de la API acceso de lectura al catálogo.
4. Inicia Express con `npm run api`. En otra terminal ejecuta `npm run dev` y abre [http://127.0.0.1:3000](http://127.0.0.1:3000).
5. Ejecuta `npm run typecheck` y `npm run build` para comprobar la compilación.

El repositorio contiene el código y las instrucciones de ejecución. La demostración usa las rutas locales y el catálogo de muestra.
