import Section from '../../containers/Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

import zeldaImg from '../../assets/images/zelda.png'
import spiderImg from '../../assets/images/banner-homem-aranha.png'
import hogwartsImg from '../../assets/images/fundo_hogwarts.png'

import zoom from '../../assets/images/photo-zoom.png'
import play from '../../assets/images/play-video.png'

import close from '../../assets/images/close.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zeldaImg
  },
  {
    type: 'image',
    url: spiderImg
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/UjBOlcIpZeQ?si=ePOY0cULfU41EpxM'
  },
  {
    type: 'image',
    url: hogwartsImg
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    if (item.type === 'video') return play
  }

  return (
    <>
      <Section title={'Galeria'} bg={'black'}>
        <Items>
          {mock.map((i, index) => (
            <>
              <Item key={i.url}>
                <img
                  src={getMediaCover(i)}
                  alt={`Mídia ${index + 1} de ${name}`}
                />
                <Action>
                  <img
                    src={getMediaIcon(i)}
                    alt="Clique para maximizar a mídia"
                  />
                </Action>
              </Item>
            </>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" />
          </header>
          <img src={spiderImg} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
