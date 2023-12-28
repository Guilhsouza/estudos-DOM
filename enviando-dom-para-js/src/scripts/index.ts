const register = (element: HTMLFormElement): void => {
    const name = (element.children.namedItem('name') as HTMLInputElement).value;
    const password = (element.children.namedItem('password') as HTMLInputElement).value;
    const confirmPassword = (element.children.namedItem('confirmPassword') as HTMLInputElement).value;

    console.log([name, password, confirmPassword])
}