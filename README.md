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

## Dónde están publicadas

En un repositorio aparte, `lumbreai-legal`, servido por GitHub Pages:

```
https://lucasusamentiaga.github.io/lumbreai-legal/
https://lucasusamentiaga.github.io/lumbreai-legal/privacidad.html
https://lucasusamentiaga.github.io/lumbreai-legal/terminos.html
https://lucasusamentiaga.github.io/lumbreai-legal/borrar-cuenta.html
```

Va separado del código a propósito: en el plan gratuito Pages exige repositorio
público, y publicar la app entera para servir cuatro HTML no compensa. Esas URLs
ya están en `src/config/legal.ts`.

## Si cambias algo aquí

**Esta carpeta es la copia que se edita.** El repositorio publicado es un
espejo, así que después de tocar cualquier fichero hay que copiarlo allí:

```
xcopy /E /Y "C:\Users\lukit\Desktop\Claude Code\Desarollo personal\momentum-v0.2\momentum\docs\legal" "%USERPROFILE%\Desktop\lumbreai-legal"
cd /d "%USERPROFILE%\Desktop\lumbreai-legal"
git add . && git commit -m "Actualizar legales" && git push
```

Si no se copia, las dos versiones se separan y nadie se entera hasta que una
tienda lo señala.

## Las tres cosas tienen que decir lo mismo

La política publicada, la pantalla `app/privacidad.tsx` y el formulario de datos
de cada consola son tres copias del mismo hecho. Una discrepancia entre ellas es
motivo de rechazo, no un descuido. Cuando añadas una función que envíe datos
nuevos a algún sitio, actualiza las tres a la vez.

Lo mismo con `app/terminos.tsx` y `terminos.html`, incluida la fecha del
encabezado: si no coinciden, son dos documentos distintos.

## Dónde declararlas

- **App Store Connect** → tu app → *Información de la app* → **URL de política de privacidad**.
- **Play Console** → *Política de la aplicación* → **Política de privacidad**, y en *Seguridad de los datos* el campo de **URL de eliminación de cuenta**.

## Requisitos que estas páginas ya cumplen

Google Play exige que la política esté en una URL activa, pública, sin
geobloqueo, que no sea un PDF y que no sea editable; que se titule claramente
como política de privacidad; y que el nombre de la entidad de la ficha aparezca
dentro del texto. También pide datos del desarrollador y un punto de contacto de
privacidad, los tipos de datos recogidos, con quién se comparten, el manejo
seguro, y la política de retención y borrado. Todo eso está.

Para el borrado de cuenta, Play exige una vía **dentro** de la app y otra
**fuera**; `borrar-cuenta.html` es la de fuera.
