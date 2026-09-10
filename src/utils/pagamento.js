export function verificarDigitosIguais(numeroCartao) {
  // Remove espaços e hífens
  const apenasNumeros = numeroCartao.replace(/[\s-]/g, '');

  // Se não tiver 16 dígitos, não aplica a regra de golpe
  if (apenasNumeros.length !== 16) return false;

  // Verifica se todos os dígitos são iguais ao primeiro
  const primeiroDigito = apenasNumeros[0];
  return apenasNumeros.split('').every((char) => char === primeiroDigito);
}