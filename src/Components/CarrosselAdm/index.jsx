// npm install @splidejs/splide
import Splide from '@splidejs/splide'
import { FcNext } from 'react-icons/fc'
import { ItemCarrosselAdm } from '../../Components/ItemCarrosselAdm'
import { Container } from './style'

import '@splidejs/splide/css/skyblue'
import { useEffect } from 'react'
import { api } from '../../service/api'

export function CarrosselAdm({ title, data }) {
  const id = crypto.randomUUID()
  useEffect(() => {
    new Splide(`#splide${id}`, {
      pagination: false,
      autoWidth: true,
    }).mount()
  }, [data, id])

  return (
    <Container>
      <section
        className="splide"
        aria-label="Splide Basic HTML Example"
        id={`splide${id}`}
      >
        <h2 id="carousel-heading">{title}</h2>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <FcNext className="teste" />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <FcNext />
          </button>
        </div>
        <div className="splide__track">
          <ul className="splide__list">
            {data.map((item) => (
              <ItemCarrosselAdm
                className="splide__slide"
                key={item.id}
                like={item.favorite}
                image={`${api.defaults.baseURL}/files/${item.image}`}
                title={item.name}
                subtitle={item.description}
                value={item.price.toFixed(2).replace('.', ',')}
                record={item}
              />
            ))}
          </ul>
        </div>
      </section>
    </Container>
  )
}
