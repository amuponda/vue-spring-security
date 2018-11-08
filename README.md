# vue-spring-security
A component library to secure the front end of a Vue.js app using the grails-spring-security-rest plugin. It is based on the grails security tag-lib.
## Install
### NPM
```
npm install vue-spring-security
#or
yarn add vue-spring-security
```
### Unpkg
If inluced via this method the components will automatically install itself.
```
<script type="text/javascript" src="https://unpkg.com/vue-spring-security"></script>
<script type="text/javascript" src="https://unpkg.com/vue-spring-securityt@0.3.0"></script>
                                                                <!-- Specific version -->
```
### Importing
You can import the component(s) as follows:
```
import { SecIfAllGranted } from 'vue-spring-security'
```
## Component API
### Props
| Name   | Type   | Required  | Description |
| -------| -------| ----------|--------------
| user   | Object | true      | An object representing the currently logged in user whose authorization you want to manage. Object should contain an authorities property. ```user: { authorities: ['ROLE_USER'] }```
| roles  | Array  | true      | An array of roles that should be tested against the user's authorities

### Components
#### 1. IfAllGranted
Shows the nested content if the user has all the specified roles.
```
<sec-if-all-granted :user="user" :roles="roles">
  <p>Stuff to show if user has all roles</p>
</sec-if-all-granted>
```
#### 2. IfAnyGranted
Shows the nested content if the user has any of the specified roles.
```
<sec-if-any-granted>
  <p>Stuff to show if user has any of the roles</p>
</sec-if-any-granted>
```
#### 3. IfNotGranted
Shows the nested content if the user does not have any of the nested roles.
```
<sec-if-not-granted>
 <p>Shown if user does not have any of the stated rows</p>
</sec-if-not-granted>
```
### Example
The lib-dev.vue component shows an example of how to use the components. It can be run via the service global addon from [Vue CLI](https://cli.vuejs.org/) which allows for rapid propotyping during development.
```
 vue serve src/lib-dev.vue
```
