const myInfo = new URLSearchParams(window.location.search)
console.log(myInfo)

console.log(myInfo.get('first'))
console.log(myInfo.get('last'))
console.log(myInfo.get('phone'))
console.log(myInfo.get('organization'))
console.log(myInfo.get('timestamp'))
console.log(myInfo.get('email'))
console.log(myInfo.get('membership-level'))
console.log(myInfo.get('description'))

document.querySelector('.thanks-container').innerHTML = `
<h2>Application Received!</h2>
        <p>Thank you for joining the Chamber of Commerce. Here is the summary of your registration:</p>
        
        <ul class="results-list">
            <li><strong>First Name:</strong> ${myInfo.get('first')}</li>
            <li><strong>Last Name:</strong> ${myInfo.get('last')}</li>
            <li><strong>Email:</strong> <a href="mailto:${myInfo.get('email')}">${myInfo.get('email')}</a></li>
            <li><strong>Mobile Number:</strong> ${myInfo.get('phone')}</li>
            <li><strong>Business Name:</strong> ${myInfo.get('organization')}</li>
            <li><strong>Membership Level:</strong> ${myInfo.get('membership-level')}</li>
            <li><strong>Submission Date:</strong> ${myInfo.get('timestamp')}</li>
        </ul>
        
        <p>We will review your information and contact you shortly.</p>`
