export async function getCodes() {
  try {
    const codes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/codes?filter=haveVoucher&order=asc&limit=4`
    );

    if (!codes.ok) {
      throw new Error("No se pudo obtener los códigos");
    }

    return codes.json();
  } catch (err) {
    return [];
  }
}

export async function getBenefits() {
  try {
    const benefits = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/benefits?tagName=Turismo en Buenos Aires&limit=4`
    );

    if (!benefits.ok) {
      throw new Error("No se pudo obtener los beneficios");
    }
    return benefits.json();
  } catch (err) {
    return [];
  }
}
