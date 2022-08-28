# Ciclo de vida (componentes basados en funciones)
Cuando trabajamos con componentes basados en funciones es necesario que utilicemos un hook para poder manejar el ciclo de vida de los componentes. El hook encargado de esta tarea se llama useEffect()

## useEffect
	Este hook recibe dos parámetros:
- una arrow function
- un array de dependencias

### Montaje

Si no especificamos el array de dependencias lo que sucede dentro de la funcion de flecha se ejecutara cada vez que el componente renderice por lo cual es importante no permitir este comportamiento  y en ese caso asignarle un array vacío **[ ]**

```
useEffect( () => {

  console.log("montaje")
    
}, [])
```
Como se puede observar en la imagen anterior esta definición es lo que análogamente conocemos como **componentDidMount** y todo lo definido en la función se ejecutará por única vez en la etapa de montaje

### Actualizacion

Cuando se trata de la etapa de **actualización**  tenemos que hacer uso del array de dependencias que recibimos como segundo parámetro. Esto quiere decir que podemos tener dentro de nuestro componente funcional más de una invocación a useEffect dependiendo de que queremos capturar en cada caso. Ya que este segundo parámetro recibe los **estados** o **props** que queremos observar y en el caso de que cambien ejecutar el código comprendido en la actualización.

```
 useEffect(() => {
    let temporizador;
    if(visible){
      temporizador = setInterval( () => {
          setHour(new Date().toLocaleTimeString())
      }, 1000)
    }else{
        clearInterval(temporizador)
    }

  }, [visible])
```
Por ejemplo en la imagen anterior podemos ver como utilizamos **useEffect** como listener del estado **visible**. Si este estado cambia:

- Y es **verdadero**  se tiene que ejecutar un temporizador que lo que va a hacer es modificar otro estado del componente que es la hora 1 vez por segundo.
- Pero si es **falso** va a limpiar ese intervalo para que deje de ejecutarse.

### Desmontaje

En el caso del **desmontaje** es más sencillo aún. Si definimos dentro de **useEffect**  una función de retorno. Será esta la que se ejecute durante el desmontaje

```
useEffect( () => {
      console.log("montaje")
     return () => {
        console.log("Se desmonto el reloj hora")
     }  
  }, [])
```
Por ejemplo en la imagen anterior Reloj es un componente que al momento de montarse tira un mensaje por consola y al momento de desmontarse otro.

# Eventos Sintéticos y Nativos
Manejar eventos en React es muy similar a manejar eventos en el DOM. Sin embargo existen algunas diferencias de sintaxis:

Los eventos de React se nombran usando camelCase, en vez de minúsculas. Con JSX pasas una función como el manejador del evento, en vez de un string.

En HTML un evento lo observamos como:

```
<button onclick="handleClick()">Click Me!</button>
```
En React lo observamos de la siguiente forma:
```
<button onClick={handleClick}>Click Me!</button>
```
Podemos observar que en **React** no hacemos uso de los paréntesis ya que eso significa realizar una ejecución inmediata pudiendo de esta forma entrar en un bucle. Otra diferencia a tener en cuenta es que en React no podemos retornar false para prevenir el comportamiento por defecto, para ello, tenemos que hacer uso de prevenDefault específicamente.

	“Toda función manejadora de eventos solo debería recibir el evento en sí.  SI necesito mandar al manejador más parámetros que el evento en si, para ello la forma más simplificada es hacer una  ejecución anónima  (e) => {handleclick(e, “texto”)}”

Los eventos nativos en **React** están envueltos en lo que se denomina eventos sintéticos o **SyntheticBaseEvent**. Esto lo hace para proveer mayor adaptabilidad entre los navegadores. Aun así podemos acceder al evento nativo navegando el evento recibido con el manejador a través de **nativeEvent**.

## Eventos Personalizados
Pero qué sucede cuando tengo un componente que cumple el rol de botón dentro de mi App? En este caso no puedo asignarle a mi componente el evento onClick ya que no lo interpretaría como un evento sintético sino que por el contrario lo tomaría como una prop.

En este caso generó un evento personalizado que es simplemente enviar al componente hijo por medio de las props la referencia al metodo a ejecutar y dentro de este hacer la ejecucion a traves del metodo onClick

```
const handleClick = (texto) => {
    console.log(texto)

  }

  return (
    <div className={styles.container}>
     <Button myClick={() => handleClick( "Hola Mundo")}/>
    </div>
  );
```

```
const Button = ({myClick}) =>{
  return (
      <button onClick={myClick} >Click</button>
  )
}
export default Button;
```
