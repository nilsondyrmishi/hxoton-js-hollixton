const state = {
  store: [],
  users: [],
  pages: ['home', 'Girls', 'Guys', 'Sale'],
  pageSelected: '',
  modal: '',
  selectedProduct: null,
  search: ''

}


function getItems() {
  return fetch('http://localhost:3000/store')
      .then(function (response) {
        return response.json()
      })
}

function getUsers() {
  return fetch('http://localhost:3000/users')
      .then(function (response) {
        return response.json()
      })
}

function getGirlsProd() {
  return state.store.filter(items => items.type === 'Girls')

}

function getSaleProd() {
  return state.store.filter(item => item.priceDiscounted)

}

function getGuysProd() {
  return state.store.filter(products => products.type === 'Guys')

}
function newItemTag(items) {
  const daysToConsider = 11
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const msForTenDaysAgo = Date.now() - day * daysToConsider
  const msForProductDate = Date.parse(items.dateEntered)
  return msForProductDate > msForTenDaysAgo
}

function renderHeader() {
  const header = document.createElement('header')

  const h1El = document.createElement('h1')
  h1El.textContent = 'Hollixton'
  h1El.addEventListener('click', function () {
    state.pageSelected = 'home'
    state.selectedProduct = null
    render()
  })

  const headerNavbar = document.createElement('nav')
  headerNavbar.setAttribute('class', 'headerNavbar')

  const headerUl = document.createElement('ul')
  headerUl.setAttribute('class', 'header_ul')

  const girlsListEl = document.createElement('li')
  girlsListEl.setAttribute('class', 'list_item_header')
  const anchorGirlsLi = document.createElement('a')
  anchorGirlsLi.addEventListener('click', function data() {
    state.pageSelected = 'Girls'
    state.selectedProduct = null
    render()
  })

  anchorGirlsLi.setAttribute('href', '#')
  anchorGirlsLi.textContent = 'Girls'
  girlsListEl.append(anchorGirlsLi)

  const guysListEl = document.createElement('li')
  guysListEl.setAttribute('class', 'list_item_header')
  const anchorGuysLi = document.createElement('a')
  anchorGuysLi.addEventListener('click', function data() {
    state.pageSelected = 'Guys'
    state.selectedProduct = null
    render()
  })
  anchorGuysLi.setAttribute('href', '#')
  anchorGuysLi.textContent = 'Guys'
  guysListEl.append(anchorGuysLi)

  const headerSaleList = document.createElement('li')
  headerSaleList.setAttribute('class', 'list_item_header')
  const anchorSaleList = document.createElement('a')
  anchorSaleList.addEventListener('click', function data() {
    state.pageSelected = 'Sale'
    state.selectedProduct = null
    render()
  })

  anchorSaleList.setAttribute('href', '#')
  anchorSaleList.textContent = 'Sale'
  headerSaleList.append(anchorSaleList)

  headerUl.append(h1El, girlsListEl, guysListEl, headerSaleList)
  headerNavbar.append(headerUl)



  const sectionRightOfHeader = document.createElement('section')
  sectionRightOfHeader.setAttribute('class', 'navbar_header_right')

  const ulRightHeader = document.createElement('ul')
  ulRightHeader.setAttribute('class', 'ul_header_right')

  const searchList = document.createElement('li')
  searchList.setAttribute('class', 'list_item_header_right')

  const searchButton = document.createElement('button')
  const searchImage = document.createElement('img')
  searchImage.setAttribute('src', './assets/search.svg')
  searchButton.addEventListener('click', function buttons() {
    state.modal = 'search'
    renderSrchButton(searchButton)
  })
  searchButton.append(searchImage)

  const loginList = document.createElement('li')
  loginList.setAttribute('class', 'list_item_header_right')
  const loginButton = document.createElement('button')
  const loginImage = document.createElement('img')
  loginImage.setAttribute('src', './assets/login_person.svg')
  loginList.addEventListener('click', function buttons() {
    state.modal = 'login'
    renderLoginButton(loginButton)
  })

  loginButton.append(loginImage)
  loginList.append(loginButton)

  const cartList = document.createElement('li')
  cartList.setAttribute('class', 'list_item_header_right')
  const buttonCart = document.createElement('button')
  const imageCart = document.createElement('img')
  imageCart.setAttribute('src', './assets/cart.svg')
  imageCart.addEventListener('click', function buttons() {
    state.modal = 'cart'
    renderCartButton(buttonCart)
  })
  buttonCart.append(imageCart)
  cartList.append(buttonCart)

  ulRightHeader.append(searchList, loginList, cartList)
  sectionRightOfHeader.append(ulRightHeader)
  header.append(headerNavbar, sectionRightOfHeader)
  document.body.append(header)

}

