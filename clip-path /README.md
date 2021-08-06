# CSS-properyty clip-path

con clip-path podemos usar imágenes o elementos para crear recortes básicos (circle, ellipse, polygon) u otras formas, el cual deja ver parte del elemento con la forma que hiciste el recorte, de esta manera puedes hacer efectos divertidos muy fácilmente.

![](https://media.giphy.com/media/eZTKD1IhPcDXXfMrsd/giphy.gif)

#

En esta demo, podemos ver que al utilizar `clip-path: circle;` al hacer hover se muestra la forma del circulo al tamaño que queremos, en este caso pasa de un 50% a un 30%.
Lo mismo con `clip-path: polygon;` realizamos la forma de un triangulo y podemos crear otras formas jugando con sus valores.

Ryan Scherf realizo un tutorial en [CSS-Tricks](https://css-tricks.com/sketchy-avatars-css-clip-path/) sobre el uso de `clip-path: polygon;`

## Syntax

```syntax
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path('')
```

## Links

- [CSS-Tricks - tutorial](https://css-tricks.com/sketchy-avatars-css-clip-path/)
- [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- [Medium: clip-path](https://medium.com/@acesmndr/clip-path-an-awesome-css-property-you-should-be-using-eb24316d779c)
