// app/actions.ts
'use client';

async function sendData(formData: FormData) {
  const nombre = formData.get('nombre');
  const apellido = formData.get('apellido');
  const email = formData.get('email');  

  // Validación simple de los datos
  if (!nombre || !apellido || !email) {
    throw new Error('Todos los campos son obligatorios');
  }
}
// --Componente principal del formulario--
export default sendData;