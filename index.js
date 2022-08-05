const wordsextracter = (starter, conditions, string) => {
  let result = [];
  let seperateAll = [];
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
  result = aResult.filter((el) => {
    return el !== " ";
  });
  console.log(result);
};

wordsextracter(
  "#",
  ["#", " ", "/"],
  "A boy is a girl ##awoman day# /go / #gsh"
);
