fetch('../assets/json/hospitals.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data[1].name)
    $.each(data, function (i, item) {
        $('#rsList').append(`
            <tr>
                <td scope="row" class="align-middle text-center">${i + 1}</td>
                <td class="align-left">${this.name}</td>
                <td class="align-right">${this.address}</td>
                <td class="align-right">${this.phone ?? '-'}</td>
                <td class="align-right">${this.province}</td>
            </tr>`)
    })
  })
  .catch((err) => console.log(err));