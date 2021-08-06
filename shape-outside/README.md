# Shape outside

Shape-outside es una nueva propiedad de CSS que cambia la forma de los elementos que se envuelven. En lugar de limitarse a un cuadro delimitador rectangular alrededor de la imagen, shape-outside nos permite dar forma al contenido para que se ajuste a la imagen.

![](https://media.giphy.com/media/1sxQiuyumBwFq6sDVq/giphy.gif)

`shape-outside` controla cómo el texto se envuelve alrededor de cualquier imagen flotante. El texto que se ajusta puede tomar la forma de un círculo, elipse, rectángulo o polígono.

#

## Syintax

```
  shape-outside: circle();
  shape-outside: ellipse();
  shape-outside: inset(10px 10px 10px 10px);
  shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
  shape-outside: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');
```

#

En [este video](https://www.youtube.com/watch?v=_UvnDuDaQLE) puedes ver una mejor explicación.

#

## Links

- [shape-outside: CSS Tricks](https://css-tricks.com/almanac/properties/s/shape-outside/)
