export const jsonValidator = (inputJSON: string) => {
  try {
    JSON.parse(inputJSON);
  } catch (e) {
    return false;
  }
  return true;
}

export const isObject = (data: any) => {
  return !Array.isArray(data) && !!data && typeof (data) === 'object'
}