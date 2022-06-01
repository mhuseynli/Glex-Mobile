import Vue from 'vue'
import RepositoryFactory from 'src/repositories/RepositoryFactory'

Vue.prototype.$repositories = RepositoryFactory;
