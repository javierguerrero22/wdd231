const myInfo = new URLSearchParams(window.location.search)
console.log(myInfo)

console.log(myInfo.get('first'))
console.log(myInfo.get('last'))
console.log(myInfo.get('phone'))

console.log(myInfo.get('timestamp'))
console.log(myInfo.get('email'))
console.log(myInfo.get('membership-level'))


document.querySelector('.thanks-container').innerHTML = `
<h2>🎸 Application Received!</h2>
<p>Welcome to the <strong>RiffMaster Community</strong>. Your journey to guitar mastery starts here! Here is your registration summary:</p>

<ul class="results-list">
    <li><strong>First Name:</strong> ${myInfo.get('first')}</li>
    <li><strong>Last Name:</strong> ${myInfo.get('last')}</li>
    <li><strong>Email:</strong> <a href="mailto:${myInfo.get('email')}">${myInfo.get('email')}</a></li>
    <li><strong>Mobile Number:</strong> ${myInfo.get('phone')}</li>
    <li><strong>Membership Level:</strong> <span class="highlight-gold">${myInfo.get('membership-level').toUpperCase()}</span></li>
    <li><strong>Submission Date:</strong> ${myInfo.get('timestamp')}</li>
</ul>

<p>Our team is reviewing your application. You'll receive a confirmation email with your exclusive access link shortly. <strong>Get ready to shred!</strong></p>`