const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//     let zipCode = business.addressZipCode
   
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}
//     ${business["addressStateCode"]}
//     ${zipCode}
//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// });


// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })

//   console.log(newYorkBusinesses)

//   newYorkBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });


  const manufacturingBusinesses = businesses.filter(business => {
      let manufacturing = false

      if (business.companyIndustry === "Manufacturing"){
          manufacturing = true
      }
      return manufacturing
  })

  console.log(manufacturingBusinesses)

    manufacturingBusinesses.forEach(business => {
    outEl.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet}
      </section>
    `
    outEl.innerHTML += "<hr/>"
  });