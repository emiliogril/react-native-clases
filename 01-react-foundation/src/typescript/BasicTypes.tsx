import React from 'react'

export const BasicTypes = () => {

    const name:string = 'Emilio';
    const age: number = 47;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Quik'];

    // powers.push('Next')

  return (
    <>
    <h3>Tipos básicos</h3>

    { name } { age } { isActive ? 'true':'false' }
    <br />
    { powers.join(', ')}
    </>
  )
}
