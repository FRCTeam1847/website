type PiwigoResponse<T> = {
  stat: "ok" | "fail";
  message?: string;
  result?: T;
};