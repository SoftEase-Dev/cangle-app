import { useEffect, useState } from 'react'
import './index.css'
import { getDevice } from './features/service/getDevice'
import { dev, device } from './types/deviceType'
import { getCaptures } from './features/service/getStatus'
import { cptrs } from './types/captures'
import { postDevice } from './features/service/postDevice'
import HistoryCard from './components/captures/history'

function App() {
  const [dataDevice, setDataDevice] = useState<dev>(device)
  const [image, setImage] = useState<cptrs>()
  const [dataCaptures, setDataCaptures] = useState<cptrs>()
  const [loading, setLoading] = useState<boolean>(false)
  const sliceData = dataCaptures?.data.slice(0, 10)

  // console.log(dataDevice.data.attributes.left)
  // console.log(dataDevice.data.attributes.right)
  // console.log(dataDevice.data.attributes.up)
  // console.log(dataDevice.data.attributes.forward)
  // console.log(dataDevice.data.attributes.backward)
  // console.log(dataDevice.data.attributes.down)
  // console.log(dataDevice.data.attributes.status)

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
      console.log(res.data.data[0].attributes)
      setDataCaptures(res.data)
      setLoading(false)
    }
  }

  const postController = async () => {
    await postDevice(dataDevice)
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

    if (button === 'status') {
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
      }, 5000);
    } else {
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
      }, 1000);
    }
  }

  useEffect(() => {
    postController()
  }, [dataDevice])

  useEffect(() => {
    resDevice()
    resCaptures()
  }, [dataDevice.data.attributes.status])

  return (
    <div className='max-w-screen-2xl mx-12 my-5'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row gap-5 w-full justify-between'>
          <div className='flex flex-col w-full gap-5'>
            <div className='border-2 border-slate-600 bg-slate-50 rounded-lg h-full w-full'>
              <img className='w-full max-h-[400px]' src={`http://193.203.164.177:1337${dataCaptures?.data[0]?.attributes.capturedImage.data.attributes.formats.large.url}`} alt="gambar" />
            </div>

            <div className='border-2 border-slate-600 bg-slate-50 rounded-lg h-[70%] w-full'>
              <div className='max-h-[250px] p-3 overflow-y-auto flex flex-col'>
                <h1 className='font-bold text-xl font-jakartaSans'>History</h1>
                {
                  sliceData?.map((data, index) => {
                    return (
                      <HistoryCard key={index} data={data} />
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='w-[40%] flex flex-col gap-10'>
            <div className='border-2 text-center border-slate-600 bg-slate-50 rounded-lg h-[250px] p-3 flex flex-col'>
              <h1 className='font-bold text-xl font-jakartaSans'>Result</h1>
              <h3 className='h-full items-center flex justify-center text-7xl'>{dataCaptures?.data[0].attributes.result}</h3>
            </div>

            {/* Arrow Controller */}
            <div className='w-full items-center flex flex-col'>
              <div>
                <button
                  onClick={() => handleClick('forward')}
                  className='arrow hover:border-[#f0607f] up' />
              </div>
              <div className='flex flex-row justify-between w-[50%]'>
                <button
                  onClick={() => handleClick('left')}
                  className='arrow hover:border-[#f0607f] left' />
                <button
                  onClick={() => handleClick('right')}
                  className='arrow hover:border-[#f0607f] right' />
              </div>
              <div>
                <button
                  onClick={() => handleClick('backward')}
                  className='arrow hover:border-[#f0607f] down' />
              </div>

              <div className='w-full flex flex-col text-white'>
                <div className='w-full justify-between gap-3 flex flex-row'>
                  <button
                    onClick={() => handleClick('up')}
                    className='bg-[#7C67FF] hover:bg-[#5547b0] w-full flex justify-center mt-5 rounded-lg p-3'>
                    UP
                  </button>
                  <button
                    onClick={() => handleClick('down')}
                    className='bg-[#7C67FF] hover:bg-[#5547b0] w-full flex justify-center mt-5 rounded-lg p-3'>
                    DOWN
                  </button>
                </div>
                <button
                  onClick={() => handleClick('status')}
                  className='bg-[#0030C7] hover:bg-[#4f67b6] flex justify-center mt-5 rounded-lg p-3'>
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
