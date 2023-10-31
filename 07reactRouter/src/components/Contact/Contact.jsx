import React from 'react'
import { useLottie } from 'lottie-react'
import formAnimation from "../../lotties/form.json"

function Contact() {

    const options = {
        animationData: formAnimation,
        loop: true,
        autoplay: true
    };

    const { View } = useLottie(options)

    return (
        <>
            <div className='flex justify-around'>
                <div>
                    {View}
                </div>

                <div className='bg-slate-50 mt-20 p-3'> 
                    <h1 className='text-black font-extrabold text-2xl'>Your Application</h1>

                    <form action="">
                        <input type="text" />
                        <input type="text" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact