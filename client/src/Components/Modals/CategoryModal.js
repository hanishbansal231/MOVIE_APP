import React from 'react'
import MainModal from './MainModal'
import { Input } from '../UsedInputs'

function CategoryModal({ modalOpen, setModalOpen }) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className='inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full border border-border bg-main text-white rounded-2xl '>
        <h2 className='text-3xl font-bold'>Create</h2>
        <form className='flex text-left flex-col gap-3 text-text mt-6'>
          <Input
            type={'text'}
            placeholder={'Actions'}
            label={'Category Name'}
            bg={true}
          />
          <button
            onChange={() => setModalOpen(false)}
            className='w-full bg-subMain rounded hover:bg-transparent border border-subMain transitions py-3 text-white font-medium text-xl'
          >Add</button>
        </form>
      </div>
    </MainModal>
  )
}

export default CategoryModal