export async function getMusicData(message: string) {
  console.log(message);

  const res = { intervaloParaAdivinar: message, intervaloElegido: 'falta hacerlo' };

  try {
    const data = await fetch("http://localhost:3020/intervalo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
  } catch (error) {
    console.error("Error al enviar datos al backend:", error);
  }
}


