export function calc(resultBoxContent,boxContent) {
  console.log(boxContent);
  if (boxContent == "C")  return "";
  return boxContent == "=" ? eval(resultBoxContent) : resultBoxContent+boxContent
}

