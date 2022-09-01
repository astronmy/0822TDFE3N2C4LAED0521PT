# Consumo de API

Para consumir APIs tenemos que estar familiarizados con conceptos como fetch y promesas. Cuando se habla expresamente de React debemos tener noción de otros conceptos como el ciclo de vida de los componentes y los estados. Lo que hemos visto hasta ahora con los Hooks como useEffect y useState

## ¿Qué es fetch API?

Es una interfaz para obtener información de una url. Que está ampliamente soportada por los navegadores de hoy dia. 

[Mas info](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Uso de fetch
Su uso es sencillo y lo podemos ver a lo largo del siguiente [ejemplo](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

## La API de Rick & Morty
Para lo que nos saben API como sus siglas lo indican es Application Programming Interface, en español, Interfaz de Programación de Aplicaciones.

Es un conjunto de servicios y funciones destinados a alimentar de información a otro sistema que lo requiera. Dicho de una forma más criolla, es un sistema que brinda información y procedimientos a otros sistemas que la requieran.

Dentro de internet encontramos múltiples tipos de API con diferentes tipo de información. Algunas que requieren seguridad para utilizarlas, otras que tienen un cupo de uso gratis y otro pago. Y por último, apis libres de uso. Lo que tienen en común hoy en dia es que la gran mayoría trabajan sobre una arquitectura REST (Transferencia de Estado Representacional)

Para explicar el consumo de APIS con React utilizaremos la API de Rick & Morty. Que se encuentra [aqui](https://rickandmortyapi.com/documentation)

Esta API no requiere autenticación y nos provee de diferentes endpoints. Para el ejemplo usaremos el de obtener personajes

  **GET** https://rickandmortyapi.com/api/character
  
```
fetch("https://rickandmortyapi.com/api/character") //1) llamada a la API, el resultado es una Promise
.then((response) => response.json())              // 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
.then((data) => console.log(''))                  // 3) aquí ya tenemos la respuesta en formato objeto
.catch(() => console.log('algo salio mal'))

```
El llamado de fetch retorna un objeto de tipo Promise, es por eso que tenemos que encadenar un then que se ejecutará una vez fetch haya terminado de obtener el recurso solicitado. A su vez, la línea que transforma a JSON la respuesta también es asíncrona, es por eso que cuando usamos fetch necesitaremos tener dos then, uno para la respuesta y la otra para su transformación a JSON. Dentro de results encontraremos el detalle de personajes consultados. La respuesta resultante nos provee además información sobre la cantidad de registros e incluso nos pagina dichos resultados. 

Para poder capturar los errores debemos agregar un catch que será el encargado de atrapar el error y ejecutar lo que necesitemos que se haga en ese caso

## Servicio para probar respuestas 
Para poder testear respuestas podemos hacer uso del servicio de [mock.codes](https://mock.codes/)

## Cómo usar fetch en React

Manejar el ciclo de vida de los componentes nos permite dar una mejor UX ya que podemos mostrar nuestro sitio de forma inmediata (la estructura estática) y todo aquello que genera lo que se denomina una llamada asíncrona controlarlo luego del montaje de los componentes.

Es decir, puedo cargar toda la estructura de mi sitio pero el contenedor que muestra para el ejemplo los personajes de Rick and Morty dejarlo cargando hasta que obtengamos una respuesta de la API.

A través del uso de useEffect puedo controlar este ciclo de vida. Por lo que hemos visto hasta ahora luego del montaje es conveniente hacer esa llamada a la API

```
const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [personajes, setPersonajes] = useState([])

 useEffect( () => {
   console.log('1')
     fetch(`${endpoint}${page}`)
     .then( (response) => response.json())
     .then( (data) => {
         setPersonajes(data.results)
         setLoading(false)
     })
 }, [])
```



