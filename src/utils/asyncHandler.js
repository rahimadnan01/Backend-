const wrapAsync = (requestHandler) => {
  return function (req, res, next) {
    requestHandler(req, res, next).catch((err) => {
      next(err);
    });
  };
};

export { wrapAsync };
