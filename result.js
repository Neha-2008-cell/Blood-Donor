let donors = JSON.parse(localStorage.getItem('donors')) || []
function popup(){
 let district= document.getElementById('district').value
  let blood= document.getElementById('blood').value
 let name = document.getElementById('name').value
  let phone= document.getElementById('phone').value
 let whats= document.getElementById('whats').value
  let pin= document.getElementById('pin').value
if (district==='--Select District--' || blood==='--Select Blood Group--' || name===''|| phone==='' || whats==='' || pin==='') {
  alert('⚠️ Please fill all the fields')
  return;
}
if (pin.length !== 6) {
  alert('‼️ please enter 6-digit pincode')
  return ;
}
 if (phone.length !== 10) {
  alert('‼️ please enter 10-digit contact number')
  return ;
}
 if (whats.length !== 10) {
  alert('‼️ please enter 10-digit whatsapp number')
  return ;
}
if (name.length < 3) {
  alert('‼️ please enter at least 3 character in your name')
  return ;
}

donors.push({name, district,blood,phone,whats, pin})
localStorage.setItem('donors',JSON.stringify(donors))


alert('✅ Registered Successfully');

document.getElementById('my_form').reset()
}

function copy(){
    let phone= document.getElementById('phone').value
document.getElementById('whats').value = phone
}














function pop(){
 let selectdistrict= document.getElementById('district').value
  let selectblood= document.getElementById('blood').value
  let pin= document.getElementById('pin').value
if (selectdistrict==='--Select District--' || selectblood==='--Select Blood Group--' ||pin==='') {
  alert('⚠️ Please fill all the fields')
  return;
}
if (pin.length !== 6) {
  alert('‼️ please enter 6-digit pincode')
  return ;
}
let div = document.getElementById('result')
div.innerHTML=''

let newarray=[]
for(let i=0;i<donors.length;i++){
  if(donors[i].district===selectdistrict && donors[i].blood===selectblood){
    newarray.push(donors[i])
  }
}
  if(newarray.length > 0){
    for(let i=0;i < newarray.length;i++){
      div.innerHTML +=`<p><strong>Name</strong> : ${newarray[i].name} <br><strong>District</strong> : ${newarray[i]. district}<br><strong>Contact number</strong>: ${newarray[i].phone} <br><strong>Whatsapp number </strong>: ${newarray[i].whats}<br><strong>Pincode</strong> : ${newarray[i].pin}</p><hr>`
    }
  }
    else{div.innerHTML="<p style=font-weight:bold;>❌ No Donors Found</p>"}
  




}