function setCookie(user, statusCode, res) {
  // Due to some problem in deployement
  const token = user.getJWTToken();
  // const option = {
  //   expires: new Date(
  //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
  //   ),
  //   httpOnly: true,
  // };

  res.status(statusCode).json({ token, success: true, user });

  // res.status(statusCode).cookie('token', token,option).json({
  //   success:true,
  //   user,
  //   token,

  // })
}

export default setCookie;
