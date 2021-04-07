class Config {
  private _api_route: string;

  constructor(){
    this._api_route = process.env.REACT_APP_API_ROUTE || ""
  }
  
  /**
   * The base route for the api. Set using the REACT_APP_API_ROUTE env variable.
   * @example "http://127.0.0.1:4000"
   */
  get API_ROUTE() {
    return this._api_route;
  }
}

export default new Config();
