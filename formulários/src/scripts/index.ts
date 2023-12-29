const form = document.getElementById('orderForm')

form?.addEventListener('submit', (ev: Event): void => {
    ev.preventDefault()

    const name: string = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
    const address: string = (document.querySelector('input[name="address"]') as HTMLInputElement).value;
    const breadType: string = (document.querySelector('select[name="breadType"]') as HTMLSelectElement).value;
    const main: string = (document.querySelector('input[name="main"]:checked') as HTMLInputElement).value;
    const observations: string = (document.querySelector('textarea[name="observations"]') as HTMLTextAreaElement).value;

    const salad: string[] = []

    const saladsInSnack = (document.querySelectorAll<HTMLInputElement>('input[name="salad"]:checked')).forEach((item) => {
        salad.push(item.value)
    })

    console.log({
        name,
        address,
        breadType,
        main,
        observations,
        salad
    })
})