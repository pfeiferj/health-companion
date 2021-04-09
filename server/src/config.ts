class Config {
  private _port: number;
  private _session_secret: string;

  constructor() {
    this._port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

    this._session_secret = process.env.SESSION_SECRET || 'bad secret';
    if (!process.env.SESSION_SECRET) {
      if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
        throw new Error('Please set SESSION_SECRET, default secret is insecure');
      } else {
        console.warn('Please set SESSION_SECRET, default secret is insecure');
      }
    }
  }

  get PORT() {
    return this._port;
  }

  get SESSION_SECRET() {
    return this._session_secret;
  }
}

export default new Config();
