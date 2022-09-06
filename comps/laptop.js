import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../config/model'
import { LaptopSpinner, LaptopContainer } from './laptop-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Laptop = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const pointLight1 = new THREE.PointLight(0x011C32, 3)
      pointLight1.position.set(-3,0,0)
      scene.add(pointLight1)

      const pointLight2 = new THREE.PointLight(0x011C32, 3)
      pointLight2.position.set(3,0,0)
      scene.add(pointLight2)

      const pointLight3 = new THREE.PointLight(0x011C32, 3)
      pointLight3.position.set(0,3,0)
      scene.add(pointLight3)

      const pointLight4 = new THREE.PointLight(0x011C32, 3)
      pointLight4.position.set(0,-3,0)
      scene.add(pointLight4)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, '/laptop.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => { 
        animate()
        setLoading(false)
      })


      let req = null
      let frame = 0
      const animate = () => {

        // console.log(scene.children[5]);

        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100 ) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)

          camera.lookAt(target)
        } else {
          controls.update()
        }

        if(scene.children[5].scale.x < 1){

          scene.children[5].scale.x += 0.01;
          scene.children[5].scale.y += 0.01;
          scene.children[5].scale.z += 0.01;
        }


        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <LaptopContainer ref={refContainer}>
      {loading && <LaptopSpinner />}
    </LaptopContainer>
  )
}

export default Laptop;
