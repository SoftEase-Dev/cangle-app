import { useEffect, useState } from 'react'
import './index.css'
import { getDevice } from './features/service/getDevice'
import { dev, device } from './types/deviceType'
import { getCaptures } from './features/service/getStatus'
import { captures, cptrs } from './types/captures'
import { postDevice } from './features/service/postDevice'

function App() {
  const [dataDevice, setDataDevice] = useState<dev>(device)
  const [dataCaptures, setDataCaptures] = useState<cptrs>(captures)
  const [loading, setLoading] = useState<boolean>(false)

  // console.log(dataDevice.data.attributes.left)
  // console.log(dataDevice.data.attributes.right)
  // console.log(dataDevice.data.attributes.up)
  // console.log(dataDevice.data.attributes.forward)
  // console.log(dataDevice.data.attributes.backward)
  // console.log(dataDevice.data.attributes.down)

  const resDevice = async () => {
    setLoading(true)
    const res = await getDevice()

    if (res) {
      setDataDevice(res.data)
      setLoading(false)
    }
  }

  const resCaptures = async () => {
    setLoading(true)
    const res = await getCaptures()

    if (res) {
      setDataCaptures(res.data)
      setLoading(false)
    }
  }

  const postController = async () => {
    const res = postDevice(dataDevice)
    console.log(res)
  }

  const handleClick = (button: string) => {
    setDataDevice({
      data: {
        ...dataDevice.data,
        attributes: {
          ...dataDevice.data.attributes,
          [button]: true,
        }
      }
    });

    setTimeout(() => {
      setDataDevice({
        data: {
          ...dataDevice.data,
          attributes: {
            ...dataDevice.data.attributes,
            [button]: false,
          }
        }
      });
    }, 500);

  }

  useEffect(() => {
    postController()
  }, [dataDevice])

  useEffect(() => {
    resDevice()
    resCaptures()
  }, [])

  return (
    <div className='max-w-screen-2xl m-12'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row gap-5 w-full justify-between'>
          <div className='flex flex-col w-full gap-5'>
            <div className='border-2 border-slate-600 bg-slate-50 rounded-lg h-full w-full'>

            </div>

            <div className='border-2 border-slate-600 bg-slate-50 rounded-lg h-[50%] w-full'>
              <div className='max-h-[300px] p-3 overflow-y-auto flex flex-col'>
                <h1 className='font-bold text-xl font-jakartaSans'>History</h1>
              </div>
            </div>
          </div>
          <div className='w-[50%] flex flex-col gap-10'>
            <div className='border-2 border-slate-600 bg-slate-50 rounded-lg h-[250px] p-3'>
              <h1 className='font-bold text-xl font-jakartaSans'>Result</h1>
            </div>

            {/* Arrow Controller */}
            <div className='w-full items-center flex flex-col'>
              <div>
                <button
                  onClick={() => handleClick('forward')}
                  className='arrow up' />
              </div>
              <div className='flex flex-row justify-between w-[40%]'>
                <button
                  onClick={() => handleClick('left')}
                  className='arrow left' />
                <button
                  onClick={() => handleClick('right')}
                  className='arrow right' />
              </div>
              <div>
                <button
                  onClick={() => handleClick('backward')}
                  className='arrow down' />
              </div>

              <div className='w-full flex flex-col text-white'>
                <div className='w-full justify-between gap-3 flex flex-row'>
                  <button
                    onClick={() => handleClick('up')}
                    className='bg-[#9400FF] w-full flex justify-center mt-5 rounded-lg p-3'>
                    UP
                  </button>
                  <button
                    onClick={() => handleClick('down')}
                    className='bg-[#9400FF] w-full flex justify-center mt-5 rounded-lg p-3'>
                    DOWN
                  </button>
                </div>
                <button className='bg-[#0802A3] flex justify-center mt-5 rounded-lg p-3'>
                  Capture Device
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
