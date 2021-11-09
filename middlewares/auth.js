const jwt = require('jsonwebtoken');
const Cookies = require('cookies');


const getAccessToken = (req, res) => {
  const auth_token = req.headers.authorization;
  const refresh_access_token = req.body.refresh_access_token;
  let tokens = {};

  if (auth_token) {
    tokens = { ...tokens, access_token: auth_token.split(' ')[1] };
    if (refresh_access_token) {
      tokens = { ...tokens, refresh_access_token }
    }
    return tokens;
  }
  if (req.cookies) {
    return {
      access_token: new Cookies(req, res).get('access_token'),
      refresh_access_token
    };
  }
}

const verifyJWTToken = (token, secret_key) => {
  return new Promise((res) => {
    jwt.verify(token, secret_key, async (error, payload) => {
      if (error) {
        logger.error(error);
        return res({ success: false });
      } else {
        return res({ success: true, payload })
      }
    })
  })
}

module.exports = {


  adminTokenValidate: async (req, res, next) => {
    const { access_token } = getAccessToken(req, res);

    if (access_token) {
      try {
        const { success, payload } = await verifyJWTToken(access_token,
          process.env.ACCESS_TOKEN_IDRSA);

        if (!success || !payload || !payload.is_admin) {
          return res.send({
            not_verified: true,
            message: 'Session expired. Please logout and login once again or not an authorized' +
              'admin',
            is_admin: false
          });
        } else {
          req.token_data = {
            ...payload
          };
          next();
        }
      } catch (err) {
        throw err;
      }
    } else {
      return res.send({ not_verified: true, error_message: 'token_absent' });
    }
  }
}