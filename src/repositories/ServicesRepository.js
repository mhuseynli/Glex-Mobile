const resource = "api/servisler";

export default $axios => ({
  all() {
    return $axios.get(`${resource}`);
  },
});
