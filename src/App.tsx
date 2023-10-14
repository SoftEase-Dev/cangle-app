import './index.css'

function App() {
  return (
    <div className='max-w-screen-2xl m-12'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row gap-5 w-full justify-between'>
          <div className='flex flex-col w-full gap-5'>
            <div className='border border-slate-600 rounded-lg h-full w-full'>

            </div>

            <div className='border border-slate-600 rounded-lg h-[50%] w-full'>
              <div className='max-h-[300px] overflow-y-auto'>

              </div>
            </div>
          </div>
          <div className='w-[50%] flex flex-col gap-10'>
            <div className='border border-slate-600 bg-slate-100 rounded-lg h-[250px] p-3'>

            </div>

            {/* Arrow Controller */}
            <div className='w-full items-center flex flex-col'>
              <div>
                <span className='arrow up' />
              </div>
              <div className='flex flex-row justify-between w-[40%]'>
                <span className='arrow left' />
                <span className='arrow right' />
              </div>
              <div>
                <span className='arrow down' />
              </div>

              <div className='w-full flex flex-col text-white'>
                <button className='bg-black flex justify-center mt-5 rounded-lg p-3'>
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
