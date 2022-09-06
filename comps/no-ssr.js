import dynamic from 'next/dynamic'

const Nossr = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(Nossr), {
  ssr: false
})
