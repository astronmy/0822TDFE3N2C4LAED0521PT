# Promesas Info
```
const solicitarComida = async () => {
  return new Promise((resolve, reject) => {
    const hayMenu = false
    setTimeout(() => {
      /*if(hayMenu){
          resolve('5. Recibo mi menu')
      }
      reject('6. No queda menu')*/

      (hayMenu ? resolve('5. Recibo mi menu') : reject('6. No queda menu'))

    }, 2000)

  })

}

async function restaurant() {

  try {

    console.log('1. Entro al restaurant')
    console.log('2. Me siento en una mesa disponible')
    console.log('3. Veo el menu')
    console.log('4. Selecciono una opcion del menu')
    console.log(await solicitarComida())
    console.log('6. Como')
    console.log('7. Pago')

    //console.log('5. 5. Recibo mi menu')
  } catch (error) {
    console.log(error)
  } finally{
    console.log('me voy')
  }
}

restaurant();




/*solicitarComida().then( (respuesta) =>{
      console.log(respuesta)
      console.log('6. Como')
      console.log('7. Pago')
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      console.log('8. Y me voy')
    });*/

```