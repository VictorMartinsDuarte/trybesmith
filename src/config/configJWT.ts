const configJWT = {
  secret: 'tokensecreto',
  configs: { expiresIn: '1h', algorithm: 'HS256' },
};

export default configJWT;