function panggilSplice() {
  var kota = ['Lampung','Jakarta','Malang','Solo','Medan'];
  console.log(kota)
  // kota.splice(0,3,'Jambi')
  kota.splice(1,2)
  return kota
}

console.log(panggilSplice())
