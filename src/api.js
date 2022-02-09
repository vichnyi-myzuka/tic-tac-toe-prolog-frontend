import axios from "axios";
const url = "";

export async function initGame(mode) {
  try {
    return await axios.post(url + "/init", { mode });
  } catch (e) {
    console.log(e);
  }
}

export async function makeMove(player, position) {
  try {
    return await axios.post(url + "/move", { player, position });
  } catch (e) {
    console.log(e);
  }
}
