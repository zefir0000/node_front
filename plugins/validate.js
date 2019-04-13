import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

Validator.extend('truthy', value => !!value)

Vue.use(VeeValidate)
