// app/actions.ts
'use server';

export async function submitForm(formData: FormData) {
  const nombre = formData.get('nombre');
  const email = formData.get('email');

  // Validar datos aquí
  console.log('Datos recibidos:', { nombre, email });

  // Guardar en base de datos
  return { success: true };
}