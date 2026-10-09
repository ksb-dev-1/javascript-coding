function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    const clonedArray = [];

    for (let i = 0; i < value.length; i++) {
      clonedArray.push(deepClone(value[i]));
    }
    return clonedArray;
  }

  const clonedObject = {};

  for (const key in value) {
    clonedObject[key] = deepClone(value[key]);
  }
  return clonedObject;
}
