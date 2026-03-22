/**
 * Validaciones para Chile
 * RUT (Rol Único Tributario) y formato de teléfono
 */

/**
 * Valida el dígito verificador del RUT chileno
 * Formato: XXXXXXXX-X (8-9 dígitos + dígito verificador)
 */
export const validateRUT = (rut: string): boolean => {
  if (!rut) return false

  // Limpiar formato (quitar puntos y guion)
  const cleanRut = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase()

  // Debe tener entre 8 y 9 caracteres (7-8 dígitos + 1 dígito verificador)
  if (cleanRut.length < 8 || cleanRut.length > 9) return false

  // Separar número y dígito verificador
  const body = cleanRut.slice(0, -1)
  const dv = cleanRut.slice(-1)

  // El cuerpo debe ser solo números
  if (!/^\d+$/.test(body)) return false

  // El dígito verificador debe ser número o K
  if (!/^[0-9K]$/.test(dv)) return false

  // Calcular dígito verificador esperado
  let sum = 0
  let multiplier = 2

  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier
    multiplier = multiplier === 7 ? 2 : multiplier + 1
  }

  const expectedDv = 11 - (sum % 11)
  const dvMap: Record<number, string> = {
    11: '0',
    10: 'K',
    [expectedDv]: expectedDv.toString(),
  }

  return dvMap[expectedDv] === dv
}

/**
 * Formatea el RUT para mostrar (XX.XXX.XXX-X)
 */
export const formatRUT = (rut: string): string => {
  const clean = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase()

  if (clean.length < 2) return clean

  const body = clean.slice(0, -1)
  const dv = clean.slice(-1)

  // Agregar puntos de miles
  let formattedBody = ''
  let count = 0
  for (let i = body.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
      formattedBody = '.' + formattedBody
    }
    formattedBody = body[i] + formattedBody
    count++
  }

  return `${formattedBody}-${dv}`
}

/**
 * Limpia el RUT (solo números y K, sin puntos ni guion)
 */
export const cleanRUT = (rut: string): string => {
  return rut.replace(/\./g, '').replace(/-/g, '').toUpperCase()
}

/**
 * Valida formato de teléfono chileno
 * Formatos aceptados:
 * - +56 9 XXXX XXXX
 * - +569XXXXXXXX
 * - 9 XXXX XXXX
 * - 9XXXXXXXX
 */
export const validateChileanPhone = (phone: string): boolean => {
  if (!phone) return false

  // Limpiar espacios y símbolos
  const clean = phone.replace(/[\s\+\-\(\)]/g, '')

  // Debe empezar con 569 o 9, y tener 9 o 11 dígitos totales
  if (clean.startsWith('569')) {
    return clean.length === 11 && /^\d+$/.test(clean)
  }

  if (clean.startsWith('9')) {
    return clean.length === 9 && /^\d+$/.test(clean)
  }

  return false
}

/**
 * Formatea número de teléfono chileno a +56 9 XXXX XXXX
 */
export const formatChileanPhone = (phone: string): string => {
  const clean = phone.replace(/[\s\+\-\(\)]/g, '')

  // Si ya tiene el código de país 56, quitarlo primero
  let number = clean
  if (clean.startsWith('569')) {
    number = clean.substring(2) // Dejar 9 al inicio
  } else if (clean.startsWith('56') && clean.length > 11) {
    number = clean.substring(2)
  }

  // Asegurar que empieza con 9
  if (!number.startsWith('9')) {
    return phone // Retornar original si no parece ser chileno
  }

  // Formatear: 9 XXXX XXXX
  if (number.length === 9) {
    return `+56 ${number[0]} ${number.substring(1, 5)} ${number.substring(5)}`
  }

  return phone
}

/**
 * Yup test para RUT chileno
 */
export const rutTest = {
  name: 'rut',
  message: 'RUT inválido. Formato: XX.XXX.XXX-X',
  test: (value: string | undefined) => {
    if (!value) return true // Allow empty if not required
    return validateRUT(value)
  },
}

/**
 * Yup test para teléfono chileno
 */
export const chileanPhoneTest = {
  name: 'chilean-phone',
  message: 'Teléfono inválido. Formato: +56 9 XXXX XXXX o 9 XXXX XXXX',
  test: (value: string | undefined) => {
    if (!value) return true // Allow empty if not required
    return validateChileanPhone(value)
  },
}
