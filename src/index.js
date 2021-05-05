// test that we can get data from the backend
const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

  const baseURL = 'http://localhost:3000'
  const itemsURL = baseURL + '/actions'
  
  
  const list = document.getElementById("action-list")
  
  const form = document.getElementById('action-form')
  const nameInput = document.getElementById('action-name')
  const descriptionInput = document.getElementById('action-description')
  
  //const dropdown = document.getElementById('cat-dropdown')
  //const catNameInput = document.getElementById("category-name")
  
  form.addEventListener('submit', handleFormSubmit)
  
  function handleFormSubmit(e){
      e.preventDefault()
  
      ActionApi.createItem()
      form.reset()
  }
  
  
  ActionApi.getActions()
  
  //CategoryApi.getCategories()