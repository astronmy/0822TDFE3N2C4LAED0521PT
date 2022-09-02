## ¿Qué es Axios?
Axios es una libreria de cliente HTTP que le permite realizar solicitudes a un endpoint

### Por qué usar Axios en React
Hay varias bibliotecas diferentes que puede usar para realizar estas solicitudes, entonces, ¿por qué elegir Axios?

Aquí hay cinco razones por las que debería usar Axios como su cliente para realizar solicitudes HTTP:

1. Tiene buenos valores predeterminados para trabajar con datos JSON. A diferencia de alternativas como Fetch API, a menudo no necesita configurar sus encabezados. O realice tareas tediosas como convertir el cuerpo de su solicitud en una cadena JSON.
2. Axios tiene nombres de funciones que coinciden con cualquier método HTTP. Para realizar una solicitud GET, utiliza el método .get().
3. Axios hace más con menos código. A diferencia de Fetch API, solo necesita una devolución de llamada .then() para acceder a los datos JSON solicitados.
4. Axios tiene un mejor manejo de errores. Axios arroja 400 y 500 errores de rango por nosotros. A diferencia de Fetch API, donde debe verificar el código de estado y arrojar el error nosotros mismo.
5. Axios se puede utilizar tanto en el servidor como en el cliente. Si está escribiendo una aplicación en Node.js, tenga en cuenta que Axios también se puede usar en un entorno separado del navegador.

### Cómo instalar Axios en un proyecto de React
Si tienes un proyecto React existente, solo necesita instalar Axios con npm (o cualquier otro administrador de paquetes):

```
npm install axios
```
### Solicitud GET

```
import axios from "axios";
import { useEffect, useState } from 'react';

const url = "https://digitalhouse.com/students/1";

export default function App() {
const [student, setStudent] = useState({});

useEffect(() => {
  axios.get(url).then((response) => {
    setStudent(response.data);
  });
}, []);

if (!student) return null;

  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.lastname}</p>
    </div>
  );
}

```

### Solicitud POST

```
import axios from "axios";
import React from "react";

const baseURL = "https://digitalhouse.com/students/";

export default function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setStudent(response.data);
    });
  }, []);

  const createStudent = () => {
    axios
      .post(baseURL, {
        name: "Bruce",
        lastname: "Wayne"
      })
      .then((response) => {
        setStudent(response.data);
      });
  }

  if (!student) return "No student!"

  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.lastname}</p>
      <button onClick={createStudent}>Create Student</button>
    </div>
  );
}
```

### Solicitud PUT
```
import axios from "axios";
import React from "react";

const baseURL = "https://digitalhouse.com/students";

export default function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setStudent(response.data);
    });
  }, []);

  const updateStudent = () => {
    axios
      .put(`${baseURL}/1`, {
        name: "Tony",
        lastname: "Stark"
      })
      .then((response) => {
        setStudent(response.data);
      });
  }

  if (!student) return "No student!"

  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.lastname}</p>
      <button onClick={updateStudent}>Update Student</button>
    </div>
  );
}

```
### Solicitud DELETE

```
import axios from "axios";
import React from "react";

const baseURL = "https://digitalhouse.com/students";

export default function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setStudent(response.data);
    });
  }, []);

  const deleteStudent = () => {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Student deleted!");
        setStudent(null)
      });
  }

  if (!student) return "No Student!"

  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.lastname}</p>
      <button onClick={deleteStudent}>Delete Student</button>
    </div>
  );
}

```