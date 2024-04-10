import { useState, useEffect } from "react";

export default function Home() {
  // Define un estado para almacenar los nombres de los usuarios
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET cuando el componente se monte en el DOM
    fetch("/api/hello")
      .then((response) => {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Convertir la respuesta a formato JSON
        return response.json();
      })
      .then((data) => {
        // Manejar los datos de la respuesta
        console.log(data); // Aquí puedes acceder a los datos de los usuarios
        // Por ejemplo, si los datos son un array de usuarios, puedes acceder a sus nombres así:
        const userNames = data.data.map((user) => user.name);
        console.log(userNames); // Esto te dará un array con los nombres de los usuarios
        // Almacena los nombres de los usuarios en el estado
        setUserNames(userNames);
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // El segundo argumento vacío [] asegura que este efecto solo se ejecute una vez después del montaje inicial

  return (
    <div>
      {/* Renderiza los nombres de los usuarios */}
      <ul>
        {userNames.map((userName, index) => (
          <li key={index} style={{ color: "white" }}>
            {userName}
          </li>
        ))}
      </ul>
    </div>
  );
}
