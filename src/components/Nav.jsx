import React from 'react'

const Nav = () => {
  const navlinks = [
    {
      name:'Home',
      url:'#home'
    },
    {
      name:'About',
      url:'#about'
    },
    {
      name:'Testimonials',
      url:'#testimonials'
    },
    {
      name:'Contact',
      url:'#contact'
    }
  ]

  return (
    <header className='w-full h-8 flex justify-between items-center py-8'>
      <div className=' ml-5'>
        <h1 className='text-4xl font-quicksand text-white'>KAIZEN INTERIORS</h1>
      </div>
      <nav>
        {navlinks.map(link =>(
          <a href={link.url} key={link.url} className='mr-10 font-gothic text-white hover:text-slate-400'>{link.name}</a>
        ))}
      </nav>
    </header>
  )
}

export default Nav
