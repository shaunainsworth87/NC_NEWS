exports.handlePsqlErrors = (err, req, res, next) => {
  exports.handleNonPsqlErrors = (err, req, res, next) => {
    if (err.status) {
      res.status(err.status).send({ msg: err.msg });
    } else next(err);
  };
  exports.handle500s = (err, req, res, next) => {
    console.log(err);
    res.status(500).send("Internal sever error");
  };
};
