const register = (ev: Event): void => {
    const sectionElement = (ev.currentTarget as Node).parentNode

    const username = (sectionElement?.children.namedItem('username') as HTMLInputElement).value
    const password = (sectionElement?.children.namedItem('password') as HTMLInputElement).value
    const confirmPassword = (sectionElement?.children.namedItem('confirmPassword') as HTMLInputElement).value

    if (password !== confirmPassword) {
        return alert('As senhas não conferem!')
    }

    alert('Usuário cadastrado com sucesso!')
}

const button = document.getElementById('register-button')

button?.addEventListener('click', register)

const removeEvent = (): void => {
    button?.removeEventListener('click', register)
    alert('event removed')
}