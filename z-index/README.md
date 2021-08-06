# Z-index

`z-index` es una propiedad de CSS que controla el orden de apilamiento de elementos superpuestos.
Los elementos con un valor `z-index` más alto se muestran delante de aquellos con un valor de `z-index` más bajo, y pueden ser valores negativos o positivos.

Algo a tomar en cuenta es que `z-index` solo afecta a los elementos que tienen un valor de posición que no sea static, es decir, debe tener `position: absolute | relative | fixed` , tambien debemos tomar en cuenta el orden natural de los elementos en el DOM, donde el último hijo del DOM siempre aparecerá al principio.

#

![](https://media.giphy.com/media/3B2hmlhDNoL9GrOx3F/giphy.gif)

#

[Youtube video](https://www.youtube.com/watch?v=zSKfdFtjSro&t=3s)

## Syntax

```
position: absolute | relative | fixed
z-index: -2 | -1 | 0 | 1 | 2 ...
```

## Links

- [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [CSS-tricks](https://css-tricks.com/almanac/properties/z/z-index/)
