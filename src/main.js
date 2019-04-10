const container = document.getElementById('image_container')

const fetchArr = []
for (let i = 1; i <= 7; i++) {
  fetchArr.push(
    fetch(`http://localhost:3000/images/${i}`)
  )
}

Promise.all(fetchArr)
  .then(responses => {
    return Promise.all(responses.map(r => {
      if (r.status < 300) {
        return r.text()
      }
    }).filter(Boolean))
  })
  .then(images => {
    images.forEach(image => {
      const img = new Image();
      img.src = image
      const Div = document.createElement('div')
      Div.className = 'image_container'
      Div.appendChild(img)
      container.appendChild(Div)
    })
  })
  .catch(e => console.log(e))
