let userNow = {
    id: 0,
    userName: '',
    password: ''
}

document.getElementById("btn-signup")
    .addEventListener('click', function (event) {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem('users')) ?? []

        let registerUsername = document.getElementById('registerUsername')
        let registerPassword = document.getElementById('registerPassword')

        let newuser = {
            id: users.length,
            userName: registerUsername.value,
            password: registerPassword.value
        }
        users.push(newuser)

        localStorage.setItem('users', JSON.stringify(users))

    })

document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        let loginName = document.getElementById('loginName')
        let loginPassword = document.getElementById('loginPassword')

        let users = JSON.parse(localStorage.getItem('users')) ?? []

        for (var i = 0; i < users.length; i++) {
            if (loginName.value === users[i].userName) {
                if (loginPassword.value === users[i].password) {
                    
                    window.location.href="/Last%20Term%20Test/2/Project/Project/Project.html"
                } else {
                    alert('Password khong chinh xac!')
                }
            } else {
                alert('User khong ton tai!')
            }
        }

    })