function renderSrchButton() {
const buttonSrchWrapper = document.createElement('div')
  buttonSrchWrapper.setAttribute('class','btn_search_wrapper')
  buttonSrchWrapper.addEventListener('click',function (){
    state.modal=''
    render()
  })

  const wrapperButton = document.createElement('div')
  wrapperButton.setAttribute('class','wrapper_button')
  wrapperButton.addEventListener('click',function (event){
    event.stopPropagation()
  })

  const modalClosed = document.createElement('button')
  modalClosed.setAttribute('class','btn_closed_modal')
  modalClosed.textContent = 'X'
  modalClosed.addEventListener('click',function button (){
    state.modal = ''
    render()
  })

  const buttonForm = document.createElement('form')
  buttonForm.setAttribute('class','form_search_button')
  buttonForm.addEventListener('submit',function (event){
    event.preventDefault()
    state.search = buttonForm.search.value
    render()
  })

  const buttonLabel = document.createElement('label')
  buttonLabel.setAttribute('class','search_btn_input')

  const inputButton = document.createElement('input')
  inputButton.setAttribute('class','search_btn_input')
  inputButton.setAttribute('type','text')
  inputButton.setAttribute('name','search')

  buttonLabel.append(inputButton)
  buttonForm.append(buttonLabel)


  const btnTitle = document.createElement('h2')
  btnTitle.textContent ='search items'

  wrapperButton.append(modalClosed,buttonForm,btnTitle)
  buttonSrchWrapper.append(wrapperButton)
  document.body.append(buttonSrchWrapper)
}

function renderLoginButton() {

  const buttonSrchWrapper = document.createElement('div')
  buttonSrchWrapper.setAttribute('class','btn_search_wrapper')
  buttonSrchWrapper.addEventListener('click',function (){
    state.modal=''
    render()
  })


  const wrapperButton = document.createElement('div')
  wrapperButton.setAttribute('class','wrapper_button')
  wrapperButton.addEventListener('click',function (event){
    event.stopPropagation()
  })

  const modalClosed = document.createElement('button')
  modalClosed.setAttribute('class','btn_closed_modal')
  modalClosed.textContent = 'X'
  modalClosed.addEventListener('click',function button (){
    state.modal = ''
    render()
  })
const signIn = document.createElement('form')
  signIn.setAttribute('class','signin_form')
  signIn.addEventListener('submit',function (event){
    event.preventDefault()
    userLogIn(inputEmail,labelPassword)
  })
  const labelEmail = document.createElement('label')
  labelEmail.setAttribute('name','emailinput')
  const pEl = document.createElement('p')
  pEl.textContent = 'Email'

  const inputEmail = document.createElement('input')
  inputEmail.setAttribute('class','email_input')
  inputEmail.setAttribute('type','email')
  inputEmail.setAttribute('name','emailinput')

  labelEmail.append(pEl,inputEmail)

  const labelPassword = document.createElement('label')
  labelEmail.setAttribute('name','passbutton')
  const p2El = document.createElement('p')
  p2El.textContent = 'Password'

  const inputPassword = document.createElement('input')
  inputPassword.setAttribute('class','input_password')
  inputPassword.setAttribute('type','password')
  inputPassword.setAttribute('name','passbutton')

  labelPassword.append(p2El,inputPassword)


  const btnSignInLabel = document.createElement('label')
  const btnSign = document.createElement('button')
  btnSign.textContent = 'SIGN IN'
  btnSign.setAttribute('class','button_signin')

  btnSignInLabel.append(btnSign)

  const btnTitle = document.createElement('h2')
  btnTitle.textContent = 'login'

  signIn.append(labelPassword,labelEmail,btnSignInLabel)

  wrapperButton.append(modalClosed,btnTitle,signIn)
  buttonSrchWrapper.append(wrapperButton)
  document.body.append(buttonSrchWrapper)

}

function renderCartButton() {

  const buttonSrchWrapper = document.createElement('div')
  buttonSrchWrapper.setAttribute('class','btn_search_wrapper')
  buttonSrchWrapper.addEventListener('click',function (){
    state.modal=''
    render()
  })


  const wrapperButton = document.createElement('div')
  wrapperButton.setAttribute('class','wrapper_button')
  wrapperButton.addEventListener('click',function (event){
    event.stopPropagation()
  })

  const modalClosed = document.createElement('button')
  modalClosed.setAttribute('class','btn_closed_modal')
  modalClosed.textContent = 'X'
  modalClosed.addEventListener('click',function button (){
    state.modal = ''
    render()
  })


  const btnTitle = document.createElement('h2')
  btnTitle.textContent = 'cart'

  wrapperButton.append(modalClosed,btnTitle)
  buttonSrchWrapper.append(wrapperButton)
  document.body.append(buttonSrchWrapper)


}

function renderButtons() {
  if (state.modal === '') return
  if (state.modal === 'search') renderSrchButton()
  if (state.modal === 'login') renderLoginButton()
  if (state.modal === 'cart') renderCartButton()

}




function renderMainProducts(items) {

}

function getProductItemToDisplay() {

}

function renderMain() {

}

function renderFooter() {
const footer = document.createElement('footer')

  const footerH2 = document.createElement('h2')
  footerH2.textContent = 'HOLLIXTON'
  const leftH2Footer = document.createElement('h2')
  leftH2Footer.textContent = 'United Kingdom'

  footer.append(footerH2,leftH2Footer)
  document.body.append(footer)
}

function render() {

  document.body.innerHTML = ''

  renderHeader()
  renderMain()
  renderFooter()
  renderButtons()
}

function init() {

    getUsers().then(users =>state.users=users)
    getItems().then(items =>state.store = items)

    render()
}

init()

