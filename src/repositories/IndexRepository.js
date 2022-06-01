const resource = "api/index";

export default $axios => ({
  all() {
    return $axios.get(`${resource}`);
  },
});
