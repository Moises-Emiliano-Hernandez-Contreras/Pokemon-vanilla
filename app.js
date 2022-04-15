
//console.log(getRandomInt(1,151))
document.addEventListener('DOMContentLoaded',()=>{
      let id=getRandomInt(1,151);
      recuperacion(id)
})
const getRandomInt=(min, max)=>{
      return Math.floor(Math.random() * (max - min)) + min;
}
const recuperacion=async(iden)=>{
      try {
            //let recuperar = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            let recuperar = await fetch(`https://pokeapi.co/api/v2/pokemon/`+iden)
            let respuesta= await recuperar.json()
            //console.log(respuesta);
            poke={
                  img:respuesta.sprites.other.dream_world.front_default,
                  nombre:respuesta.name,
                  hp:respuesta.stats[0].base_stat,
                  experiencia: respuesta.base_experience,
                  ataque:respuesta.stats[1].base_stat,
                  defensa:respuesta.stats[2].base_stat,
                  especial:respuesta.stats[3].base_stat
            }
            pintar_card(poke)
      } catch (error) {
            console.log(error)
      }
}
const pintar_card=(pokemon)=>{
      const flex=document.querySelector('.flex')
      const template=document.getElementById('template').content
      const clon=template.cloneNode(true)
      const fragment=document.createDocumentFragment()
      
      clon.querySelector('.card-body-img').setAttribute('src',pokemon.img)
      clon.querySelector('.card-body-title').innerHTML = `${pokemon.nombre}<span> ${pokemon.hp}</span>`
      clon.querySelector('.card-body-text').innerHTML=`${pokemon.experiencia} Exp`
      clon.querySelectorAll('.card-footer-social h3')[0].innerHTML=pokemon.ataque
      clon.querySelectorAll('.card-footer-social h3')[1].innerHTML=pokemon.especial
      clon.querySelectorAll('.card-footer-social h3')[2].innerHTML=pokemon.defensa
      fragment.appendChild(clon)

      flex.appendChild(fragment)
}