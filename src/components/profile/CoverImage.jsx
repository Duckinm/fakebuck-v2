import defaultImage from '/assets/cover.jpeg'

export default function CoverImage({ src }) {
  return <img alt="cover" src={src || defaultImage} />
}
