export async function getCodes() {
  const codes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/codes?filter=haveVoucher&order=asc&limit=4`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!codes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return codes.json();
}

export async function getBenefits() {
  const benefits = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/benefits?tagName=Turismo en Buenos Aires&limit=4`
  );

  if (!benefits.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return benefits.json();
}
