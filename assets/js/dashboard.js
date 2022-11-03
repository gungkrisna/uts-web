fetch('https://gungkrisna.github.io/uts-web/assets/json/stats.json')
  .then((res) => res.json())
  .then((data) => {
    $('#infected').append(data.numbers.infected);
    $('#recovered').append(data.numbers.recovered);
    $('#fatal').append(data.numbers.fatal);
    $.each(data.regions, function (i, item) {
        $('#regionList').append(`
            <tr>
                <td scope="row" class="align-middle text-center">${i + 1}</td>
                <td class="align-left">${this.name}</td>
                <td class="align-right">${this.numbers.infected}</td>
                <td class="align-right">${this.numbers.recovered}</td>
                <td class="align-right">${this.numbers.fatal}</td>
            </tr>`)
    })
  })
  .catch((err) => console.log(err));