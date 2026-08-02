# Páginas legales de LumbreAI

Cuatro páginas estáticas, sin dependencias ni build. Bilingües: el idioma se
detecta del navegador y se puede cambiar con el selector, que recuerda la
elección.

| Fichero | Para qué |
|---|---|
| `index.html` | Portada con enlaces a las tres |
| `privacidad.html` | Política de privacidad |
| `terminos.html` | Términos de uso |
| `borrar-cuenta.html` | Ruta web de borrado de cuenta |

## Publicarlas con GitHub Pages

1. Sube el repo a GitHub (puede ser privado; Pages funciona igual en cuentas de pago, y en gratuitas necesita repo público).
2. En el repo: **Settings → Pages**.
3. En *Source* elige **Deploy from a branch**, rama `main`, carpeta **`/docs`**.
4. Guarda y espera un par de minutos.

Las URLs quedan así, sustituyendo `USUARIO` y `REPO`:

```
https://USUARIO.github.io/REPO/legal/
https://USUARIO.github.io/REPO/legal/privacidad.html
https://USUARIO.github.io/REPO/legal/terminos.html
https://USUARIO.github.io/REPO/legal/borrar-cuenta.html
```

Cuando las tengas, pégalas en `src/config/legal.ts` para que la app enlace a
ellas, y en las consolas:

- **App Store Connect** → tu app → *Información de la app* → **URL de política de privacidad**.
- **Play Console** → *Política de la aplicación* → **Política de privacidad**, y en *Seguridad de los datos* el campo de **URL de eliminación de cuenta**.

## Requisitos que estas páginas ya cumplen

Google Play es literal con el formato y exige que la política esté en una URL
activa, pública, sin geobloqueo, que no sea un PDF y que no sea editable; que se
titule claramente como política de privacidad; y que el nombre de la entidad de
la ficha aparezca dentro del texto. También pide que incluya datos del
desarrollador y un punto de contacto de privacidad, los tipos de datos
recogidos, con quién se comparten, el manejo seguro, y la política de retención
y borrado. Todo eso está.

Para el borrado de cuenta, Play exige una vía **dentro** de la app y otra
**fuera**; `borrar-cuenta.html` es la de fuera.

## Si cambias algo en la app

La política y el formulario de datos de cada tienda tienen que decir lo mismo.
Si añades una función que envíe datos nuevos a algún sitio, actualiza a la vez
`privacidad.html`, la pantalla `app/privacidad.tsx` y el formulario de la
consola. Una discrepancia entre los tres es motivo de rechazo.
