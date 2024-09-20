(function () {
    const signinForm = document.querySelector('[data-ajax="signin"]')
    const signupForm = document.querySelector('[data-ajax="signup"]')
    const dashboardPosts = document.querySelector('.dashboard-posts')
    const editForm = document.querySelector('[data-ajax="edit"]')
    const createForm = document.querySelector('[data-ajax="create"]')
    const ui = {
        message: document.querySelector('.message'),
        loader: document.querySelector('.loader'),
        confirm: function (mess) {
            if (!this.message) return false
            this.message.querySelector('.confirm p').textContent = mess
            this.message.classList.add('_active', '_confirm')
            return new Promise((resolve, reject) => {
                this.message.addEventListener('click', (e) => {
                    if (e.target.closest('[data-action="confirm"]')) {
                        resolve(true)
                        this.message.classList.remove('_active', '_confirm')
                    } else if (e.target.closest('[data-action="cancel"]')) {
                        resolve(false)
                        this.message.classList.remove('_active', '_confirm')
                    }
                })
            })
        },
        alert: function (mess, state) {
            if (!this.message) return false
            this.message.querySelector('.alert p').textContent = mess
            this.message.classList.add('_active', '_alert', state)
            return new Promise((resolve, reject) => {
                this.message.addEventListener('click', (e) => {
                    if (e.target.closest('[data-action="confirm"]')) {
                        resolve(true)
                        this.message.classList.remove('_active', '_alert', state)
                    }
                })
            })
        },
        loading: function (action) {
            if (!this.loader) return false
            switch (action) {
                case 'show':
                    this.loader.classList.add('_active')
                    break
                case 'hide':
                    this.loader.classList.remove('_active')
                    break
            }
            return true
        },
        destroy: function (uiPart) {
            switch (uiPart) {
                case 'message':
                    this.message.classList.remove('_active', '_alert', '_confirm', '_error', '_success')
                    break
                case 'loader':
                    this.loader.classList.remove('_active')
                    break
            }
        }
    }

    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            try {
                e.preventDefault()
                ui.loading('show')

                const formData = Object.fromEntries(new FormData(signinForm))
                const response = await fetch('/api/user/signin', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: { 'Content-Type': 'application/json' },
                })
                const data = await response.json()

                ui.loading('hide')
                if (!response.ok) {
                    ui.alert(data.message, '_error')
                    setTimeout(() => {
                        ui.destroy('message')
                    }, 900)
                    throw new Error(data.message)
                } else {
                    ui.alert(data.message, '_success')
                    setTimeout(() => {
                        window.location.href = '/dashboard'
                    }, 500)
                }
            } catch (err) {
                console.error(err)
            }
        })
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            try {
                e.preventDefault()
                ui.loading('show')

                const formData = Object.fromEntries(new FormData(signupForm))
                const response = await fetch('/api/user/signup', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: { 'Content-Type': 'application/json' },
                })
                const data = await response.json()

                ui.loading('hide')
                if (!response.ok) {
                    ui.alert(data.message, '_error')
                    setTimeout(() => {
                        ui.destroy('message')
                    }, 900)
                    throw new Error(data.message)
                } else {
                    ui.alert(data.message, '_success')
                    setTimeout(() => {
                        window.location.href = '/dashboard'
                    }, 500)
                }
            } catch (err) {
                console.error(err)
            }
        })
    }

    if (dashboardPosts) {
        document.addEventListener('click', async (e) => {
            try {
                if (e.target.closest('[data-ajax="post-delete"]')) {
                    e.preventDefault()
                    if (!await ui.confirm('Are you sure?')) return
                    ui.loading('show')

                    const formData = {
                        id: e.target.dataset.id,
                        user_id: e.target.dataset.user_id
                    }
                    const response = await fetch('/api/post/delete', {
                        method: 'DELETE',
                        body: JSON.stringify(formData),
                        headers: { 'Content-Type': 'application/json' },
                    })
                    const data = await response.json()

                    ui.loading('hide')
                    if (!response.ok) {
                        throw new Error(data.message)
                    } else {
                        dashboardPosts.innerHTML = data.dashboardPosts
                    }
                }
            } catch (err) {
                console.error(err)
            }
        })
    }

    if (editForm) {
        editForm.addEventListener('submit', async (e) => {
            try {
                e.preventDefault()
                ui.loading('show')

                const formData = {
                    ...Object.fromEntries(new FormData(editForm)),
                    id: e.target.dataset.id,
                    user_id: e.target.dataset.user_id
                }
                const response = await fetch('/api/post/edit', {
                    method: 'PUT',
                    body: JSON.stringify(formData),
                    headers: { 'Content-Type': 'application/json' },
                })
                const data = await response.json()

                ui.loading('hide')
                if (!response.ok) {
                    ui.alert(data.message, '_error')
                    setTimeout(() => {
                        ui.destroy('message')
                    }, 900)
                    throw new Error(data.message)
                } else {
                    ui.alert(data.message, '_success')
                    setTimeout(() => {
                        ui.destroy('message')
                    }, 900)
                }
            } catch (err) {
                console.error(err)
            }
        })
    }

    if (createForm) {
        createForm.addEventListener('submit', async (e) => {
            try {
                e.preventDefault()
                ui.loading('show')

                const formData = Object.fromEntries(new FormData(createForm))
                const response = await fetch('/api/post/create', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: { 'Content-Type': 'application/json' },
                })
                const data = await response.json()

                ui.loading('hide')
                if (!response.ok) {
                    ui.alert(data.message, '_error')
                    setTimeout(() => {
                        ui.destroy('message')
                    }, 900)
                    throw new Error(data.message)
                } else {
                    ui.alert(data.message, '_success')
                    setTimeout(() => {
                        window.location.href = '/dashboard'
                    }, 500)
                }
            } catch (err) {
                console.error(err)
            }
        })
    }

    window.onpopstate = () => setTimeout(alert.bind(window, "Pop"), 0);
})()