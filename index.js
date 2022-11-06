

// const configurationObject= {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'},
//     body: JSON.stringify({
//         dogName: 'Bryon',
//         dogBreed: 'Poodle'
// })}
// fetch('http://localhost:3000/dogs',configurationObject)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(object){
//         console.log(object)
//     })
//     .catch(function(error){
//         alert('Freak out, something went wrong')
//         console.log(error.message)
//     })


function submitData() {
    const posting= {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({
            name: 'Kasey',
            email: 'aol',
        })
    }
    return posting
}   
fetch('http://localhost:3000/users',submitData)
   .then(function(response) {
        return response.json()
    })
    .then(function(object){
        console.log(object)
    })
    .catch(function(error) {
        alert('submitData error alert')
        console.log(error.message)
    })





