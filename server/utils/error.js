export const createError = (status, message) => {
  const err = new Error();
  err.success = false;
  err.status = status;
  err.message = message;
  return err;
};
