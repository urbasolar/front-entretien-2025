/**
 * Option format for select component
 * @param data any[]
 * @param keyValue value
 * @param keyLabel label
 * @returns 
 */
export const optionFormat = (data: any[], keyValue: string, keyLabel: string) => {
  return data.map((item) => {
    return {
      value: item[keyValue],
      label: item[keyLabel],
    }
  });
}