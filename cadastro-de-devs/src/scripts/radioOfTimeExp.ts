export default function createRadio() {
    const radioHTML = document.createElement('radio')
    radioHTML.innerHTML = `<label for="expTime">Tempo de experiência: </label>
<input type="radio" name="expTime" id="zero-two" value="0-2">
<label for="zero-two">0-2 Anos</label>
<input type="radio" name="expTime" id="three-four" value="3-4">
<label for="three-four">3-4 Anos</label>
<input type="radio" name="expTime" id="five-more" value="5more">
<label for="five+">5+ Anos</label>`

    return radioHTML
}
