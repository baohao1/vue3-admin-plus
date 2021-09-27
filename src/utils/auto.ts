import Cookies from "js-cookie";

const Token = "Token";

export function getToken() {
  console.log("获取获取");
  return Cookies.get(Token);
}

export function setToken(token: string) {
  return Cookies.set(Token, token);
}

export function removeToken() {
  return Cookies.remove(Token);
}
