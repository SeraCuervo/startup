const idGenerate = () => {
  let text = "";
  let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += character.charAt(Math.floor(Math.random() * character.length));

  return text;
}
export default idGenerate;