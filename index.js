const state = {
  store: [],
  users: [],
  pages: ['home', 'Girls', 'Guys', 'Sale'],
  pageSelected: '',
  modal: '',
  selectedProduct: null
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
  return state.store

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
    state.selectedPage = 'home'
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
    state.selectedPage = 'Girls'
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

  const searchbutton = document.createElement('button')
  const searchImage = document.createElement('img')
  searchImage.setAttribute('src', './assets/search.svg')
  searchbutton.addEventListener('click', function buttons() {
    state.modal = 'search'
    renderSrchButton(searchbutton)
  })
  searchbutton.append(searchImage)
  searchImage.append(searchbutton)

  const loginList = document.createElement('li')
  loginList.setAttribute('class', 'list_item_header_right')
  const loginButton = document.createElement('button')
  const loginimage = document.createElement('img')
  loginimage.setAttribute('src', './assets/login_person.svg')
  loginList.addEventListener('click', function buttons() {
    state.modal = 'login'
    renderLoginButton(loginButton)
  })

  loginButton.append(loginimage)
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


}

function renderLoginButton() {
}

function renderCartButton() {

}

function renderButtons() {

}




function renderMainProducts(items) {

}

function getProductItemToDisplay() {

}

function renderMain() {

}

function renderFooter() {

}

function render() {

  document.body.innerHTML = ''

  renderHeader()
  renderMain()
  renderFooter()
  renderButtons()
}

function init() {

}

init()

