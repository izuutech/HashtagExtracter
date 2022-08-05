const extracter = (starter, conditions, string) => {
  let split = string.split("");
  for (let i = 0; i < split.length; i++) {
    for (let x = 0; x < conditions.length; x++) {
      if (split[i] === conditions[x]) {
        split[i] = starter;
      }
    }
  }
  const text = split.join("");
  const newText = text.split("#");
  let aResult = newText.filter((el) => {
    return el !== "";
  });
  return aResult.filter((el) => {
    return el !== " ";
  });
};

export default extracter;
