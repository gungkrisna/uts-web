fetch('https://newsapi.org/v2/top-headlines?q=covid&country=id&apiKey=263da32c9dca4ae4b4e8962f2dd24da2')
  .then((res) => res.json())
  .then((data) => {
   $.each(data.articles, function (i, item) {
    console.log(this.urlToImage)
        $('#infoList').append(`
        <div class="col">
                <div class="card h-100">
                    <img src="${this.urlToImage}" class="card-img-top" alt="${this.title}">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text text-start">${this.description}</p>
                    <a href="${this.url}" class="btn btn-primary">Baca</a>
                </div>
                </div>
        </div>`)
    })
  })
  .catch((err) => console.log(err));