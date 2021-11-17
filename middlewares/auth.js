const jwt = require('jsonwebtoken');
const Cookies = require('cookies');

let fetchData = function (req, res) {
  let auth_token = req.headers.authorization;

  if (auth_token) {
    return auth_token.split(' ')[1];
  } else if (req.cookies) {
    return new Cookies(req, res).get('token');
  }
}

// const verifyJWTToken = (token, secret_key) => {
//   return new Promise((res) => {
//     jwt.verify(token, secret_key, async (error, payload) => {
//       if (error) {
//         logger.error(error);
//         return res({ success: false });
//       } else {
//         return res({ success: true, payload })
//       }
//     })
//   })
// }

module.exports = {

  tokenValidate: async (req, res, next) => {
    let token = fetchData(req, res);

    console.log('auth_token for req---', token, req.path);
    if (token) {
      let decoded_data = {};
      let auth = false;

      jwt.verify(token, process.env.TOKEN_SECRET, function (error, decoded) {
        if (error) {
          return res.send({
            verified: false,
            message: 'Session expired. Please login again'
          });
        } else {
          auth = true;
          console.log('decoded data-----', decoded);
          decoded_data = decoded;
        }
        req.token_data = {
          data: decoded_data,
          auth: auth
        };
        res.locals.type = decoded_data.type;
        next();
      })
    } else {
      console.log('we aint verified');
      return res.send({ verified: false });
    }

  },

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