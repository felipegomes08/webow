/**
 * Formats a numeric value as a currency string in Brazilian Real (BRL) format.
 *
 * @param value - The numeric value to be formatted.
 * @returns A string representing the value formatted as Brazilian currency.
 *
 * @example
 * ```typescript
 * const formattedValue = formatCurrency(1234.56);
 * console.log(formattedValue); // "R$ 1.234,56"
 * ```
 */
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

/**
 * Copies the provided text to the clipboard.
 *
 * This function attempts to use the modern Clipboard API to copy text to the clipboard.
 * If the Clipboard API is not available, it falls back to using a temporary textarea
 * element and the `document.execCommand('copy')` method for older browsers.
 *
 * @param text - The text to be copied to the clipboard.
 * @returns A promise that resolves to `true` if the text was successfully copied, or `false` if an error occurred.
 */
export const copyToClipboard = (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        return true;
      })
      .catch((_) => {
        return false;
      });
  } else {
    // Fallback para navegadores mais antigos
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      return true;
    } catch (_) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};

/**
 * Removes all non-digit characters from the given string.
 *
 * @param value - The string to be cleaned.
 * @returns A new string containing only the digit characters from the input string.
 */
export const cleanValue = (value: string): string => value.replace(/\D/g, '');

/**
 * Formats a Brazilian CPF number by adding dots and a dash.
 *
 * @param cpf - The CPF number as a string.
 * @returns The formatted CPF string in the format XXX.XXX.XXX-XX.
 */
export const formatCPF = (cpf: string): string => {
  const cleanedCPF = cleanValue(cpf);
  return cleanedCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};

/**
 * Formats a given phone number string into a standardized format.
 *
 * The input phone number is first cleaned using the `cleanValue` function,
 * and then formatted into the pattern `(XX) XXXXX-XXXX`.
 *
 * @param phone - The phone number string to be formatted.
 * @returns The formatted phone number string.
 */
export const formatPhone = (phone: string): string => {
  let cleanedPhone = cleanValue(phone);
  cleanedPhone =
    cleanedPhone.length > 11 ? cleanedPhone.slice(0, 11) : cleanedPhone;
  return cleanedPhone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
};
