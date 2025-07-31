import { useForm } from "react-hook-form";
import Imagen from "./components/Imagen";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Enlace from "./components/Enlace";
import Lista from "./components/Lista";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import Boton from "./components/Boton";
import InputText from "./components/InputText";
import InputPassword from "./components/InputPassword";
import InputEmail from "./components/InputEmail";
import InputTel from "./components/InputTel";
import InputURL from "./components/InputURL";
import InputSearch from "./components/InputSearch";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Formulario enviado:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="container my-5">
      <Titulo texto="Demostración de Componentes" nivel={1} />
      <Parrafo texto="Estos son componentes React reutilizables para elementos HTML básicos." />
      <Imagen
        src="/logo192.png"
        alt="Imagen de ejemplo"
        width="300"
        height="200"
      />

      <Titulo texto="Enlace" nivel={2} />
      <Enlace href="https://reactjs.org" texto="Documentación de React" />

      <Titulo texto="Lista de Tecnologías" nivel={2} />
      <Lista elementos={["React", "Bootstrap", "JavaScript", "HTML", "CSS"]} />

      <Titulo texto="Tabla de Datos" nivel={2} />
      <Tabla
        cabecera={["Nombre", "Edad", "País"]}
        datos={[
          ["Juan", 25, "Ecuador"],
          ["Ana", 30, "Colombia"],
          ["Luis", 28, "México"],
        ]}
      />

      <Titulo texto="Formulario de Prueba" nivel={2} />
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <InputText
          {...register("nombre", { required: true, minLength: 3 })}
          placeholder="Nombre"
        />
        {errors.nombre && (
          <span className="text-danger">
            Nombre es obligatorio (mínimo 3 caracteres)
          </span>
        )}

        <InputEmail
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          placeholder="Correo electrónico"
        />
        {errors.email && (
          <span className="text-danger">Correo electrónico inválido</span>
        )}

        <InputTel {...register("telefono")} placeholder="Teléfono" />

        <InputPassword
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Contraseña"
        />
        {errors.password && (
          <span className="text-danger">
            Contraseña debe tener mínimo 6 caracteres
          </span>
        )}

        <InputURL {...register("web")} placeholder="Sitio web personal" />

        <InputSearch {...register("busqueda")} placeholder="Buscar..." />

        <Boton texto="Enviar" />
      </Formulario>
    </div>
  );
}

export default App;
