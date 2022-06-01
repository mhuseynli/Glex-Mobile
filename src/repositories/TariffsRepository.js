const resource = "api/tarifler";

export default $axios => ({
  all() {
    return $axios.get(`${resource}`);
  },
});
