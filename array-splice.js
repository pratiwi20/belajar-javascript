function panggilSplice() {
  var kota = ['Lampung','Jakarta','Malang','Solo','Medan'];
  console.log(kota)
  kota.splice(0,3,'Jambi')
  return kota
}

console.log(panggilSplice())
