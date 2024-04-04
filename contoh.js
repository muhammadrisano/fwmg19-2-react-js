const biodata = {
  name: 'risano',
  alamat: 'padang',
  email: 'risano@mgail.com',
  jender: 'laki-laki'
}


const {name, alamat, ...data} = biodata

console.log(data);