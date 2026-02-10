import React from 'react'

const FormGroup = ({title, children}:{title:string, children?:React.ReactNode}) => {
  return (
    <main className='flex flex-col outline-2 outline-muted rounded-md'>
      <section className='bg-muted py-2 px-4'>
        {title}
      </section>
      <section className='py-4 px-4 bg-background'>
        {children}
      </section>
    </main>
  )
}

export default FormGroup
