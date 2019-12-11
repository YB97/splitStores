function createUniqueIdBuilder() {
  let count = 0;
  return () => {
    const randomValue = +new Date();
    count++;
    return `${randomValue}_${count}`;
  };
}

export default createUniqueIdBuilder();
