## Contexto
Nos permite pasar datos entre los componentes sin la necesidad de utilizar el envío manual a través de props ya que como vimos hasta ahora los datos se envían desde componentes padres a los hijos por medio de las props.

#### No abusar del uso de Context
Es importante tener en cuenta que el uso de contextos debe ser juicioso, ya que no debemos reemplazar una cosa por la otra, es decir, no reemplazar el envío de props por un contexto. 

### Create context
Partimos de la creación del objeto context empleando createContext y enviandole un valor por defecto a nuestro contexto. Con este objeto podemos hacer uso de un componente Provider y el hook con useContext que nos permite consumir datos que se envíen por el provider

### Context Provider
Como mencioné cada uno de los objetos context que se usen vienen con un componente Provider de React el cual permite que los componentes hijos tengan acceso a los datos globales que se pasan al provider.	

```
  <MiContexto.Provider value={lo que habilito para el contexto}>

```
### Use context
El useContext es un consumidor del Provider en otras palabras es la forma de acceder o consumir la data que pasamos por el value del Provider si la data que pasamos por el Provider cambia los consumidores o consumidor en este caso el useContext se va a renderizar nuevamente.

La forma de trabajar con useContext es recibiendo el objeto contexto y devuelve el valor del contexto actual, como ya se mencionó el valor del contexto actual se determina por el value del Provider.

```
  const contexto = useContext(MiContexto)

```
En este punto puedon desestructurar si se trata de mas de  un valor lo que ofrece el contexto

```
  const {value1, value2} = useContext(MiContexto)

```
