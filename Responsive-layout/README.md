# responsive layout

Una de las características de CSS Grid más poderosas es que tenemos la opción de repetir para rellenar columnas en una Grid y luego colocar elementos automáticamente en ellas.
Para ello utilizamos la función `repeat()` que permite repetir columnas tantas veces como sea necesario, con dos valores: `auto fill` y la funcion `minmax()`.

#

![](https://media.giphy.com/media/SqT5gWmUkHxaZnVGQd/giphy.gif)

#

[youtube video](https://youtu.be/hHK44INpM14)

## Syntax example

```
display: grid;
grid-template-columns: repeat(auto-fill, minmax(x, x));
```

## More info

- [minmax()](<https://developer.mozilla.org/en-US/docs/Web/CSS/minmax()>)
- [Autofill](https://gridbyexample.com/examples/example37/)
