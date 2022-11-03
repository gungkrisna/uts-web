fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.voaindonesia.com/api/zt-yqreivvqr')
  .then((res) => res.json())
  .then((data) => {
   $.each(data.items, function (i, item) {
    console.log(this.urlToImage)
        $('#infoList').append(`
        <div class="col">
                <div class="card h-100">
                    <img src="${this.enclosure.link}" class="card-img-top" alt="${this.title}">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text text-start">${this.description}</p>
                    <a href="${this.link}" class="btn btn-primary">Baca</a>
                </div>
                </div>
        </div>`)
    })
  })
  .catch((err) => console.log(err));