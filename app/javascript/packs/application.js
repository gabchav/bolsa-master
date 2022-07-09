import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'css/site'
import 'jquery'
import 'popper.js'
import 'bootstrap'

Rails.start()
Turbolinks.start()
ActiveStorage.start()