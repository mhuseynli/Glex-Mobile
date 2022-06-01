const resource = "api/blog";

export default $axios => ({
  all() {
    return $axios.get(`${resource}`);
  },
  show(id) {
    return $axios.get(`${resource}/${id}`);
  }
});
