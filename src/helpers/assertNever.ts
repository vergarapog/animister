const assertNever = (value: never): never => {
  throw new Error("Unhandle union member", value);
};

export default assertNever;
